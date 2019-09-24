import React from 'react';
import styled, { css } from 'styled-components';
import * as R from 'ramda';
import { Props } from './Text.types';
import { Flexbox, Typography } from '../../..';
import NormalizedElements from '../../../common/NormalizedElements';
import { FormField } from '../FormField';

const hasError = (error?: Props['error']) => error && error !== '';

const height = css<Pick<Props, 'size'>>`
  height: ${p => (p.size === 's' ? p.theme.spacing.unit(8) : p.theme.spacing.unit(10))}px;
`;

const background = css<Pick<Props, 'disabled'>>`
  background-color: ${p =>
    p.disabled ? p.theme.color.disabledBackground : p.theme.color.backgroundInput};
`;

const hoverBorderStyles = css<Pick<Props, 'disabled'>>`
  ${p =>
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
    border-color: ${p => p.theme.color.borderActive};
  }
`;

const borderStyles = css<Pick<Props, 'error' | 'success'>>`
  outline: none;
  border: 1px solid
    ${p => {
      if (hasError(p.error)) return p.theme.color.inputBorderError;
      if (p.success) return p.theme.color.inputBorderSuccess;
      return p.theme.color.inputBorder;
    }};
  position: relative;
  ${hoverBorderStyles}
  ${focusBorderStyles}
`;

const placeholderNormalizaion = css<{ sizeProp: Props['size'] }>`
  &::placeholder {
    /* fixes safari placeholder vertical positioning */
    /* change if typography changes */
    line-height: 17px;
    color: ${p => p.theme.color.label};
  }

  :-ms-input-placeholder {
    /* fixes IE11 placeholder vertical positioning and color */
    line-height: 1;
    color: ${p => p.theme.color.label};
  }

  &::-moz-placeholder {
    /* fixes firefox placeholder vertical positioning */
    /* change if typography changes */
    line-height: ${p => (p.sizeProp === 's' ? '15' : '22')}px;
  }
`;

const Input = styled(NormalizedElements.Input).attrs({ type: 'text' })<
  Partial<Props> & { sizeProp: Props['size'] }
>`
  border: 0;
  width: 100%;
  padding: ${p => p.theme.spacing.unit(2)}px;
  margin: 0;
  box-sizing: border-box;

  ${height}
  ${borderStyles}
  ${background}
  ${placeholderNormalizaion}
  ${p => (p.leftAddon ? `padding-left: ${p.theme.spacing.unit(8)}px;` : '')}
  ${p =>
    p.rightAddon
      ? `padding-right: ${p.theme.spacing.unit(10)}px;` // compensate for right paddings
      : ''}
`;

const Wrapper = styled.div`
  position: relative;
`;

const AddonBox = styled(Flexbox)<{ position?: 'left' | 'right' }>`
  width: ${p => p.theme.spacing.unit(8)}px;
  top: 0;
  height: 100%;
  padding-left: ${p => p.theme.spacing.unit(1)}px;
  padding-right: ${p => p.theme.spacing.unit(1)}px;
  position: absolute;
  ${p => (p.position === 'left' ? 'left: 0;' : '')}
  ${p => (p.position === 'right' ? `right: ${p.theme.spacing.unit(1)}px;` : '')}
`;

const components = {
  Input,
  AddonBox,
};

export const Text: React.FC<Props> & {
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
} = props => {
  const {
    autoFocus,
    defaultValue,
    disabled,
    error,
    leftAddon,
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
    rightAddon,
    size,
    success,
    value,
    visuallyEmphasiseRequired,
  } = props;

  return (
    <FormField
      {...R.pick(['error', 'extraInfo', 'fieldId', 'hideLabel', 'label', 'width'], props)}
      required={visuallyEmphasiseRequired}
    >
      <Typography type="secondary" color={t => t.color.text}>
        <Wrapper>
          <Input
            {...{
              autoFocus,
              defaultValue,
              disabled,
              error,
              leftAddon,
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
              rightAddon,
              sizeProp: size,
              success,
              value,
            }}
            {...(hasError(error) ? { 'aria-invalid': true } : {})}
          />
          {leftAddon && (
            <AddonBox container justifyContent="center" alignItems="center" position="left">
              {leftAddon}
            </AddonBox>
          )}
          {rightAddon && (
            <AddonBox container justifyContent="center" alignItems="center" position="right">
              {rightAddon}
            </AddonBox>
          )}
        </Wrapper>
      </Typography>
    </FormField>
  );
};
Text.components = components;
