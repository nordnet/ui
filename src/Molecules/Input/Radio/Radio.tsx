import React from 'react';
import styled from 'styled-components';
import * as R from 'ramda';
import { Flexbox, FormField, FormLabel, Typography, VisuallyHidden } from '../../..';
import { InternalInputProps, Props, RadioComponent } from './Radio.types';
import { isString } from '../../../common/utils';

const RADIO_SIZE = 5;
const checkIfHasError = (error?: Props['error']) => isString(error) && error !== '';

const CleanInput = React.forwardRef((props: any, ref: React.Ref<HTMLInputElement>) => (
  <input ref={ref} {...R.omit(['hasError'], props)} />
));

const Circle = styled.div`
  width: ${(p) => p.theme.spacing.unit(RADIO_SIZE)}px;
  height: ${(p) => p.theme.spacing.unit(RADIO_SIZE)}px;
  border: 1px solid ${(p) => p.theme.colorTokens.neutral.border_default};
  background-color: ${(p) => p.theme.colorTokens.neutral.background_default};
  position: relative;
  border-radius: 50%;
  box-sizing: border-box;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Dot = styled.div`
  width: ${(p) => p.theme.spacing.unit(RADIO_SIZE - 2)}px;
  height: ${(p) => p.theme.spacing.unit(RADIO_SIZE - 2)}px;
  background-color: transparent;
  border-radius: 50%;
`;

const StyledFormLabel = styled(FormLabel)`
  position: relative;

  &:hover ${Circle} {
    border-color: ${(p) => p.theme.colorTokens.action.border_default};
  }
`;

const Input = styled(CleanInput).attrs(() => ({ type: 'radio' }))<InternalInputProps>`
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;
  cursor: pointer;

  &:checked + ${Circle} {
    ${Dot} {
      background-color: ${(p) => p.theme.colorTokens.action.background_default};
    }
  }

  &[disabled] + ${Circle} {
    border-color: ${(p) => p.theme.colorTokens.neutral.border_disabled};
  }

  &:checked[disabled] + ${Circle} {
    border-color: ${(p) => p.theme.colorTokens.neutral.border_disabled};
    ${Dot} {
      background-color: ${(p) => p.theme.colorTokens.neutral.background_disabled};
    }
  }

  ${(p) =>
    p.hasError
      ? `
    & + ${Circle} {
      border-color: ${p.theme.colorTokens.error.border_default};
    }`
      : ''}

  &:focus + ${Circle} {
    border-color: ${(p) => p.theme.colorTokens.action.border_default};
    box-shadow: 0 0 0 2px ${(p) => p.theme.colorTokens.action.border_focus};
  }
`;

const Label = styled(Typography)`
  padding-left: ${(p) => p.theme.spacing.unit(2)}px;
  white-space: initial;
`;

const Radio: RadioComponent = (props) => {
  const {
    autoFocus,
    checked,
    className,
    defaultChecked,
    disabled,
    error,
    hasError,
    id,
    label,
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
    width,
    noRadioCircle,
    hideLabel,
    children,
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
              id,
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
            }}
          />
          {!noRadioCircle && (
            <Circle>
              <Dot />
            </Circle>
          )}
          {children ||
            (!hideLabel ? (
              <Label
                type="secondary"
                color={(t) => (disabled ? t.color.disabledText : t.color.text)}
              >
                {visuallyEmphasiseRequired ? `${label} *` : label}
              </Label>
            ) : (
              <VisuallyHidden>
                <Label
                  type="secondary"
                  color={(t) => (disabled ? t.color.disabledText : t.color.text)}
                >
                  {visuallyEmphasiseRequired ? `${label} *` : label}
                </Label>
              </VisuallyHidden>
            ))}
        </Flexbox>
      </StyledFormLabel>
    </FormField>
  );
};

export default Radio;
