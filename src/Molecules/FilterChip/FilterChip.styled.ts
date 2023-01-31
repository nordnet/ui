import styled, { css } from 'styled-components';
import { Theme } from 'theme/theme.types';
import { Flexbox } from '../..';

const variantStyles = (theme: Theme, variant: string, $selected: boolean) =>
  ({
    default: css`
      ${$selected &&
      `
      color: ${theme.color.quickFilterSelectedText};
      background: ${theme.color.quickFilterSelectedBackground};
      &:focus-visible {
        outline: 1px solid ${theme.color.quickFilterFocusSelectedOutline};
      }
      `}
    `,
    sustainability: css`
      &:hover {
        color: ${theme.color.quickFilterSustainabilityHoverColor};
      }
      ${$selected &&
      `
      color: ${theme.color.quickFilterSustainabilityColor};
      background: ${theme.color.quickFilterSustainabilityBackground};
      &:focus-visible {
        outline: 1px solid ${theme.color.quickFilterSustainabilityColor};
      }
      `}
    `,
  }[variant]);

export const StyledDiv = styled.div<{
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
  color: ${(p) => p.theme.color.quickFilterText};
  background: ${(p) => p.theme.color.quickFilterBackground};
  outline-offset: -1px;
  &:hover {
    color: ${(p) => p.theme.color.quickFilterSelectedText};
  }
  &:focus-visible {
    outline: 1px solid ${(p) => p.theme.color.quickFilterFocusOutline};
  }

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
      background: ${p.theme.color.disabledBackground};
      color: ${p.theme.color.disabledText};
      cursor: not-allowed;
      &:focus-visible {
        outline: none;
      }
      &:hover {
        color: ${p.theme.color.disabledText};
      }
    `};
`;

export const StyledFlexbox = styled(Flexbox)`
  & > * {
    color: inherit;
  }
`;
