import styled from 'styled-components';
import { Props } from './Cell.types';

const Cell = styled.div<Props>`
  ${({ area }) => `grid-area: ${area}`}
`;

export default Cell;
