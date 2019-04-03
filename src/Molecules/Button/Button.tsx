import React from 'react';
import styled, { ThemedStyledProps } from 'styled-components';
import Color from 'color';
import { ButtonComponent, Props } from './Button.types';
import { Theme } from '../../theme/theme.types';
import { isUndefined } from '../../common/utils';

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

const StyledNeutralButton = styled.button`
  /**
   * From Normalize.css v8.0.1
   * 1. Change the font styles in all browsers.
   * 2. Remove the margin in Firefox and Safari.
   * 3. Show the overflow in Edge.
   * 4. Remove the inheritance of text transform in Edge, Firefox, and IE
   * 5. Correct the inability to style clickable types in iOS and Safari.
   * 6. Remove the inner border and padding in Firefox.
   * 7. Restore the focus styles unset by the previous rule
   */

  font-family: inherit; /* 1 */
  font-size: 100%; /* 1 */
  line-height: 1.15; /* 1 */
  margin: 0; /* 2 */
  overflow: visible; /* 3 */
  text-transform: none; /* 4 */

  &,
  &[type='button'],
  &[type='reset'],
  &[type='submit'] {
    -webkit-appearance: button; /* 5 */ /* stylelint-disable-line */
  }

  &::-moz-focus-inner,
  &[type='button']::-moz-focus-inner,
  &[type='reset']::-moz-focus-inner,
  &[type='submit']::-moz-focus-inner {
    border-style: none; /* 6 */
    padding: 0; /* 6 */
  }

  &:-moz-focusring,
  &[type='button']:-moz-focusring,
  &[type='reset']:-moz-focusring,
  &[type='submit']:-moz-focusring {
    outline: 1px dotted ButtonText; /* 7 */
  }
`;

const StyledButton = styled(StyledNeutralButton)<Props>`
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
