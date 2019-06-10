import React from 'react';
import styled, { ThemedStyledProps } from 'styled-components';
import Color from 'color';
import { Link as RouterLink } from 'react-router-dom';
import { ButtonComponent, ButtonProps, LinkProps } from './Button.types';
import { Theme } from '../../theme/theme.types';
import { assert } from '../../common/utils';
import NormalizedElements from '../../common/NormalizedElements';
import { Typography } from '../..';

const HEIGHT = {
  s: 6,
  m: 8,
  l: 10,
};
const PADDING_VERTICAL = {
  s: 0,
  m: 1,
  l: 2,
};
const PADDING_HORIZONTAL = {
  s: 2,
  m: 3,
  l: 4,
};
const BORDER_SIZE = 2;

const isSecondary = (variant: ButtonProps['variant']) => variant === 'secondary';

const getBackgroundColor = (props: ThemedStyledProps<ButtonProps | LinkProps, Theme>) => {
  const { disabled, theme, variant, colorFn } = props;
  if (disabled) {
    return `background-color: ${theme.color.disabledBackground};`;
  }

  if (variant === 'secondary') {
    if (colorFn) {
      const color = colorFn(theme);
      assert(
        color === theme.color.cta || color === theme.color.negative,
        'Button: color is incorrect, use only `t => t.color.cta` or `t => t.color.negative`',
      );
      return `
      background-color: ${theme.color.buttonSecondaryBackground};
      &:hover{
          background-color: ${Color(color).darken(0.1)};
          color: ${theme.color.buttonText};
      }
      &:active{
          background-color: ${Color(color).darken(0.2)};
      }
  `;
    }
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

  if (colorFn) {
    const color = colorFn(theme);
    assert(
      color === theme.color.cta || color === theme.color.negative,
      'Button: color is incorrect, use only `t => t.color.cta` or `t => t.color.negative`',
    );

    return `
    background-color: ${color};
    &:hover{
        background-color: ${Color(color).darken(0.1)};
        color: ${theme.color.buttonText};
    }
    &:active{
        background-color: ${Color(color).darken(0.2)};
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

const getMinHeight = (props: ThemedStyledProps<ButtonProps | LinkProps, Theme>) => {
  const { theme, size = 'm' } = props;

  return `min-height: ${theme.spacing.unit(HEIGHT[size])}px`;
};

const getPadding = (props: ThemedStyledProps<ButtonProps | LinkProps, Theme>) => {
  const { size = 'm' } = props;

  return `
    padding:
      ${props.theme.spacing.unit(PADDING_VERTICAL[size])}px
      ${props.theme.spacing.unit(PADDING_HORIZONTAL[size])}px;
  `;
};

const getSharedStyle = (props: ThemedStyledProps<ButtonProps | LinkProps, Theme>) => {
  const { theme, variant, fullWidth, colorFn, disabled } = props;

  const color = colorFn && colorFn(theme);
  const getColorWithDefault = (defaultColor: string) => {
    if (disabled) {
      return 'transparent';
    }
    return isSecondary(variant) ? color || theme.color.cta : defaultColor;
  };

  if (color) {
    assert(
      color === theme.color.cta || color === theme.color.negative,
      'Button: color is incorrect, use only `t => t.color.cta` or `t => t.color.negative`',
    );
  }

  return `
    ${getBackgroundColor(props)}
    ${getPadding(props)}
    ${getMinHeight(props)}
    position: relative;
    box-sizing: border-box;
    color: ${disabled ? theme.color.disabledText : getColorWithDefault(theme.color.buttonText)};
    align-items: center;
    justify-content: center;
    ${fullWidth ? `display: flex; width: 100%;` : `display: inline-flex;`}

    &::before {
      content: '';
      display: block;
      border: ${BORDER_SIZE}px solid ${getColorWithDefault('transparent')};
      position: absolute;
      top: 0;
      left: 0;
      width: calc(100% - ${BORDER_SIZE * 2}px);
      height: calc(100% - ${BORDER_SIZE * 2}px);
    }
  `;
};

const StyledButton = styled(NormalizedElements.Button)<ButtonProps>`
  ${p => getSharedStyle(p)}
  border: none;
  border-radius: 0;
  cursor: ${p => (p.disabled ? 'not-allowed' : 'pointer')};
`;

const StyledLink = styled(RouterLink)<LinkProps>`
  ${p => getSharedStyle(p)}
  text-decoration: none;
`;

export const Button: ButtonComponent = props => {
  const typeIsNotPresent = typeof props.type === 'undefined';
  const {
    className,
    disabled,
    onClick,
    size,
    type = 'button',
    variant,
    fullWidth,
    to,
    children,
    rel,
    color,
  } = props;
  const toAndDisabledAreNotPresentTogether = !(to && disabled);

  assert(
    toAndDisabledAreNotPresentTogether,
    "You're using `to` prop together with `disabled` prop. `Disabled` prop won't be propagated to the dom node, because <a> element can't be disabled",
    { level: 'warn' },
  );
  if (to && !disabled) {
    assert(
      typeIsNotPresent,
      "Button: You're using `type` prop together with `to` prop. Link dont have `type` that's why it's omitted",
      { level: 'warn' },
    );

    return (
      <StyledLink
        className={className}
        to={to}
        rel={rel}
        onClick={onClick}
        size={size}
        variant={variant}
        fullWidth={fullWidth}
        colorFn={color}
      >
        <Typography type={size === 'l' ? 'primary' : 'secondary'} color="inherit">
          {children}
        </Typography>
      </StyledLink>
    );
  }

  return (
    <StyledButton
      className={className}
      disabled={disabled}
      onClick={onClick}
      size={size}
      type={type}
      variant={variant}
      fullWidth={fullWidth}
      colorFn={color}
    >
      <Typography type={size === 'l' ? 'primary' : 'secondary'} color="inherit">
        {children}
      </Typography>
    </StyledButton>
  );
};
