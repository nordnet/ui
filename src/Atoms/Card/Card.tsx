import React from 'react';
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
  ${p => p.theme.media.greaterThan(p.theme.breakpoints.sm)} {
    position: relative;

    &::before {
      content: '';
      display: block;
      width: 100%;
      height: ${p => p.theme.spacing.unit(1)}px;
      background: ${p => getColor(p)};
      position: absolute;
      top: 0;
      left: 0;
    }
  }
`;

const StyledCard = styled.div<Props>`
  background: ${({ theme }) => theme.color.card};
  box-shadow: 0 2px 2px 0 ${({ theme }) => theme.color.shadowCard};
  ${p => (p.barColor ? barStyles : ``)}
`;

export const Card: React.FC<Props> = ({ as, barColor, children, className }) => (
  <StyledCard className={className} as={as} barColor={barColor}>
    {children}
  </StyledCard>
);
Card.displayName = 'Card';
