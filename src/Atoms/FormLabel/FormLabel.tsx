import React from 'react';
import styled from 'styled-components';
import { Props } from './FormLabel.types';
import { Typography } from '../..';
import { visuallyHiddenCss as visuallyHidden } from '../VisuallyHidden';

const StyledLabel = styled.label<{ $disabled: boolean; $animatedLabel: boolean }>`
  ${(p) => (p.hidden ? visuallyHidden : '')}
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
  
   ${(p) => (p.$animatedLabel && (
    css``:
    border: 1px solid red
   ))};
`;

export const FormLabel: React.FC<Props> = ({
  as,
  children,
  className,
  forId,
  hideLabel,
  disabled,
  animatedLabel,
}) => (
  <StyledLabel
    as={as}
    className={className}
    htmlFor={forId}
    hidden={Boolean(hideLabel)}
    $disabled={disabled}
    $animatedLabel={animatedLabel}
  >
    <Typography type="secondary" color={(t) => (disabled ? t.color.disabledText : t.color.label)}>
      {children}
    </Typography>
  </StyledLabel>
);
FormLabel.displayName = 'FormLabel';
