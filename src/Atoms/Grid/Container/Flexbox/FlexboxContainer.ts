import styled from 'styled-components';
import { Props } from './FlexboxContainer.types';

export const Flexbox: React.FC<Props> = styled.div<Props>`
  display: flex;
  box-sizing: border-box;
  ${({ height }) => height && `height: ${height}`};
  ${({ direction }) => direction && `flex-direction: ${direction}`};
  ${({ wrap }) => wrap && `flex-wrap: ${wrap}`};
  ${({ justifyContent }) => justifyContent && `justify-content: ${justifyContent}`};
  ${({ alignItems }) => alignItems && `align-items: ${alignItems}`};
  ${({ alignContent }) => alignContent && `align-content: ${alignContent}`};
`;
