import React from 'react';
import styled from 'styled-components';
import * as R from 'ramda';
import { FormLabel, Icon, Flexbox, Typography, FormField, Tooltip } from '../../..';
import { CheckboxComponent, Props, InternalInputProps } from './Checkbox.types';
import { isString } from '../../../common/utils';

const CHECKBOX_DEFAULT_SIZE = 5;
const checkIfHasError = (error?: Props['error']) => isString(error) && error !== '';

const CleanInput = React.forwardRef((props: any, ref: React.Ref<HTMLInputElement>) => (
  <input ref={ref} {...R.omit(['hasError', 'visuallyFocused'], props)} />
));

const TooltipIcon = styled(Icon.Questionmark)`
  display: inline;
  vertical-align: middle;
  margin-left: ${(p) => p.theme.spacing.unit(1)}px;
`;

const getSize = (size: Props['size']): number => {
  if (size && size === 's') {
    return 4;
  }
  return CHECKBOX_DEFAULT_SIZE;
};

const CheckmarkBox = styled(Flexbox)<{ size: number }>`
  width: ${(p) => p.theme.spacing.unit(p.size)}px;
  height: ${(p) => p.theme.spacing.unit(p.size)}px;
  border: 1px solid ${(p) => p.theme.color.inputBorder};
  position: relative;
  flex-shrink: 0;

  &::before {
    content: '';
    display: block;
    padding: 2px;
    width: 100%;
    height: 100%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;

const StyledFormLabel = styled(FormLabel)`
  position: relative;

  &:hover ${CheckmarkBox} {
    border-color: ${(p) => p.theme.color.inputBorderHover};
  }
`;

const Input = styled(CleanInput).attrs(() => ({ type: 'checkbox' }))<InternalInputProps>`
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;
  cursor: pointer;

  &:checked + ${CheckmarkBox} {
    border-color: ${(p) => p.theme.color.cta};
    background: ${(p) => p.theme.color.cta};

    svg {
      fill: ${(p) => p.theme.color.backgroundInput};
    }
  }

  &[disabled] + ${CheckmarkBox} {
    border-color: ${(p) => p.theme.color.disabledBackground};
  }

  &:checked[disabled] + ${CheckmarkBox} {
    border-color: ${(p) => p.theme.color.disabledBackground};
    background: ${(p) => p.theme.color.disabledBackground};
  }

  ${(p) =>
    p.hasError
      ? `
    & + ${CheckmarkBox} {
      &::before {
        border: 1px solid ${p.theme.color.inputBorderError};
      }
    }`
      : ''}

  &:focus + ${CheckmarkBox} {
    &::before {
      border: 1px solid ${(p) => p.theme.color.cta};
    }
  }
  ${(p) =>
    !p.visuallyFocused
      ? ''
      : `& + ${CheckmarkBox} {
    &::before {
      border: 1px solid ${p.theme.color.cta};
    }
  }
  `}
`;

const Label = styled(Typography)`
  padding-left: ${(p) => p.theme.spacing.unit(2)}px;
  white-space: initial;
`;

const components = {
  Label,
  CheckmarkBox,
};

const Checkbox: CheckboxComponent & { components: typeof components } = (props) => {
  const {
    autoFocus,
    checked,
    className,
    defaultChecked,
    disabled,
    error,
    hasError,
    label,
    labelTooltip,
    labelTooltipPosition,
    name,
    onBlur,
    onChange,
    onClick,
    onFocus,
    onKeyDown,
    onKeyPress,
    onKeyUp,
    required,
    value,
    visuallyEmphasiseRequired,
    visuallyFocused,
    width,
    readOnly,
    size = 'm',
  } = props;

  return (
    <FormField {...{ error }} width={width || 'auto'}>
      <StyledFormLabel className={className}>
        <Flexbox container alignItems="center">
          <Input
            {...{
              autoFocus,
              checked,
              defaultChecked,
              disabled,
              hasError: hasError || checkIfHasError(error),
              name,
              onBlur,
              onChange,
              onClick,
              onFocus,
              onKeyDown,
              onKeyPress,
              onKeyUp,
              readOnly,
              required,
              value,
              visuallyFocused,
            }}
          />

          <CheckmarkBox container alignItems="center" justifyContent="center" size={getSize(size)}>
            <Icon.CheckMark size={3} color="transparent" />
          </CheckmarkBox>

          <Label type="secondary" color={(t) => (disabled ? t.color.disabledText : t.color.text)}>
            {visuallyEmphasiseRequired ? `${label} *` : label}
            {labelTooltip && (
              <Tooltip
                label={labelTooltip}
                {...(labelTooltipPosition && { position: labelTooltipPosition })}
              >
                <TooltipIcon size={4} />
              </Tooltip>
            )}
          </Label>
        </Flexbox>
      </StyledFormLabel>
    </FormField>
  );
};

Checkbox.components = components;

export default Checkbox;
