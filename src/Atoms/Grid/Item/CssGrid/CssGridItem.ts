import styled from 'styled-components';
import { Props } from './CssGridItem.types';

export const Item = styled.div<Props>`
  ${({ area }) => `grid-area: ${area}`}
`;
