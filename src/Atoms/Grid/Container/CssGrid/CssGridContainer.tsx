import React from 'react';
import styled, { ThemedStyledProps } from 'styled-components';
import { Theme } from '../../../../theme/theme.types';
import { Props } from './CssGridContainer.types';

const formatAreas = (areas: Props['areas']) =>
  areas
    .map(areaRow => areaRow.join(' '))
    .map(area => `"${area}"`)
    .join(' ');
const isNumber = (x: any): x is number => x === parseInt(x, 10);
const isUndefined = (x: any): x is undefined => typeof x === 'undefined';

const getGutterStyles = (props: ThemedStyledProps<Props, Theme>) => {
  const { gutter, theme } = props;
  const equalGaps = (value: number) => `grid-gap: ${theme.spacing.unit(value)}px`;

  if (isNumber(gutter)) {
    return equalGaps(gutter);
  }
  if (isUndefined(gutter)) {
    return undefined;
  }

  const { col, row } = gutter;

  if (col && row && col === row) {
    return equalGaps(gutter.col);
  }

  return `
    ${col && `column-gap: ${theme.spacing.unit(col)}px`};
    ${row && `row-gap: ${theme.spacing.unit(row)}px`};
  `;
};

const StyledCssGrid: React.FC<Props> = styled.div<Props>`
  box-sizing: border-box;
  ${({ height }) => height && `height: ${height}`};
  display: grid;
  ${({ areas }) => areas && `grid-template-areas: ${formatAreas(areas)};`}
  ${({ templateColumns }) => templateColumns && `grid-template-columns: ${templateColumns};`}
  ${({ templateRows }) => templateRows && `grid-template-rows: ${templateRows};`}
  ${props => props.gutter && getGutterStyles(props)}
`;

export const CssGrid: React.FunctionComponent<Props> = props => <StyledCssGrid {...props} />;

CssGrid.displayName = 'CSS Grid Container';
