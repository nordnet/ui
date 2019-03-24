import styled from 'styled-components';
import { Props } from './FlexboxContainer.types';

export const Flexbox: React.FC<Props> = styled.div<Props>`
  display: flex;
  box-sizing: border-box;
  ${({ height }) => height && `height: ${height}`};
  flex-direction: ${({ direction = 'row' }) => direction};
  flex-wrap: ${({ wrap = 'wrap' }) => wrap};
  justify-content: ${({ justifyContent = 'flex-start' }) => justifyContent};
  align-items: ${({ alignItems = 'stretch' }) => alignItems};
  align-content: ${({ alignContent = 'stretch' }) => alignContent};
`;
