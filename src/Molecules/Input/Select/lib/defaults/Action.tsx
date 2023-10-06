import React from 'react';
import styled, { css } from 'styled-components';
import { Box, Flexbox, Typography } from '../../../../..';

const hoverIfNotKeyboardNav = css<{ isKeyboardNavigation?: boolean; disabled?: boolean }>`
  ${(p) =>
    p.disabled || p.isKeyboardNavigation
      ? ''
      : `
&:hover { 
background: ${p.theme.color.background};
}
`}
`;
const StyledBoxWithBorder = styled(Box)<any>`
  cursor: ${(p) => (p.disabled ? 'not-allowed' : 'pointer')};
  ${(p) =>
    p.focused && p.isKeyboardNavigation
      ? `
background: ${p.theme.color.background};
`
      : ''}
  ${hoverIfNotKeyboardNav}
`;

const EllipsizingText = styled.span`
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  line-height: 0.7;
  padding-top: 5px !important;
  padding-bottom: 5px;
  margin: -5px 0;
`;

export const Action: React.FC<{
  isKeyboardNavigation: boolean;
  focused: boolean;
  label: string;
  icon: React.ReactNode;
  disabled?: boolean;
}> = ({ isKeyboardNavigation, focused, label, icon, disabled }) => (
  <StyledBoxWithBorder
    px={3}
    py={2}
    isKeyboardNavigation={isKeyboardNavigation}
    focused={focused}
    disabled={disabled}
  >
    <Typography
      type="secondary"
      weight="bold"
      color={(t) => (disabled ? t.color.disabledText : t.color.cta)}
    >
      <Flexbox container gap={2} alignItems="center">
        {icon}
        <EllipsizingText>{label}</EllipsizingText>
      </Flexbox>
    </Typography>
  </StyledBoxWithBorder>
);
