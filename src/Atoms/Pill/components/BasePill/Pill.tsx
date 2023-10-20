import React from 'react';
import styled, { css, ExecutionContext } from 'styled-components';
import R from 'ramda';

import { Props } from './Pill.types';
import { isFunction } from '../../../../common/utils';

const CleanDiv = React.forwardRef<HTMLDivElement, any>((props, ref) => (
  <div ref={ref} {...R.omit(['barColor', 'noPadding'])(props)} />
));

// TODO: move this into a shared utils file
const getColor = (props: ExecutionContext & Props) => {
  const { barColor, theme } = props;

  if (isFunction(barColor)) {
    return barColor(theme);
  }

  return 'transparent';
};

const barStyles = css<Props>`
  border-left: 2px solid ${(p) => getColor(p)};
`;

const StyledDiv = styled(CleanDiv)<Props>`
  display: inline-block;
  ${(p) => (p.noPadding ? `` : `padding: 0 ${p.theme.spacing.unit(1)}px`)};
  box-sizing: border-box;
  background: ${({ theme }) => theme.color.card};
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.21);
  ${(p) => (p.barColor ? barStyles : ``)}
`;

export const Pill: React.FC<Props> = ({ barColor, className, children, noPadding }) => (
  <StyledDiv className={className} barColor={barColor} noPadding={noPadding}>
    {children}
  </StyledDiv>
);

Pill.displayName = 'Pill';
