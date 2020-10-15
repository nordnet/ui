import React from 'react';
import styled, { StyledProps } from 'styled-components';
import { Props } from './Avatar.types';

import { Flexbox, Typography } from '../..';
import { isFunction } from '../../common/utils';

const getSize = (p: StyledProps<Props>) => {
  switch (p.size) {
    case 's':
      return p.theme.spacing.unit(6);
    case 'm':
    default:
      return p.theme.spacing.unit(8);
  }
};

const StyledDiv = styled(Flexbox)<Props>`
  background-color: ${({ theme, backgroundColor }) =>
    isFunction(backgroundColor) ? backgroundColor(theme) : theme.color.backgroundDark};
  width: ${getSize}px;
  height: ${getSize}px;
  font-size: ${getSize}px;
  border-radius: 50%;
`;

export const Avatar: React.FunctionComponent<Props> = ({
  children,
  size = 'm',
  backgroundColor,
}) => (
  <StyledDiv
    backgroundColor={backgroundColor}
    container
    alignItems="center"
    justifyContent="center"
    size={size}
  >
    <Typography type={size === 'm' ? 'tertiary' : 'caption'} color={(t) => t.color.textLight}>
      {children}
    </Typography>
  </StyledDiv>
);
