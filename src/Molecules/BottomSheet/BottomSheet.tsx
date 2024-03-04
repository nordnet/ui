import React, { useCallback, useEffect, useState } from 'react';
import FocusLock from 'react-focus-lock';
import { AnimatePresence, motion, useAnimate, useAnimationControls } from 'framer-motion';
import { RemoveScroll } from 'react-remove-scroll';

import { Flexbox, Icon, Portal, theme, useMedia, useOnClickOutside } from '../..';
import {
  Backdrop,
  BottomDragArea,
  DragHandle,
  Handle,
  StyledBottomSheet,
  StyledIconButton,
} from './BottomSheet.styles';
import { isBoolean } from '../../common/utils';
import { Props } from './BottomSheet.types';
import { TRANSITION_DURATION } from './constants';

const BottomSheet: React.FC<Props> = ({
  children,
  className,
  closeOnClickOutside,
  fullScreenMobile,
  height,
  invertedColors,
  onClose: onCloseExternal,
  open: isOpenExternal,
  showBackdrop = true,
  showSwipeHandle,
  title,
}) => {
  const isControlled = isBoolean(isOpenExternal);
  const isMobile = useMedia((t) => t.media.lessThan(theme.breakpoints.sm)) || false;

  const [isOpenInternal, setIsOpenInternal] = useState(true);
  const [touchDrag, setTouchDrag] = useState<number | null>(null);
  const controls = useAnimationControls();

  const [internalRef, animate] = useAnimate();

  const shouldRender = isControlled ? isOpenExternal : isOpenInternal;

  const onClose = useCallback(() => {
    setIsOpenInternal(false);
    if (typeof onCloseExternal === 'function') {
      onCloseExternal();
    }
  }, [onCloseExternal]);

  const enterAnimation = useCallback(() => {
    controls.start({
      bottom: 0,
      transition: {
        type: 'ease',
        duration: TRANSITION_DURATION,
      },
    });
  }, [controls]);

  const exitAnimation = useCallback(
    (bottom: number | string) => {
      controls.start({
        bottom,
        transition: {
          type: 'ease',
          duration: TRANSITION_DURATION,
        },
      });
    },
    [controls],
  );

  useOnClickOutside(internalRef, () => {
    if (closeOnClickOutside) {
      exitAnimation('-100%');
      onClose();
    }
  });

  useEffect(() => {
    if (shouldRender) {
      enterAnimation();
    }
  }, [shouldRender, enterAnimation]);

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchDrag(e?.touches?.[0]?.clientY);
    e.stopPropagation();
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (touchDrag && shouldRender) {
      const clientY = e?.touches?.[0]?.clientY;
      const diff = touchDrag - (clientY || 0);

      animate(
        internalRef.current,
        { bottom: diff, paddingBottom: diff },
        {
          type: 'keyframes',
          duration: 0,
        },
      );
    }
    e.stopPropagation();
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (touchDrag) {
      const touchEnd = e?.changedTouches?.[0]?.clientY;
      if (touchEnd - (touchDrag || 0) > 160) {
        exitAnimation(-800);
        onClose();
      } else {
        enterAnimation();
      }
    }
    setTouchDrag(null);
    e.stopPropagation();
  };

  return (
    <Portal>
      <AnimatePresence>
        {shouldRender ? (
          <FocusLock disabled={!isMobile}>
            <RemoveScroll enabled={isMobile}>
              {showBackdrop && (
                <motion.div
                  key="backdrop"
                  initial={{ opacity: 0, zIndex: theme.zIndex.overlay, position: 'fixed' }}
                  exit={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ type: 'ease', duration: TRANSITION_DURATION }}
                >
                  <Backdrop container alignItems="center" justifyContent="center" />
                </motion.div>
              )}
              <StyledBottomSheet
                key="bottomsheet"
                className={className}
                animate={controls}
                $fullScreenMobile={fullScreenMobile}
                height={height}
                $invertedColors={invertedColors}
                ref={internalRef}
                initial={{
                  bottom: '-100%',
                  position: 'fixed',
                  zIndex: theme.zIndex.modal,
                }}
                transition={{ type: 'ease', duration: TRANSITION_DURATION }}
              >
                <Flexbox container direction="column" gap={2}>
                  <DragHandle
                    onTouchEnd={handleTouchEnd}
                    onTouchMove={handleTouchMove}
                    onTouchStart={handleTouchStart}
                  >
                    <Flexbox container direction="column" width="100%">
                      {showSwipeHandle && (
                        <Flexbox item alignItems="center" alignSelf="center">
                          <Handle />
                        </Flexbox>
                      )}
                      <Flexbox container justifyContent="space-between" alignItems="center">
                        <Flexbox item>{title}</Flexbox>
                        <Flexbox item>
                          <StyledIconButton
                            $invertedColors={invertedColors}
                            onClick={onClose}
                            size="s"
                            variant="primary"
                          >
                            <Icon.Cross16 />
                          </StyledIconButton>
                        </Flexbox>
                      </Flexbox>
                    </Flexbox>
                  </DragHandle>
                </Flexbox>
                <Flexbox item>{children}</Flexbox>

                <BottomDragArea />
              </StyledBottomSheet>
            </RemoveScroll>
          </FocusLock>
        ) : null}
      </AnimatePresence>
    </Portal>
  );
};

export default BottomSheet;
