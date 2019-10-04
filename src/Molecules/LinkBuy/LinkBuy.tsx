import React from 'react';
import styled from 'styled-components';
import Link from '../Link';
import { LinkBuyComponent, Props } from './LinkBuy.types';

// prettier-ignore
const StyledLink = styled(Link)<Props>`
  color: ${p => (p.disabled ? p.theme.color.disabled : p.theme.color.buy)};
  &:hover {
    text-decoration: none;
    ${p => p.disabled ? '' :
      `color: ${p.theme.color.buttonText};
       background-color: ${p.theme.color.buy};`}
  }
  padding: ${p => p.theme.spacing.unit(1)}px;
`;

export const LinkBuy: LinkBuyComponent = props => (
  <StyledLink
    {...(props.disabled ? { as: 'span' as 'span' } : {})}
    disabled={props.disabled}
    onClick={props.onClick}
    to={props.to}
    target={props.target}
    rel={props.rel}
  >
    {props.children}
  </StyledLink>
);

LinkBuy.displayName = 'LinkBuy';
