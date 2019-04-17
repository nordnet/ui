import React from 'react';
import styled from 'styled-components';
import { TbodyComponent, Props } from './Tbody.types';

const StyledTbody = styled.tbody<Props>`
  width: 100%;
  overflow: 'auto';
  @supports (-webkit-overflow-scrolling: touch):  {
    overflow: scroll;
    -webkit-overflow-scrolling: touch;
  }
`;

export const Tbody: TbodyComponent = ({ children }) => <StyledTbody>{children}</StyledTbody>;
