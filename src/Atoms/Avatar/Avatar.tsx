import React from 'react';
import styled from 'styled-components';
import { Props } from './Avatar.types';

const StyledDiv = styled.div`
  background-color: ${p => p.theme.color.backgroundDark};
  width: ${p => p.theme.spacing.unit(8)}px;
  height: ${p => p.theme.spacing.unit(8)}px;
  border-radius: 50%;
  line-height: ${p => p.theme.spacing.unit(8)}px;
`;
// eslint-disable-next-line react/prop-types
export const Avatar: React.FunctionComponent<Props> = ({ children }) => (
  <StyledDiv>{children}</StyledDiv>
);
