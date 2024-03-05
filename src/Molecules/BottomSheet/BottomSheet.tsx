import React, { useCallback, useRef, useState } from 'react';
import FocusLock from 'react-focus-lock';
import { AnimatePresence, PanInfo, motion, useDragControls } from 'framer-motion';
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
  const internalRef = useRef<HTMLDivElement>(null);

  const [isOpenInternal, setIsOpenInternal] = useState(true);
  const shouldRender = isControlled ? isOpenExternal : isOpenInternal;

  const onClose = useCallback(() => {
    setIsOpenInternal(false);
    if (typeof onCloseExternal === 'function') {
      onCloseExternal();
    }
  }, [onCloseExternal]);

  const dragControls = useDragControls();

  const startDrag = useCallback(
    (event: TouchEvent) => {
      dragControls.start(event, {
        snapToCursor: false,
      });
    },
    [dragControls],
  );

  const handleClose = useCallback(() => {
    setIsOpenInternal(false);

    if (onClose) {
      onClose();
    }
  }, [onClose]);

  const handleDragEnd = useCallback(
    (event: TouchEvent, info: PanInfo) => {
      if (info?.offset?.y > 100) {
        handleClose();
      }
    },
    [handleClose],
  );

  useOnClickOutside(internalRef, () => {
    if (closeOnClickOutside) {
      onClose();
    }
  });

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
                ref={internalRef}
                className={className}
                dragControls={dragControls}
                dragConstraints={{ right: 0, left: 0, top: 0, bottom: 0 }}
                dragListener={false}
                drag="y"
                onDragEnd={handleDragEnd}
                $fullScreenMobile={fullScreenMobile}
                height={height}
                $invertedColors={invertedColors}
                initial={{
                  bottom: '-100%',
                  position: 'fixed',
                  zIndex: theme.zIndex.modal,
                }}
                animate={{ bottom: 0 }}
                exit={{ bottom: '-100%' }}
                transition={{ type: 'ease', duration: TRANSITION_DURATION }}
              >
                <Flexbox container direction="column" gap={2}>
                  <DragHandle onTouchStart={startDrag}>
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
