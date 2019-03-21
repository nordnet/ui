import styled from 'styled-components';
import { GridProps as Props } from './Grid.types';

const formatAreas = (areas: Props['areas']) => areas.map(area => `"${area}"`).join(' ');

export const Grid = styled.div<Props>`
  box-sizing: border-box;
  display: grid;
  height: ${({ height = 'auto' }) => height};
  grid-gap: ${({ gap = '8px' }) => gap};
  ${({ gap: { row } }) => columnGap && `column-gap: ${columnGap}`};
  ${({ rowGap }) => rowGap && `row-gap: ${rowGap}`};
  ${({ areas }) => areas && `grid-template-areas: ${formatAreas(areas)}`};
  grid-template-columns: repeat(3, 1fr, 3);
`;
