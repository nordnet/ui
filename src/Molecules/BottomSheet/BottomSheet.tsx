import React, { useRef } from 'react';
import FocusLock from 'react-focus-lock';
import { AnimatePresence, motion } from 'framer-motion';
import { RemoveScroll } from 'react-remove-scroll';

import { Button, Flexbox, Icon, useOnClickOutside } from '../..';
import { Backdrop, StyledBottomSheet } from './BottomSheet.styles';
import { BackdropWrapperProps, Props } from './BottomSheet.types';

const BackdropWrapper: React.FC<BackdropWrapperProps> = ({ children, showBackdrop }) =>
  showBackdrop ? (
    <Backdrop container alignItems="center" justifyContent="center">
      {children}
    </Backdrop>
  ) : (
    <>{children}</>
  );

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
    <AnimatePresence>
      {open ? (
        <FocusLock disabled={fullScreenMobile}>
          <RemoveScroll enabled={!fullScreenMobile}>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              exit={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ type: 'ease', duration: 0.2 }}
            >
              <BackdropWrapper showBackdrop={showBackdrop}>
                <motion.div
                  key="bottomsheet"
                  initial={{ y: '100%', opacity: 1 }}
                  exit={{ y: '100%', opacity: 1 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ type: 'ease', duration: 0.3 }}
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
              </BackdropWrapper>
            </motion.div>
          </RemoveScroll>
        </FocusLock>
      ) : null}
    </AnimatePresence>
  );
};

export default BottomSheet;
