import React from 'react';
import styled from 'styled-components';
import { Link, Typography } from '../..';
import { LinkSellComponent, Props, UsedLinkProps } from './LinkSell.types';

// TODO: change the 0.5 unit padding top when line-height is divisible by the unit (4px)
// prettier-ignore
const StyledLink = styled(Link)<Props & UsedLinkProps>`
  color: ${p => (p.disabled ? p.theme.color.disabled : p.theme.color.sell)};
  padding: ${p => p.theme.spacing.unit(0.5)}px ${p => p.theme.spacing.unit(1)}px;

  &:hover {
    text-decoration: none;

    ${p => !p.disabled && `
      color: ${p.theme.color.buttonText};
      background-color: ${p.theme.color.sell};
    `}
  }

  &:active {
    ${p => !p.disabled && `background-color: ${p.theme.color.sellActive};`}
  }
`;

export const LinkSell: LinkSellComponent = ({
  className,
  children,
  disabled,
  onClick,
  target,
  to,
  rel,
}) => (
  <StyledLink
    {...(disabled ? { as: 'span' as 'span' } : {})}
    className={className}
    disabled={disabled}
    onClick={onClick}
    to={to}
    target={target}
    rel={rel}
  >
    <Typography type="secondary" weight="bold" color="inherit">
      {children}
    </Typography>
  </StyledLink>
);

LinkSell.displayName = 'LinkSell';
