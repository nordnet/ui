import styled, { css } from 'styled-components';
import { Flexbox } from '../../..';
import { placeholderNormalization } from '../Text/Text';
import { Props, Variant } from './FormattedNumber.types';
import FormattedInput from './FormattedInput/FormattedInput';
import { hasError } from './utils';

const calculateHeight = (p: any, variant: Variant | undefined, size: 's' | undefined) => {
  if (variant === 'quiet') return 'auto';
  return size === 's' ? `${p.theme.spacing.unit(8)}px` : `${p.theme.spacing.unit(10)}px`;
};

const width = css<Pick<Props, 'size'>>`
  width: ${(p) => (p.size === 's' ? p.theme.spacing.unit(8) : p.theme.spacing.unit(10))}px;
`;

const height = css<Pick<Props, 'variant' | 'size'>>`
  height: ${(p) => calculateHeight(p, p.variant, p.size)};
`;

const background = css<Pick<Props, 'disabled' | 'variant'>>`
  background-color: ${(p) => {
    if (p.disabled && p.variant !== 'quiet') {
      return p.theme.color.disabledBackground;
    }
    if (p.variant === 'quiet') {
      return 'transparent';
    }
    return p.theme.color.inputBackground;
  }};
`;

const hoverBorderStyles = css<Pick<Props, 'disabled'>>`
  ${(p) =>
    p.disabled
      ? ''
      : `
      &:hover {
        border-color: ${p.theme.color.inputBorderHover};
        z-index: 2;
      }
`}
`;

const focusBorderStyles = css`
  &:focus {
    border-color: ${(p) => p.theme.color.borderActive};
    z-index: 3;
  }
`;

const borderStyles = css<Pick<Props, 'error' | 'success' | 'variant' | 'disabled'>>`
  border: 1px solid
    ${(p) => {
      if (hasError(p.error)) return p.theme.color.inputBorderError;
      if (p.success) return p.theme.color.inputBorderSuccess;
      return p.theme.color.inputBorder;
    }};
  position: relative;
  ${hoverBorderStyles}
  ${focusBorderStyles}
  border-width: ${(p) => (p.variant === 'quiet' ? '0 0 2px 0' : '1px')};
  &:focus {
    border-width: 1px;
  }
  ${(p) =>
    p.disabled && p.variant === 'quiet'
      ? `border-color: ${
          p.theme.isDarkMode ? p.theme.color.inputBorder : p.theme.color.buttonBackgroundDisabled
        };`
      : ''}
`;

const Wrapper = styled(Flexbox)`
  position: relative;
  box-shadow: 0 1px 3px ${(p) => p.theme.color.shadowInput};
`;

const getPositionStyles = (p: any) => {
  if (p.position === 'right') return `right: ${p.theme.spacing.unit(2)}px;`;
  if (p.position === 'left') return `left: ${p.theme.spacing.unit(2)}px;`;
  return '';
};

const AddonBox = styled(Flexbox)<{
  position?: 'left' | 'right';
  variant?: 'quiet' | 'normal';
}>`
  position: absolute;
  top: 0;
  height: 100%;
  z-index: 3;
  ${getPositionStyles}
`;

const Stepper = styled.button.attrs(() => ({ type: 'button' }))<Partial<Props>>`
  ${width}
  ${height}
  ${background}
  ${borderStyles}
  padding: 0;
  cursor: pointer;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1 0 auto;

  &:first-of-type {
    order: -1;
    border-top-left-radius: ${(p) => p.theme.borderRadius4};
    border-bottom-left-radius: ${(p) => p.theme.borderRadius4};
  }

  &:last-of-type {
    border-top-right-radius: ${(p) => p.theme.borderRadius4};
    border-bottom-right-radius: ${(p) => p.theme.borderRadius4};
  }

  &:active:enabled {
    background-color: ${(p) => p.theme.color.cta};

    svg {
      fill: ${(p) => p.theme.color.buttonText};
    }
  }
`;

const Input = styled(FormattedInput).attrs(() => ({
  type: 'text',
}))<Partial<Props> & { showSteppers: boolean }>`
  ${background}
  ${borderStyles}
  ${height}
  ${placeholderNormalization}
  padding: ${(p) => p.theme.spacing.unit(p.variant === 'quiet' ? 0 : 2)}px;
  width: 100%;
  color: ${(p) => p.theme.color.text};
  &:disabled {
    color: ${(p) => p.theme.color.disabledText};
  }
  text-align: ${(p) => (p.showSteppers ? 'center' : 'left')};
  box-sizing: border-box;
  border-radius: ${(p) => (p.showSteppers ? '0' : p.theme.borderRadius4)};

  ${(p) =>
    p.leftAddon || p.rightAddon
      ? `
      padding-top: ${p.theme.spacing.unit(2)}px;
      padding-bottom: ${p.theme.spacing.unit(2)}px;
      `
      : `
      margin: 0 -1px;
      min-width: 0;
      z-index: 1;
      `}
  ${(p) =>
    p.leftAddon
      ? `
      padding-left: ${p.theme.spacing.unit(8)}px;
    `
      : ''}
    ${(p) =>
    p.variant === 'quiet'
      ? `color: ${p.theme.isDarkMode ? p.theme.color.buttonText : p.theme.color.backgroundBlack};
        &:disabled {
          color: ${p.theme.color.disabledText};
        }
        font-size: 28px;
        font-weight: bold;
        &:focus {
          border-width: 0 0 2px 0;
          outline: none;
        }
        &:-webkit-autofill {
         -webkit-text-fill-color: ${p.theme.color.cta};
        }
        `
      : ''};
`;

export const FormattedNumberComponents = {
  AddonBox,
  Input,
  Stepper,
  Wrapper,
};
