import React, { useRef, useState } from 'react';
import FocusLock from 'react-focus-lock';
import { AnimatePresence, motion } from 'framer-motion';
import { RemoveScroll } from 'react-remove-scroll';

import { Flexbox, Icon, Portal, theme, useOnClickOutside } from '../..';
import { Backdrop, StyledBottomSheet, StyledIconButton } from './BottomSheet.styles';
import { isBoolean } from '../../common/utils';
import { Props } from './BottomSheet.types';

const BottomSheet: React.FC<Props> = ({
  children,
  className,
  closeOnClickOutside,
  fullScreenMobile,
  height = 400,
  invertedColors,
  onClose: onCloseExternal,
  open: isOpenExternal,
  showBackdrop = true,
  title,
}) => {
  const internalRef = useRef<HTMLDivElement>(null);
  const isControlled = isBoolean(isOpenExternal);
  const [isOpenInternal, setIsOpenInternal] = useState(true);

  const TRANSITION_DURATION = 0.16;

  const onClose = () => {
    setIsOpenInternal(false);

    if (typeof onCloseExternal === 'function') {
      onCloseExternal();
    }
  };

  useOnClickOutside(internalRef, () => {
    if (closeOnClickOutside) {
      onClose();
    }
  });

  const shouldRender = isControlled ? isOpenExternal : isOpenInternal;

  return (
    <Portal>
      <AnimatePresence>
        {shouldRender ? (
          <FocusLock disabled={fullScreenMobile}>
            <RemoveScroll enabled={!fullScreenMobile}>
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
              <motion.div
                key="bottomsheet"
                initial={{
                  bottom: '-100%',
                  position: 'fixed',
                  zIndex: theme.zIndex.modal,
                }}
                exit={{ bottom: '-100%' }}
                animate={{ bottom: 0 }}
                transition={{ type: 'ease', duration: TRANSITION_DURATION }}
                style={{ width: '100%', height: '100%' }}
              >
                <StyledBottomSheet
                  className={className}
                  $fullScreenMobile={fullScreenMobile}
                  height={height}
                  $invertedColors={invertedColors}
                  ref={internalRef}
                >
                  <Flexbox container direction="column" gap={2}>
                    <Flexbox container item justifyContent="space-between" alignItems="center">
                      <Flexbox item>{title}</Flexbox>
                      {typeof onClose === 'function' && (
                        <Flexbox item>
                          <StyledIconButton
                            variant="primary"
                            onClick={onClose}
                            size="s"
                            $invertedColors={invertedColors}
                          >
                            <Icon.Cross16 />
                          </StyledIconButton>
                        </Flexbox>
                      )}
                    </Flexbox>
                    <Flexbox item>{children}</Flexbox>
                  </Flexbox>
                </StyledBottomSheet>
              </motion.div>
            </RemoveScroll>
          </FocusLock>
        ) : null}
      </AnimatePresence>
    </Portal>
  );
};

export default BottomSheet;
