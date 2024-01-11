import React, { useRef } from 'react';
import FocusLock from 'react-focus-lock';
import { AnimatePresence, motion } from 'framer-motion';
import { RemoveScroll } from 'react-remove-scroll';

import { Button, Flexbox, Icon, Portal, theme, useOnClickOutside } from '../..';
import { Backdrop, StyledBottomSheet } from './BottomSheet.styles';
import { Props } from './BottomSheet.types';

const BottomSheet: React.FC<Props> = ({
  children,
  className,
  closeOnClickOutside,
  fullScreenMobile,
  height = '40%',
  onClose,
  open,
  showBackdrop = true,
  title,
}) => {
  const internalRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(internalRef, () => {
    if (closeOnClickOutside && typeof onClose === 'function') {
      onClose();
    }
  });

  return (
    <Portal>
      <AnimatePresence>
        {open ? (
          <FocusLock disabled={fullScreenMobile}>
            <RemoveScroll enabled={!fullScreenMobile}>
              {showBackdrop && (
                <motion.div
                  key="backdrop"
                  initial={{ opacity: 0, zIndex: theme.zIndex.overlay, position: 'fixed' }}
                  exit={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ type: 'ease', duration: 0.2 }}
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
                transition={{ type: 'ease', duration: 0.2 }}
                style={{ width: '100%', height: '100%' }}
              >
                <StyledBottomSheet
                  className={className}
                  fullScreenMobile={fullScreenMobile}
                  height={height}
                  ref={internalRef}
                >
                  <Flexbox container direction="column" gap={2}>
                    <Flexbox container item justifyContent="space-between" alignItems="center">
                      <Flexbox item>{title}</Flexbox>
                      {typeof onClose === 'function' && (
                        <Flexbox item>
                          <Button.Icon variant="primary" onClick={onClose} size="s">
                            <Icon.Cross16 color="currentColor" />
                          </Button.Icon>
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
