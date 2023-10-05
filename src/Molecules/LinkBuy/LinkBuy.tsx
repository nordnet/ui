import React from 'react';
import styled from 'styled-components';
import { Link, Typography } from '../..';
import { LinkBuyComponent, UsedLinkProps as Props } from './LinkBuy.types';

// TODO: change the 0.5 unit padding top when line-height is divisible by the unit (4px)
// prettier-ignore
const StyledLink = styled(Link)<Props>`
  color: ${p => (p.disabled ? p.theme.color.disabledText : p.theme.color.buy)};
  padding: ${p => p.theme.spacing.unit(0.5)}px ${p => p.theme.spacing.unit(1)}px;
  border-radius: ${p => p.theme.borderRadius2};

  &:hover {
    text-decoration: none;

    ${p => !p.disabled && `
      color: ${p.theme.color.buttonText};
      background-color: ${p.theme.color.buyHover};
    `}
  }

  &:active {
    ${p => !p.disabled && `background-color: ${p.theme.color.buyActive};`}
  }
`;

export const LinkBuy: LinkBuyComponent = ({
  className,
  children,
  disabled,
  onClick,
  target,
  to,
  rel,
  ...rest
}) => (
  <StyledLink
    {...(disabled ? { as: 'span' as any } : {})}
    className={className}
    disabled={disabled}
    onClick={onClick}
    to={to}
    target={target}
    rel={rel}
    {...rest}
  >
    <Typography type="secondary" weight="bold" color="inherit">
      {children}
    </Typography>
  </StyledLink>
);

LinkBuy.displayName = 'LinkBuy';
