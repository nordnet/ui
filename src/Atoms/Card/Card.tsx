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
    height: ${(p) => p.theme.spacing.unit(1)}px;
    background: ${(p) => getColor(p)};
    position: absolute;
    top: 0;
    left: 0;
  }
`;

const StyledCard = styled.div<Props>`
  background: ${({ theme }) => theme.color.card};
  box-shadow: 0 2px 2px 0 ${({ theme }) => theme.color.shadowCard};
  ${(p) => (p.barColor ? barStyles : ``)};
  ${(p) => !R.isNil(p.grow) && `flex-grow: ${p.grow}`};
`;

export const Card: React.FC<Props> = React.forwardRef<HTMLDivElement, Props>(
  ({ as, barColor, children, className, grow }, ref) => (
    <StyledCard className={className} as={as} barColor={barColor} ref={ref} grow={grow}>
      {children}
    </StyledCard>
  ),
);
Card.displayName = 'Card';
