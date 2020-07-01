import React from 'react';
import styled from 'styled-components';
import { SortButtonProps } from './HeaderContent.types';

// TODO: Change from <a> to <button> when no-styling button component exists.
const StyledLink = styled.a`
  justify-content: inherit;
  text-decoration: none;
  color: inherit;
  width: 100%;
`;

export const SortButton: React.FC<SortButtonProps> = ({ children, onClick }) => (
  <StyledLink
    href="#"
    role="button"
    onClick={e => {
      e.preventDefault();
      onClick();
    }}
    onKeyDown={e => {
      // Link should trigger on spacebar clicked like actual button.
      if (e.keyCode === 32) {
        onClick();
      }
    }}
  >
    {children}
  </StyledLink>
);
