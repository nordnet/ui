import React from 'react';
import R from 'ramda';
import styled, { css, ThemedStyledProps } from 'styled-components';
import { Theme } from '../../theme/theme.types';
import { Props } from './Card.types';
import { isFunction } from '../../common/utils';

const getColor = (props: ThemedStyledProps<Props, Theme>) => {
  const { barColor, theme } = props;

  if (isFunction(barColor)) {
    return barColor(theme);
  }

  return 'transparent';
};

const barStyles = css<Props>`
  position: relative;

  &::before {
    content: '';
    display: block;
    width: 100%;
    height: ${(p) => p.theme.spacing.unit(2)}px;
    background: ${(p) => getColor(p)};
    position: absolute;
    top: 0;
    left: 0;
    ${(p) => p.theme.media.greaterThan(p.theme.breakpoints.sm)} {
      border-top-left-radius: ${(p) => p.theme.borderRadius8};
      border-top-right-radius: ${(p) => p.theme.borderRadius8};
    }
  }
`;

const StyledCard = styled.div<Props>`
  background: ${({ theme }) => theme.color.card};
  box-shadow: ${({ theme }) => `0 2px 2px 0  ${theme.color.shadowCard}`};

  ${(p) => (p.barColor ? barStyles : ``)};
  && {
    ${(p) => !R.isNil(p.grow) && `flex-grow: ${p.grow}`};
  }
  ${(p) => p.theme.media.greaterThan(p.theme.breakpoints.sm)} {
    border-radius: ${({ theme }) => theme.borderRadius8};
  }

  ${({ theme }) =>
    theme.isFeatureEnabled('shadows') &&
    `
      background: ${theme.colorTokens.neutral.background_default};
      box-shadow: ${
        theme.media.greaterThan(theme.breakpoints.sm) ? theme.shadow.medium : theme.shadow.low
      };
      border-radius: ${theme.borderRadius8};
      padding: ${theme.media.greaterThan(theme.breakpoints.sm) ? '20px' : '12px'};
  `}
`;

export const Card: React.FC<Props> = React.forwardRef<HTMLDivElement, Props>(
  ({ as, barColor, children, className, grow, ...rest }, ref) => (
    <StyledCard className={className} as={as} barColor={barColor} ref={ref} grow={grow} {...rest}>
      {children}
    </StyledCard>
  ),
);
Card.displayName = 'Card';
