import React from 'react';
import styled from 'styled-components';
import { Props } from './TabTitle.types';

const StyledTitle = styled.span<Props>`
  ${(props) => (props.height ? `height: ${props.theme.spacing.unit(props.height)}px;` : '')}
  position: relative;
  display: inline-flex;
  align-items: center;
  font-size: ${(props) => (props.variant === 'large' ? '16px' : '14px')};
  ${(props) => {
    if (props.active) {
      return `
        &::after {
          content: '';
          background-color: ${props.theme.colorTokens.neutral.border_active};
          display: block;
          width: 100%;
          height: 2px;
          position: absolute;
          bottom: 0;
          left: 0;
        }
      `;
    }

    return '';
  }}
`;

export const TabTitle = ({ active = false, height = 8, children, variant = 'normal' }: Props) => {
  return (
    <StyledTitle active={active} height={height} variant={variant}>
      {children}
    </StyledTitle>
  );
};

TabTitle.displayName = 'TabTitle';
