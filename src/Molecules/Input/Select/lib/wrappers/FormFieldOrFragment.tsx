import * as React from 'react';
import styled, { css } from 'styled-components';
import { Flexbox, Icon, FormField } from '../../../../..';
import { Props } from '../../Select.types';

const Chevron = styled(Icon.ChevronDown)<{ open: boolean }>`
  transform: translateY(-50%) ${(p) => (p.open ? 'rotate(180deg)' : 'rotate(0)')};
  transform-origin: center center;
  transition: transform 0.16s ease-out;
  position: absolute;
  height: ${(p) => p.theme.spacing.unit(2)}px;
  top: 50%;
  right: ${(p) => p.theme.spacing.unit(1)}px;
  pointer-events: none;
`;

const StyledRelativeDiv = styled.div<any>`
  position: relative;
  display: block;
  width: ${(p) => (p.fullWidth ? '100%' : 'auto')};
`;

const height = css<Pick<Props, 'size'>>`
  height: ${(p) => (p.size === 's' ? p.theme.spacing.unit(8) : p.theme.spacing.unit(10))}px;
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
  &:focus-within {
    border-color: ${(p) => p.theme.color.borderActive};
  }
  &.focus-within {
    border-color: ${(p) => p.theme.color.borderActive};
  }
`;

const hasError = (error?: Props['error']) => error && error !== '';

const borderStyles = css<Pick<Props, 'error' | 'success'>>`
  outline: none;
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

const SelectWrapper = styled.div`
  ${height}
  ${borderStyles}
  box-sizing: border-box;
  position: relative;
`;

export const FormFieldOrFragment = React.forwardRef<HTMLDivElement, any>(
  (
    {
      children,
      noFormField,
      open,
      onFocus,
      onBlur,
      fullWidth,
      id,
      size,
      labelToolTip,
      labelTooltipPosition,
      ...props
    },
    ref,
  ) => {
    if (noFormField) {
      return (
        <StyledRelativeDiv
          ref={ref}
          fullWidth={fullWidth}
          width={props.width}
          onBlur={onBlur}
          onFocus={onFocus}
        >
          <Flexbox container alignItems="center" {...(fullWidth ? { width: '100%' } : {})}>
            {children}
          </Flexbox>
        </StyledRelativeDiv>
      );
    }
    return (
      <StyledRelativeDiv fullWidth={fullWidth} width={props.width}>
        <Flexbox container alignItems="center" {...(fullWidth ? { width: '100%' } : {})}>
          <FormField
            fieldId={id}
            labelTooltip={labelToolTip}
            labelTooltipPosition={labelTooltipPosition}
            {...props}
            {...(fullWidth ? { width: '100%' } : {})}
            ref={ref}
          >
            <SelectWrapper onBlur={onBlur} onFocus={onFocus} size={size} {...props} tabIndex={0}>
              {children}
              <Chevron open={open} />
            </SelectWrapper>
          </FormField>
        </Flexbox>
      </StyledRelativeDiv>
    );
  },
);
FormFieldOrFragment.displayName = 'FormFieldOrFragment';
