import React from 'react';
import styled from 'styled-components';
import { DevelopmentProps, DevelopmentComponent } from './Development.types';
import { Number as NumberComponent } from '../..';
import { Theme } from '../../theme/theme.types';

const getPrefix = (value?: number | null) => {
  if (!value) return '';
  return value > 0 ? '▲' : '▼';
};

const getColor = ({ value, theme }: { value?: number; theme: Theme }) => {
  if (!value) return theme.color.text;
  return value > 0 ? theme.color.positive : theme.color.negative;
};

const StyledDevelopment = styled.span<DevelopmentProps>`
  color: ${getColor};
`;

const Development: DevelopmentComponent = ({ value, className, icon = false, ...props }) => (
  <StyledDevelopment className={className} value={value}>
    {icon && getPrefix(value)}
    <NumberComponent value={value} sign {...props} />
  </StyledDevelopment>
);

export { Development };
Development.displayName = 'Development';
