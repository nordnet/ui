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
    if (props.active && !props.hideActiveUnderline) {
      return `
        &::after {
          content: '';
          background-color: ${props.theme.color.cta};
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

export const TabTitle: React.FC<Props> = ({
  active = false,
  height = 8,
  children,
  variant = 'normal',
  hideActiveUnderline = false,
}) => {
  return (
    <StyledTitle
      active={active}
      height={height}
      variant={variant}
      hideActiveUnderline={hideActiveUnderline}
    >
      {children}
    </StyledTitle>
  );
};

TabTitle.displayName = 'TabTitle';
