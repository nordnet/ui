import React from 'react';
import styled from 'styled-components';

import Button from '../BaseButton';
import { IconButtonProps, IconButtonComponent } from './IconButton.types';

const SIZE = {
  s: 7,
  m: 8,
  l: 10,
};

const StyledIconButton = styled(Button)<{ size: 's' | 'm' }>`
  background-color: ${(p) => p.theme.color.pillButtonBackgroundTertiary};
  border-radius: 50%;
  box-sizing: border-box;
  color: ${(p) => p.theme.color.pillButtonTertiary};
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: ${(p) => p.theme.spacing.unit(SIZE[p.size || 'm'])}px;
  width: ${(p) => p.theme.spacing.unit(SIZE[p.size || 'm'])}px;

  ${(p) => {
    return p.disabled
      ? `color: ${p.theme.color.buttonTextDisabled};`
      : `
    &:hover {
      background-color: ${p.theme.color.background};
      color: ${p.theme.color.pillButtonHoverSecondary};
    }
    &:active {
      background-color: ${p.theme.color.background};
      color: ${p.theme.color.pillButtonActiveSecondary};
    }
  `;
  }}
  &::before {
    display: none;
  }
`;

export const IconButton: IconButtonComponent = React.forwardRef<
  HTMLAnchorElement | HTMLButtonElement,
  IconButtonProps
>((props, ref) => {
  const { size = 'm', delayLoadingSpinnerAnimation = true, children, onClick, ...rest } = props;
  const trackClick = (e: React.MouseEvent<Element, MouseEvent>) => {
    if (onClick) onClick(e);
  };

  return (
    <StyledIconButton
      {...rest}
      ref={ref as React.Ref<HTMLButtonElement>}
      size={size}
      type="button"
      onClick={trackClick}
      variant="secondary"
      delayLoadingSpinnerAnimation={delayLoadingSpinnerAnimation}
    >
      {children}
    </StyledIconButton>
  );
});

IconButton.displayName = 'Button.Icon';
