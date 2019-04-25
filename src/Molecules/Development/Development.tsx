import React from 'react';
import styled from 'styled-components';
import { DevelopmentProps, DevelopmentComponent } from './Development.types';
import { Number as NumberComponent } from '../..';
import { Theme } from '../../theme/theme.types';

const getPrefix = (value?: number | null) => {
  if (!value) return '';
  if (value > 0) return '▲';
  return '▼';
};

const getColor = ({ value, theme }: { value?: number; theme: Theme }) => {
  if (!value) return theme.color.text; 
  if (value > 0) return theme.color.positive;
    return theme.color.negative;
};

const StyledDevelopment = styled.span<DevelopmentProps>`
  color: ${getColor};
`;

const Development: DevelopmentComponent = ({
  value,
  className,
  decimals,
}) => 
  value && Number.isFinite(value) ? (
  <StyledDevelopment className={className} value={value}>
    {getPrefix(value)}
    {!!value && value > 0 ? '+' : null}
    <NumberComponent value={value} decimals={decimals} />
    {'%'}
  </StyledDevelopment>
) : <>-</>;

export {Development}
Development.displayName = 'Development';
