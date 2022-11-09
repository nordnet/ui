import React from 'react';
import styled, { useTheme } from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';
import { ButtonContentComponent, ButtonContentProps } from './ButtonContent.types';
import { Flexbox, Spinner, Typography } from '../../../..';

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

const IconWrapper = styled.div`
  align-self: center;
`;

export const ButtonContent: ButtonContentComponent = (props) => {
  const {
    children,
    colorFn,
    icon,
    iconPlacement,
    loading,
    variant,
    size,
    delayLoadingSpinnerAnimation = true,
  } = props;
  const theme = useTheme();

  let type: 'primary' | 'secondary' | 'tertiary';
  switch (size) {
    case 's':
      type = 'tertiary';
      break;
    case 'm':
      type = 'secondary';
      break;
    default:
      type = 'primary';
      break;
  }

  const content = (
    <>
      {icon ? (
        <Flexbox
          container
          gutter={variant === 'neutral' && size === 's' ? 1 : 2}
          justifyContent="space-between"
          alignItems="baseline"
        >
          {iconPlacement === 'left' && <IconWrapper>{icon}</IconWrapper>}
          <Flexbox item>
            <Typography type={type} color="inherit" weight="bold" as="div">
              {children}
            </Typography>
          </Flexbox>
          {iconPlacement === 'right' && <IconWrapper>{icon}</IconWrapper>}
        </Flexbox>
      ) : (
        <Typography
          type={type}
          color="inherit"
          weight="bold"
          {...(size === 's' ? { as: 'div' } : {})}
        >
          {children}
        </Typography>
      )}
    </>
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
                variant === 'primary'
                  ? (t) => t.color.buttonSpinner
                  : colorFn || ((t) => t.color.buttonSpinnerSecondary)
              }
              size={getSpinnerSize(size)}
              delay={delayLoadingSpinnerAnimation}
            />
          </SpinnerAnimation>
        )}
      </AnimatePresence>
    </>
  );
};
