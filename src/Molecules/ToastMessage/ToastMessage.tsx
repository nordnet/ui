import React, { useEffect, useImperativeHandle, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { Flexbox } from '../..';
import { BoxContainer, StyledTypography } from './ToastMessage.styled';
import { Props } from './ToastMessage.types';

const ToastMessages: React.FC<Props> = React.forwardRef(
  ({ label, icon, linkButton, isVisible, timeout = 6000 }, ref) => {
    const [visible, setVisibility] = useState<boolean>(isVisible || false);
    const [mouseEnter, setMouseEnter] = useState<boolean>(false);

    const duration = 0.35;
    const variants = {
      initial: {
        opacity: 0,
      },
      enter: {
        opacity: 1,
        transition: {
          duration,
          ease: 'easeInOut',
        },
      },
      exit: {
        opacity: 0,
        transition: { duration },
      },
    };

    useImperativeHandle(ref, () => ({
      setVisible: () => {
        setVisibility(!visible);
      },
    }));

    useEffect(() => {
      if (typeof ref === 'undefined' || ref === null) {
        setVisibility(isVisible || false);
      }

      if (mouseEnter) {
        setVisibility(true);
      }
    }, [isVisible, ref, mouseEnter]);

    useEffect(() => {
      const timer = setTimeout(() => {
        if (visible === true && !mouseEnter) {
          setVisibility(false);
        }
      }, timeout);
      return () => clearTimeout(timer);
    }, [timeout, visible, mouseEnter]);

    return (
      <AnimatePresence mode="wait">
        {visible && (
          <motion.div key="toast" variants={variants} initial="initial" animate="enter" exit="exit">
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
