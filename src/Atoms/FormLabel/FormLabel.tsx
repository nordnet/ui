import React from 'react';
import styled from 'styled-components';
import { Props } from './FormLabel.types';
import { Typography } from '../..';
import { visuallyHiddenCss as visuallyHidden } from '../VisuallyHidden';

const StyledLabel = styled.label`
  ${p => (p.hidden ? visuallyHidden : '')}
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: pointer;
`;

export const FormLabel: React.FC<Props> = ({ as, children, className, forId, hideLabel }) => (
  <StyledLabel as={as} className={className} htmlFor={forId} hidden={Boolean(hideLabel)}>
    <Typography type="secondary" color={t => t.color.label}>
      {children}
    </Typography>
  </StyledLabel>
);
FormLabel.displayName = 'FormLabel';
