import React from 'react';
import styled from 'styled-components';
import { TfootComponent, Props } from './Tfoot.types';

const StyledTfoot = styled.tfoot<Props>`
  height: 100%;
  padding: ${p => p.theme.spacing.unit(2)}px 0;
  border-top: 1px solid ${p => p.theme.color.divider};
`;

export const Tfoot: TfootComponent = ({ children }) => <StyledTfoot>{children}</StyledTfoot>;
