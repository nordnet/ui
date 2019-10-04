import React from 'react';
import styled from 'styled-components';
import { Props } from './ListItem.types';

const StyledListItem = styled.li`
  display: block;
`;

export const ListItem: React.FunctionComponent<Props> = React.forwardRef<HTMLLIElement, Props>(
  ({ children, className, ...rest }, ref) => (
    <StyledListItem className={className} ref={ref} {...rest}>
      {children}
    </StyledListItem>
  ),
);
