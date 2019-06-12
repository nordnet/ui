import React from 'react';
import styled, { ThemedStyledProps } from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';
import { LinkComponent, LinkProps, ButtonProps } from './Link.types';
import { Theme } from '../../theme/theme.types';
import { isUndefined } from '../../common/utils';
import NormalizedElements from '../../common/NormalizedElements';

const getSharedStyle = (props: ThemedStyledProps<LinkProps | ButtonProps, Theme>) => {
  const { theme, disabled } = props;

  return `
    display: inline-block;
    padding: 0;
    color: ${disabled ? theme.color.disabledText : theme.color.cta}

    &:hover {
      text-decoration: underline;
    }
  `;
};

const StyledLink = styled(RouterLink)<LinkProps>`
  ${p => getSharedStyle(p)}
  text-decoration: none;
`;

const StyledButton = styled(NormalizedElements.Button)<ButtonProps>`
  ${p => getSharedStyle(p)}
  cursor: ${p => (p.disabled ? 'not-allowed' : 'pointer')};
  border: none;
  border-radius: 0;

  font-weight: inherit; /* remove when and if typography is handled inside the component */
`;

export const Link: LinkComponent = props => {
  const { to, children, disabled, className, onClick, target, rel } = props;

  if (isUndefined(to) || disabled) {
    return (
      <StyledButton className={className} onClick={onClick} disabled={disabled}>
        {children}
      </StyledButton>
    );
  }

  return (
    <StyledLink className={className} onClick={onClick} to={to} target={target} rel={rel}>
      {children}
    </StyledLink>
  );
};
