import styled from 'styled-components';

export const Cell = styled.div<Props>`
  height: 100%;
  min-width: 0;
  background: rgba(255, 0, 0, 0.1);
  ${({ area }) => area && `grid-area: ${area}`};
`;

type Props = {
  area: string;
};
