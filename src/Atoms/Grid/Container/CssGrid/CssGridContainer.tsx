import React from 'react';
import styled, { css } from 'styled-components';
import { Theme } from '../../../../theme/theme.types';
import { Props, Gutter, TemplateColumn, Areas } from './CssGridContainer.types';
import { isUndefined } from '../../../../common/utils';

const formatAreas = (areas: Props['areas']) =>
  areas
    .map(areaRow => areaRow.join(' '))
    .map(area => `"${area}"`)
    .join(' ');

const isNumber = (x: any): x is number => x === parseInt(x, 10);
const isArrayOfStrings = (xs: any[]): xs is string[] => xs.every(x => typeof x === 'string');

const getGutterStyles = (props: { gutter: Gutter; theme: Theme }) => {
  const { gutter, theme } = props;
  const equalGaps = (value: number) => `grid-gap: ${theme.spacing.unit(value)}px`;

  if (isNumber(gutter)) {
    return equalGaps(gutter);
  }

  const { col, row } = gutter;

  if (col && row && col === row) {
    return equalGaps(gutter.col);
  }

  return `
    ${col ? `column-gap: ${theme.spacing.unit(col)}px` : ''};
    ${row ? `row-gap: ${theme.spacing.unit(row)}px` : ''};
  `;
};

const getTemplateColumns = (props: {
  theme: Theme;
  templateColumns?: TemplateColumn;
  gutter: Gutter;
  areas: Areas;
}) => {
  const { gutter, areas, templateColumns } = props;
  const oneColSize = 100 / 12;

  if (isUndefined(gutter)) {
    return `grid-template-columns: repeat(${areas[0].length}, 1fr);`;
  }

  if (isUndefined(templateColumns)) {
    return null;
  }

  if (isArrayOfStrings(templateColumns)) {
    return `grid-template-columns: ${templateColumns.join(' ')};`;
  }

  return `grid-template-columns: ${templateColumns
    .map((x: number) => `${x * oneColSize}fr`)
    .join(' ')};`;
};

const StyledDiv = styled.div<Props>`
  ${props => {
    const { sm, md, lg, xl } = props;
    const createStyles = (innerProps: Partial<Props>, size?: 'sm' | 'md' | 'lg' | 'xl') => {
      const { height, areas, templateRows, templateColumns } = innerProps;
      const gutter = isUndefined(innerProps.gutter)
        ? props.theme.spacing.gutter
        : innerProps.gutter;
      const baseStyles = `
          ${height ? `height: ${height}` : ''};
          ${areas ? `grid-template-areas: ${formatAreas(areas)};` : ''}
          ${templateRows ? `grid-template-rows: ${templateRows};` : ''}
          ${getTemplateColumns({
            ...innerProps,
            gutter,
            areas: props.areas,
            templateColumns,
            theme: props.theme,
          }) || ''}
          ${getGutterStyles({ ...innerProps, gutter, theme: props.theme }) || ''}
        `;

      return size
        ? css`
            ${props.theme.media.greaterThan(props.theme.size[size])} {
              ${baseStyles}
            }
          `
        : baseStyles;
    };

    const styles = Object.entries({ sm, md, lg, xl })
      .filter(([_, sizeProps]) => sizeProps !== undefined)
      .map(([size, sizeProps]) => createStyles(sizeProps!, size as 'sm' | 'md' | 'lg' | 'xl'));
    styles.unshift(createStyles(props, undefined));
    return styles.join('\n');
  }}
  box-sizing: border-box;
  display: grid;
`;

export const CssGrid: React.FC<Props> = props => <StyledDiv {...props} />;

CssGrid.displayName = 'Grid.Container.CssGrid';
