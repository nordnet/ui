import React, { useEffect, useImperativeHandle, useState, forwardRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { Flexbox } from '../..';
import { BoxContainer, StyledTypography } from './ToastMessage.styled';
import { Props } from './ToastMessage.types';

const ToastMessages: React.FC<Props> = forwardRef(
  ({ label, icon, linkButton, isVisible = false, key = 'toast', timeout = 6000 }, ref) => {
    const [visible, setVisibility] = useState(isVisible);
    const [mouseEnter, setMouseEnter] = useState(false);

    useImperativeHandle(ref, () => ({
      setVisible: () => {
        setVisibility(true);
      },
    }));

    useEffect(() => {
      if (mouseEnter) {
        setVisibility(true);
      }
    }, [mouseEnter]);

    useEffect(() => {
      if (typeof ref === 'undefined' || ref === null) {
        setVisibility((prevValue) => prevValue || isVisible);
      }
    }, [isVisible, ref]);

    useEffect(() => {
      const timer = setTimeout(() => {
        if (visible && !mouseEnter) {
          setVisibility(false);
        }
      }, timeout);
      return () => clearTimeout(timer);
    }, [timeout, visible, mouseEnter]);

    return (
      <AnimatePresence mode="wait">
        {visible && (
          <motion.div
            key={key}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
          >
            <BoxContainer
              onMouseEnter={() => setMouseEnter(true)}
              onMouseLeave={() => setMouseEnter(false)}
            >
              <Flexbox container alignItems="center" gap={6} align="center">
                <Flexbox item container gap={3}>
                  {icon && <Flexbox item>{icon}</Flexbox>}
                  <Flexbox item>
                    <StyledTypography type="primary" weight="bold">
                      {label}
                    </StyledTypography>
                  </Flexbox>
                </Flexbox>
                {linkButton && <Flexbox item>{linkButton}</Flexbox>}
              </Flexbox>
            </BoxContainer>
          </motion.div>
        )}
      </AnimatePresence>
    );
  },
);

export default ToastMessages;
