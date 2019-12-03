import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { ButtonContentComponent, ButtonContentProps } from './ButtonContent.types';
import { Typography, Spinner } from '../../..';

const LOADING_ANIMATION_DURATION = 0.2;

const getSpinnerSize = (size: ButtonContentProps['size']) => {
  switch (size) {
    case 's':
      return 3;
    case 'm':
      return 5;
    default:
      return 6;
  }
};

const SpinnerAnimation = styled(motion.span)`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonContent: ButtonContentComponent = props => {
  const { children, colorFn, loading, variant, size } = props;
  const theme = useContext(ThemeContext);

  const content = (
    <Typography type={size === 'l' ? 'primary' : 'secondary'} color="inherit" weight="bold">
      {children}
    </Typography>
  );

  if (variant === 'neutral') {
    return content;
  }

  return (
    <>
      <motion.span
        initial={{ opacity: 1 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: LOADING_ANIMATION_DURATION }}
      >
        {content}
      </motion.span>
      <AnimatePresence>
        {loading && (
          <SpinnerAnimation
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: LOADING_ANIMATION_DURATION }}
          >
            <Spinner
              id={`spinner-${variant}-${size}-${colorFn && colorFn(theme)}`} // TODO: replace with unique id
              color={
                variant === 'primary' ? t => t.color.buttonText : colorFn || (t => t.color.cta)
              }
              size={getSpinnerSize(size)}
            />
          </SpinnerAnimation>
        )}
      </AnimatePresence>
    </>
  );
};
