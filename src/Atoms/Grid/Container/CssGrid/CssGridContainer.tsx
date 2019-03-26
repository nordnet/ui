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
  const { gutter = props.theme.spacing.gutter, theme } = props;
  const equalGaps = (value: number) => `grid-gap: ${theme.spacing.unit(value)}px`;

  if (isNumber(gutter)) {
    return equalGaps(gutter);
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

const getTemplateColumns = (props: ThemedStyledProps<Props, Theme>) => {
  const { gutter, areas, templateColumns } = props;

  if (isUndefined(gutter)) {
    return `grid-template-columns: repeat(${areas[0].length}, 1fr);`;
  }

  return `grid-template-columns: ${templateColumns};`;
};

const StyledCssGrid: React.FC<Props> = styled.div<Props>`
  box-sizing: border-box;
  ${({ height }) => height && `height: ${height}`};
  display: grid;
  ${({ areas }) => areas && `grid-template-areas: ${formatAreas(areas)};`}
  ${({ templateRows }) => templateRows && `grid-template-rows: ${templateRows};`}
  ${props => getTemplateColumns(props)}
  ${props => getGutterStyles(props)}
`;

export const CssGrid: React.FunctionComponent<Props> = props => <StyledCssGrid {...props} />;

CssGrid.displayName = 'Grid.Container.CssGrid';
