import styled, { css } from 'styled-components';
import { Theme } from 'theme/theme.types';
import { Flexbox } from '../..';

const variantStyles = (theme: Theme, variant: string, $selected: boolean) =>
  ({
    default: css`
      ${$selected &&
      `
      color: ${theme.colorTokens.action.text_default};
      background: ${theme.colorTokens.action.background_weak};
      &:hover {
        color: ${theme.colorTokens.action.text_hover};
      }
      &:focus-visible {
        outline: 1px solid ${theme.colorTokens.action.border_default};
      }
      `}
    `,
    sustainability: css`
      &:hover {
        color: ${theme.colorTokens.positive.text_hover};
      }
      ${$selected &&
      `
      color: ${theme.colorTokens.positive.text_default};
      background: ${theme.colorTokens.positive.background_weak};
      &:focus-visible {
        outline: 1px solid ${theme.colorTokens.positive.border_default};
      }
      `}
    `,
    brand: css`
      ${$selected &&
      `
      color: ${theme.colorTokens.neutral.text_strong};
      background: ${theme.colorTokens.neutral.background_brand_black};
      &:focus-visible {
        outline: 1px solid ${theme.colorTokens.action.border_default};
      }
      &:hover {
        color: ${theme.colorTokens.action.text_default};
      }
      `}
    `,
  })[variant];

export const ContainerLabel = styled.label<{
  $disabled: boolean;
  $selected: boolean;
  hasLabel: boolean;
  variant: string;
}>`
  border-radius: 50%;
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  padding: ${(p) => p.theme.spacing.unit(2)}px;
  height: ${(p) => p.theme.spacing.unit(8)}px;
  color: ${(p) => p.theme.colorTokens.neutral.text_default};
  background: ${(p) => p.theme.colorTokens.neutral.background_medium};
  outline-offset: -1px;

  &:hover {
    color: ${(p) => p.theme.colorTokens.action.text_hover};
  }

  &:focus-visible {
    outline: 1px solid ${(p) => p.theme.colorTokens.neutral.border_focus};
  }

  transition:
    color 222ms,
    background 222ms,
    outline 222ms;

  ${({ theme, variant, $selected }) => variantStyles(theme, variant, $selected)}
  ${({ hasLabel, theme }) =>
    hasLabel &&
    `
    border-radius: ${theme.spacing.unit(4)}px;
    ${theme.media.greaterThan(theme.breakpoints.md)} {
      padding: 0 ${theme.spacing.unit(3)}px;
      height: ${theme.spacing.unit(6)}px;
    }
    ${theme.media.lessThan(theme.breakpoints.md)} {
      padding: ${theme.spacing.unit(1)}px ${theme.spacing.unit(3)}px;
    }
  `}
  ${(p) =>
    p.$disabled &&
    `
      background: ${p.theme.colorTokens.neutral.background_disabled};
      color: ${p.theme.colorTokens.neutral.text_disabled};
      cursor: not-allowed;
      &:focus-visible {
        outline: none;
      }
      &:hover {
        color: ${p.theme.colorTokens.neutral.text_disabled};
      }
    `};
`;

export const StyledFlexbox = styled(Flexbox)`
  & > * {
    color: inherit;
  }
`;
