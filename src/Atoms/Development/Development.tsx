import React from 'react';
import styled from 'styled-components';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import { DevelopmentProps } from './Development.types';
import { Theme } from '../../theme/theme.types';

const getPrefix = (value: number) => {
  if (value > 0) return '▲';
  if (value < 0) return '▼';
  return '';
};

const getColor = (value: number) => (t: Theme) => {
  if (value > 0) {
    return t.color.positive;
  }

  if (value < 0) {
    return t.color.negative;
  }
  return t.color.text;
};

const StyledDevelopment = styled.span<DevelopmentProps>`
  color: ${p => getColor(p.value)(p.theme)};
`;

const FD: React.FC<DevelopmentProps & InjectedIntlProps> = ({ value, intl, className }) => (
  <StyledDevelopment className={className} value={value}>
    {getPrefix(value)}
    {value > 0 ? '+' : null}
    {intl.formatNumber(value)}
    {'%'}
  </StyledDevelopment>
);

export const Development = injectIntl(FD);
Development.displayName = 'Development';
