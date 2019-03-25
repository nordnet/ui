import styled from 'styled-components';
import { Props } from './CssGridContainer.types';

const formatAreas = (areas: Props['areas']) =>
  areas
    .map(areaRow => areaRow.join(' '))
    .map(area => `"${area}"`)
    .join(' ');
const isString = (x: any): x is string => typeof x === 'string' || x instanceof String;
const isNumber = (x: any): x is number => x === parseInt(x, 10);
const isUndefined = (x: any): x is undefined => typeof x === 'undefined';

const getGutterStyles = (gutter: Props['gutter']) => {
  if (isString(gutter)) {
    return `grid-gap: ${gutter}`;
  }
  if (isNumber(gutter)) {
    return `grid-gap: ${gutter}px`;
  }
  if (isUndefined(gutter)) {
    return undefined;
  }

  const { col, row } = gutter;

  if (col && row && col === row) {
    return `grid-gap: ${col}px`;
  }

  return `
    ${col && `column-gap: ${col}px`};
    ${row && `row-gap: ${row}px`};
  `;
};

export const CssGrid = styled.div<Props>`
  box-sizing: border-box;
  ${({ height }) => height && `height: ${height}`};
  display: grid;
  ${({ areas }) => areas && `grid-template-areas: ${formatAreas(areas)};`}
  ${({ templateColumns }) => templateColumns && `grid-template-columns: ${templateColumns};`}
  ${({ templateRows }) => templateRows && `grid-template-rows: ${templateRows};`}
  ${({ gutter }) => gutter && getGutterStyles(gutter)}
`;
