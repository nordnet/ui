import styled from 'styled-components';
import React from 'react';
import { Props } from './List.types';

const StyledList = styled.ul<Props>`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

export const List: React.FunctionComponent<Props> = React.forwardRef<HTMLUListElement, Props>(
  ({ as = 'ul', className, children, ...rest }, ref) => (
    <StyledList ref={ref} className={className} as={as} {...rest}>
      {children}
    </StyledList>
  ),
);
List.displayName = 'List';
