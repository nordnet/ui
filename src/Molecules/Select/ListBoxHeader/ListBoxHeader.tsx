import React from 'react';
import styled from 'styled-components';
import { units } from '../../..';
import { Props } from './Header.types';

const Wrapper = styled.div<{ $withBorder?: boolean }>`
  padding: ${units(1)}px ${units(3)}px;
  ${({ theme, $withBorder }) =>
    $withBorder ? `border-bottom: 1px solid ${theme.colorTokens.neutral.border_default};` : ''}
`;

export function ListBoxHeader(props: Props) {
  return <Wrapper $withBorder={props.withBorder} {...props} />;
}
