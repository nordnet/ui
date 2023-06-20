import React from 'react';
import styled from 'styled-components';
import { units } from '../../..';
import { Props } from './ListBoxFooter.types';

const Wrapper = styled.div`
  padding-top: ${units(1)}px;
  border-top: 1px solid ${({ theme }) => theme.colorTokens.neutral.border_default};
`;

export function ListBoxFooter(props: Props) {
  return <Wrapper {...props} />;
}
