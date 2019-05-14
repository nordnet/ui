import React from 'react';
import styled from 'styled-components';
import { VisuallyHiddenComponent } from './VisuallyHidden.types';

const Hidden = styled.div`
  position: absolute;
  height: 1px;
  width: 1px;
  overflow: hidden;
  clip: rect(1px, 1px, 1px, 1px);
`;

export const VisuallyHidden: VisuallyHiddenComponent = ({ children, as }) => (
  <Hidden as={as}>{children}</Hidden>
);
