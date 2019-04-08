import React from 'react';
import styled from 'styled-components';
// @ts-ignore
import flags from './flags';
import { FlagComponent, Props } from './Flag.types';

const StyledFlag = styled.svg<Props>`
  width: ${p => p.theme.spacing.unit(p.width || 5)}px;
  height: ${p => p.theme.spacing.unit(p.height || 5)}px;
`;

export const Flag: FlagComponent = props => {
  const Component = flags[props.country.toLowerCase()];

  return Component ? (
    <StyledFlag role="img" as={Component} width={props.width} height={props.height} />
  ) : null;
};
