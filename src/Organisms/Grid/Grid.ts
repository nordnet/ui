import styled from 'styled-components';

const formatAreas = (areas: Props['areas']) => areas.map(area => `"${area}"`).join(' ');

export const Grid = styled.div<Props>`
  box-sizing: border-box;
  display: grid;
  height: ${({ height = 'auto' }) => height};
  grid-gap: ${({ gap = '8px' }) => gap};
  ${({ columnGap }) => columnGap && `column-gap: ${columnGap}`};
  ${({ rowGap }) => rowGap && `row-gap: ${rowGap}`};
  ${({ areas }) => areas && `grid-template-areas: ${formatAreas(areas)}`};
  grid-template-columns: repeat(3, 1fr);
`;

type Props = {
  height?: string;
  gap?: string;
  columnGap?: string;
  rowGap?: string;
  areas: string[];
};
