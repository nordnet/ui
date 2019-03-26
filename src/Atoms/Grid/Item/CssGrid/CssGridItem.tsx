import React from 'react';
import styled from 'styled-components';
import { Props } from './CssGridItem.types';

const StyledItem: React.FC<Props> = styled.div<Props>`
  box-sizing: border-box;
  ${({ area }) => `grid-area: ${area};`}
  ${({ justify }) => (justify ? `justify-self: ${justify};` : '')}
  ${({ align }) => (align ? `align-self: ${align};` : '')}
  ${({ place }) => (place ? `place-self: ${place};` : '')}
`;

export const Item: React.FunctionComponent<Props> = props => <StyledItem {...props} />;

Item.displayName = 'Grid.Item.CssGrid';
