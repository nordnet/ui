import React from 'react';
import styled from 'styled-components';
import { SortButtonProps } from './HeaderContent.types';
import { Button } from '../../../..';

const StyledHeaderButton = styled(Button)`
  width: 100%;
  justify-content: inherit;
  &:focus {
    outline: none;
  }
`;

export const SortButton: React.FC<SortButtonProps> = ({ children, onClick }) => (
  <StyledHeaderButton
    variant="neutral"
    onClick={e => {
      e.preventDefault();
      onClick();
    }}
  >
    {children}
  </StyledHeaderButton>
);
