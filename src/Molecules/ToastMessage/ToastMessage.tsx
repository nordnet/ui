import React, { useEffect, useState, useImperativeHandle } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { Flexbox } from '../..';
import { BoxContainer, StyledTypography } from './ToastMessage.styled';
import { Props } from './ToastMessage.types';

const ToastMessages: React.FC<Props> = React.forwardRef((props, ref) => {
  const { label, icon, linkButton, isVisible, timeout = 6000 } = props;

  const [visible, setVisible] = useState<boolean>(isVisible);
  const duration = 0.35;

  useImperativeHandle(
    ref,
    () => {
      return {
        controlledVisible() {
          setVisible(!visible);
        },
      };
    },
    [visible],
  );

  const variants = {
    initial: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
      transition: {
        duration,
        delay: duration,
        when: 'beforeChildren',
        ease: 'easeInOut',
      },
    },
    exit: {
      opacity: 0,
      transition: { duration },
    },
  };

  useEffect(() => {
    setVisible(isVisible);
  }, [isVisible]);

  useEffect(() => {
    if (visible) {
      setTimeout(() => {
        setVisible(false);
      }, timeout);
    }
  }, [timeout, visible]);

  return (
    <AnimatePresence mode="wait">
      {visible && (
        <motion.div key="toast" variants={variants} initial="initial" animate="enter" exit="exit">
          <BoxContainer>
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
});

export default ToastMessages;
