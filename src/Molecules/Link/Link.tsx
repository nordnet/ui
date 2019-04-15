import React from 'react';
import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';
import { LinkComponent, Props } from './Link.types';

const StyledLink = styled(RouterLink)<Props>`
  color: ${p => p.theme.color.cta};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const Link: LinkComponent = props => (
  <StyledLink
    className={props.className}
    onClick={props.onClick}
    to={props.to}
    target={props.target}
  >
    {props.children}
  </StyledLink>
);
