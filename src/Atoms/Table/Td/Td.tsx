import React from 'react';
import styled from 'styled-components';
import { TdComponent, Props } from './Td.types';

// prettier-ignore
const StyledTd = styled.td<Props>`
  height: 100%;
  padding: ${p => p.theme.spacing.unit(2)}px ${p => p.theme.spacing.unit(1)}px;
  text-align: ${p => p.textAlign};

  :first-child {
    padding-left: 0;
  }
  :last-child {
    padding-right: 0;
  }

  ${p => p.ellipsis ?
    `white-space: nowrap;
     overflow: hidden;
     text-overflow: ellipsis;
    ` : '' }
`;

export const Td: TdComponent = ({ textAlign = 'left', ellipsis = false, children }) => (
  <StyledTd textAlign={textAlign} ellipsis={ellipsis}>
    {children}
  </StyledTd>
);
