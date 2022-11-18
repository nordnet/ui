import React from 'react';
import styled from 'styled-components';

import Button from '../BaseButton';
import { PillButtonProps, PillButtonComponent } from './PillButton.types';

const isSecondary = (variant: PillButtonProps['variant']) => variant === 'secondary';
const isNegative = (variant: PillButtonProps['variant']) => variant === 'negative';

const BORDER_RADIUS = {
  s: 3,
  m: 4,
  l: 5,
};

const StyledPillButton = styled(Button)<PillButtonProps>`
  border-radius: ${(p) => p.theme.spacing.unit(BORDER_RADIUS[p.size || 's'])}px;
  ${(p) =>
    (isSecondary(p.variant) || isNegative(p.variant)) &&
    `background-color: ${p.theme.color.background}`};

  ${(p) =>
    (isSecondary(p.variant) || isNegative(p.variant)) &&
    !p.disabled &&
    `
    color: ${
      isNegative(p.variant) ? p.theme.color.pillButtonBackgroundNegative : p.theme.color.link
    };
    &:hover {
      color:
      ${
        isNegative(p.variant)
          ? p.theme.color.pillButtonBackgroundNegativeHover
          : p.theme.color.buttonHoverSecondary
      };
      background-color: ${p.theme.color.background};
    }
    &:active {
      color:
      ${
        isNegative(p.variant)
          ? p.theme.color.pillButtonBackgroundNegativeActive
          : p.theme.color.buttonActiveSecondary
      };
      background-color: ${p.theme.color.background};
    }
  `};

  &::before {
    display: none;
  }
`;

export const PillButton: PillButtonComponent = React.forwardRef<
  HTMLAnchorElement | HTMLButtonElement,
  PillButtonProps
>((props, ref) => {
  const {
    variant = 'primary',
    size = 's',
    iconPlacement = 'left',
    delayLoadingSpinnerAnimation = true,
    children,
    onClick,
    ...rest
  } = props;
  const trackClick = (e: React.MouseEvent<Element, MouseEvent>) => {
    if (onClick) onClick(e);
  };

  return (
    <StyledPillButton
      {...rest}
      ref={ref as React.Ref<HTMLButtonElement>}
      size={size}
      type="button"
      onClick={trackClick}
      iconPlacement={iconPlacement}
      variant={variant}
      delayLoadingSpinnerAnimation={delayLoadingSpinnerAnimation}
    >
      {children}
    </StyledPillButton>
  );
});

PillButton.displayName = 'Button.Pill';
