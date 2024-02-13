import React from 'react';
import styled from 'styled-components';
import { Props } from './FormLabel.types';
import { Typography } from '../..';
import { visuallyHiddenCss as visuallyHidden } from '../VisuallyHidden';

const StyledLabel = styled.label<{ $disabled: boolean }>`
  ${(p) => (p.hidden ? visuallyHidden : '')}
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
`;

export const FormLabel: React.FC<Props> = ({
  as,
  children,
  className,
  forId,
  hideLabel,
  disabled,
}) => (
  <StyledLabel
    as={as}
    className={className}
    htmlFor={forId}
    hidden={Boolean(hideLabel)}
    $disabled={disabled}
  >
    <Typography type="secondary" color={(t) => (disabled ? t.color.disabledText : t.color.label)}>
      {children}
    </Typography>
  </StyledLabel>
);
FormLabel.displayName = 'FormLabel';
