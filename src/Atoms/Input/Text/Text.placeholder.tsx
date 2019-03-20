import styled from 'styled-components';
import { Props } from './Text.types';

export const TextPlaceholder = styled.input<Props>`
  color: ${(p: Props) => p.color};
  font-size: ${(p: Props) => `${p.fontSize}px`};
`;
