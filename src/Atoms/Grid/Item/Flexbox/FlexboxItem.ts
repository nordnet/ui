import styled from 'styled-components';
import { Props } from './FlexboxItem.types';

export const Item = styled.div<Props>`
    ${({ order }) => order && `order: ${order};`}
    ${({ grow }) => grow && `flex-grow: ${grow};`}
    ${({ shrink }) => shrink && `flex-shrink: ${shrink};`}
    ${({ basis }) => basis && `flex-basis: ${basis};`}
    ${({ flex }) => flex && `flex: ${flex};`}
    ${({ align }) => align && `align-self: ${align};`}
`;
