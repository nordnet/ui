import styled from 'styled-components';
import { Props } from './FlexboxContainer.types';

export const Flexbox = styled.div<Props>`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: stretch;
  align-content: stretch;
`;
