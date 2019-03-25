import styled from 'styled-components';
import { Props } from './CssGridItem.types';

export const Item: React.FC<Props> = styled.div<Props>`
  ${({ area }) => `grid-area: ${area};`}
  ${({ justify }) => justify && `justify-self: ${justify};`}
  ${({ align }) => align && `align-self: ${align};`}
  ${({ place }) => place && `place-self: ${place};`}
`;
