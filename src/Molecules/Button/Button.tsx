import React from 'react';
import styled, { ThemedStyledProps } from 'styled-components';
import Color from 'color';
import { ButtonComponent, Props } from './Button.types';
import { Theme } from '../../theme/theme.types';
import { isUndefined } from '../../common/utils';
import NormalizedElements from '../../common/NormalizedElements';

const HEIGHT = {
  s: 6,
  m: 8,
  l: 10,
};

const isSecondary = (variant: Props['variant']) => variant === 'secondary';

const getBackgroundColor = (props: ThemedStyledProps<Props, Theme>) => {
  const { disabled, theme, variant } = props;
  if (disabled) {
    return `background-color: ${theme.color.disabled};`;
  }

  if (variant === 'secondary') {
    return `
        background-color: ${theme.color.buttonSecondaryBackground};
        &:hover{
            background-color: ${Color(theme.color.cta).darken(0.1)};
            color: ${theme.color.buttonText};
        }
        &:active{
            background-color: ${Color(theme.color.cta).darken(0.2)};
        }
    `;
  }

  return `
        background-color: ${theme.color.cta};
        &:hover{
            background-color: ${Color(theme.color.cta).darken(0.1)};
        }
        &:active{
            background-color: ${Color(theme.color.cta).darken(0.2)};
        }
    `;
};

const getHeight = (props: ThemedStyledProps<Props, Theme>) => {
  const { theme, size } = props;
  const hugeness = isUndefined(size) ? HEIGHT.m : HEIGHT[size];

  return `${theme.spacing.unit(hugeness)}px`;
};

const StyledButton = styled(NormalizedElements.Button)<Props>`
  ${p => getBackgroundColor(p)}
  border-radius: 0;
  border: 2px solid ${p => (isSecondary(p.variant) ? p.theme.color.cta : 'transparent')};
  box-sizing: border-box;
  color: ${p => (isSecondary(p.variant) ? p.theme.color.cta : p.theme.color.buttonText)};
  cursor: pointer;
  display: inline-block;
  height: ${p => getHeight(p)};
  padding: 0 ${p => (p.size === 's' ? p.theme.spacing.unit(2) : p.theme.spacing.unit(4))}px;
`;

export const Button: ButtonComponent = props => (
  <StyledButton
    disabled={props.disabled}
    onClick={props.onClick}
    size={props.size}
    type={props.type}
    variant={props.variant}
  >
    {props.children}
  </StyledButton>
);

Button.defaultProps = {
  type: 'button',
};
