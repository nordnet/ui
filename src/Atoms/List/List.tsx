import styled from 'styled-components';
import React from 'react';
import { Props } from './List.types';

const StyledList = styled.ul<Props>`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const VerticalList = styled(StyledList)`
  ${({ separated, theme }) =>
    separated &&
    `
    & > li + li {
      border-top: 1px solid ${theme.color.divider}
    }
  `}
`;

const HorisontalList = styled(StyledList)`
  display: flex;
  ${({ separated, theme }) =>
    separated &&
    `
    & > li + li {
      border-left: 1px solid ${theme.color.divider}
    }
  `}
`;

export const List: React.FunctionComponent<Props> = props => {
  const { horisontal, separated, children } = props;
  return horisontal ? (
    <HorisontalList separated={separated}>{children}</HorisontalList>
  ) : (
    <VerticalList separated={separated}>{children}</VerticalList>
  );
};
List.displayName = 'List';
