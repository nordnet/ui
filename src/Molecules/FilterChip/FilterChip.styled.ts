import styled, { css } from 'styled-components';
import { Flexbox } from '../..';

export const StyledDiv = styled.div<{
  $disabled: boolean;
  $selected: boolean;
  hasLabel: boolean;
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
    ${(p) => !p.$disabled && `color: ${p.theme.color.quickFilterSelectedText}`};
  }

  ${({ $disabled, theme }) =>
    $disabled &&
    css`
      background: ${theme.color.disabledBackground};
      color: ${theme.color.disabledText};
      cursor: not-allowed;
    `}

  ${({ $selected, theme }) =>
    $selected &&
    css`
      color: ${theme.color.quickFilterSelectedText};
      background: ${theme.color.quickFilterSelectedBackground};
    `}

  ${({ hasLabel, theme }) =>
    hasLabel &&
    css`
      border-radius: ${theme.spacing.unit(4)}px;
      ${theme.media.greaterThan(theme.breakpoints.md)} {
        padding: 0 ${theme.spacing.unit(3)}px;
        height: ${theme.spacing.unit(6)}px;
      }
      ${theme.media.lessThan(theme.breakpoints.md)} {
        padding: ${theme.spacing.unit(1)}px ${theme.spacing.unit(3)}px;
      }
    `}
  

  &:focus-visible {
    ${({ $disabled, theme }) =>
      !$disabled &&
      css`
        outline: 1px solid ${theme.color.quickFilterFocusOutline};
        background: ${theme.color.quickFilterBackground};
        color: ${theme.color.quickFilterText};
      `}

    ${({ $disabled, $selected, theme }) =>
      $selected &&
      !$disabled &&
      css`
        outline: 1px solid ${theme.color.quickFilterFocusSelectedOutline};
        background: ${theme.color.quickFilterSelectedBackground};
        color: ${theme.color.quickFilterSelectedText};
      `};
    ${({ $disabled }) => $disabled && `outline: none;`};
  }
`;

export const StyledFlexbox = styled(Flexbox)`
  & > * {
    color: inherit;
  }
`;
