import React from 'react';
import styled from 'styled-components';
import Link from '../Link';
import { LinkSellComponent, Props } from './LinkSell.types';

// prettier-ignore
const StyledLink = styled(Link)<Props>`
  color: ${p => (p.disabled ? p.theme.color.disabled : p.theme.color.sell)};
  &:hover {
    text-decoration: none;
    ${p => p.disabled ? '' :
      `color: ${p.theme.color.buttonText};
       background-color: ${p.theme.color.sell};`}
  }
  padding: ${p => p.theme.spacing.unit(1)}px;
`;

export const LinkSell: LinkSellComponent = props => (
  <StyledLink
    {...(props.disabled ? { as: 'span' } : {})}
    disabled={props.disabled}
    onClick={props.onClick}
    to={props.to}
    target={props.target}
  >
    {props.children}
  </StyledLink>
);

LinkSell.displayName = 'LinkSell';
