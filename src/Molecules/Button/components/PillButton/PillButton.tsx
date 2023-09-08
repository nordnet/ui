import React from 'react';
import styled, { css } from 'styled-components';
import { Theme } from '../../../../theme/theme.types';

import Button from '../BaseButton';
import { PillButtonProps, PillButtonComponent } from './PillButton.types';

const isSecondary = (variant: PillButtonProps['variant']) => variant === 'secondary';
const isNegative = (variant: PillButtonProps['variant']) => variant === 'negative';
const isTertiary = (variant: PillButtonProps['variant']) => variant === 'tertiary';

const BORDER_RADIUS = {
  s: 3,
  m: 4,
  l: 5,
};

const HEIGHT = {
  s: 6,
  m: 8,
  l: 8,
};

const PADDING_VERTICAL = {
  s: 0,
  m: 1,
  l: 1,
};

const PADDING_HORIZONTAL = {
  s: 3,
  m: 4,
  l: 4,
};

const getButtonColor = (variant: PillButtonProps['variant'], theme: Theme) => {
  switch (variant) {
    case 'negative':
      return theme.color.pillButtonBackgroundNegative;
    case 'tertiary':
      return theme.color.pillButtonTertiary;
    default:
      return theme.color.link;
  }
};

const StyledPillButton = styled(Button)<PillButtonProps>`
  border-radius: ${(p) => p.theme.spacing.unit(BORDER_RADIUS[p.size || 's'])}px;
  border: none;
  ${(p) =>
    (isSecondary(p.variant) || isNegative(p.variant)) &&
    `background-color: ${p.theme.color.background}`};

  ${(p) =>
    isTertiary(p.variant) && `background-color: ${p.theme.color.pillButtonBackgroundTertiary}`};

  ${(p) =>
    (isSecondary(p.variant) || isNegative(p.variant) || isTertiary(p.variant)) &&
    !p.disabled &&
    `
    color: ${getButtonColor(p.variant, p.theme)};
    &:hover {
      color:
      ${
        isNegative(p.variant)
          ? p.theme.color.pillButtonBackgroundNegativeHover
          : p.theme.color.pillButtonHoverSecondary
      };
      ${
        isTertiary(p.variant)
          ? `background-color: ${p.theme.color.pillButtonBackgroundTertiary}`
          : `background-color: ${p.theme.color.background}`
      };
    }
    &:active {
      color:
      ${
        isNegative(p.variant)
          ? p.theme.color.pillButtonBackgroundNegativeActive
          : p.theme.color.pillButtonActiveSecondary
      };
       ${
         isTertiary(p.variant)
           ? `background-color: ${p.theme.color.pillButtonBackgroundTertiary}`
           : `background-color: ${p.theme.color.background}`
       };
      }
  `};
  min-height: ${(p) => `${p.theme.spacing.unit(HEIGHT[p.size!])}px`};
  padding: ${(p) => `
    ${p.theme.spacing.unit(PADDING_VERTICAL[p.size!])}px
    ${p.theme.spacing.unit(PADDING_HORIZONTAL[p.size!])}px
  `};
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
