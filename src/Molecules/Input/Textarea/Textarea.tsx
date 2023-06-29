import React from 'react';
import styled, { css } from 'styled-components';
import * as R from 'ramda';
import { Props } from './Textarea.types';
import { FormField, Typography } from '../../..';
import { placeholderNormalization } from '../Text/Text';
import NormalizedElements from '../../../common/NormalizedElements';

const hasError = (error?: Props['error']) => error && error !== '';

const background = css<Pick<Props, 'disabled'>>`
  background-color: ${(p) =>
    p.disabled ? p.theme.color.disabledBackground : p.theme.color.inputBackground};
`;

const hoverBorderStyles = css<Pick<Props, 'disabled'>>`
  ${(p) =>
    p.disabled
      ? ''
      : `
      &:hover {
        border-color: ${p.theme.color.inputBorderHover};
      }
`}
`;

const focusBorderStyles = css`
  &:focus {
    border-color: ${(p) => p.theme.color.borderActive};
  }
`;

const borderStyles = css<Pick<Props, 'error' | 'success'>>`
  border: 1px solid
    ${(p) => {
      if (hasError(p.error)) return p.theme.color.inputBorderError;
      if (p.success) return p.theme.color.inputBorderSuccess;
      return p.theme.color.inputBorder;
    }};
  position: relative;
  ${hoverBorderStyles}
  ${focusBorderStyles}
`;

const StyledTextarea = styled(NormalizedElements.Textarea)<Pick<Props, 'noResize'>>`
  border: 0;
  width: 100%;
  padding: ${(p) => p.theme.spacing.unit(2)}px;
  margin: 0;
  vertical-align: top; /* removes space underneath */
  box-sizing: border-box;
  resize: ${(p) => p.noResize && 'none'};
  color: ${(p) => p.theme.color.text};
  border-radius: ${(p) => p.theme.borderRadius(4)};

  ${borderStyles}
  ${background}
  ${placeholderNormalization}
`;

const components = {
  StyledTextarea,
};

export const Textarea: React.FC<Props> & {
  /**
   * This will allow you to customize
   * inner parts with styled-components
   * @example
   * const CustomText = styled(Input.Text)`
   *  ${Input.Text.components.Input} {
   *    color: pink;
   * }
   * `
   * */
  components: typeof components;
} = (props) => {
  const {
    autoFocus,
    defaultValue,
    disabled,
    error,
    maxLength,
    name,
    noResize,
    onBlur,
    onChange,
    onClick,
    onFocus,
    onKeyDown,
    onKeyPress,
    onKeyUp,
    placeholder,
    required,
    rows = 3,
    success,
    value,
    visuallyEmphasiseRequired,
  } = props;

  return (
    <FormField
      {...R.pick(
        [
          'error',
          'extraInfo',
          'hideLabel',
          'label',
          'labelTooltip',
          'labelTooltipPosition',
          'width',
        ],
        props,
      )}
      required={visuallyEmphasiseRequired}
    >
      <Typography type="secondary" color={(t) => t.color.text}>
        <StyledTextarea
          {...{
            autoFocus,
            defaultValue,
            disabled,
            error,
            maxLength,
            name,
            onBlur,
            onChange,
            onClick,
            onFocus,
            onKeyDown,
            onKeyPress,
            onKeyUp,
            placeholder,
            required,
            rows,
            success,
            value,
          }}
          noResize={noResize}
          {...(hasError(error) ? { 'aria-invalid': true } : {})}
        />
      </Typography>
    </FormField>
  );
};
Textarea.components = components;
