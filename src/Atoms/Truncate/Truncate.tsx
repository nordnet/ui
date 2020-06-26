import React from 'react';
import styled from 'styled-components';
import { Props } from './Truncate.types';

const StyledDiv = styled.div`
  display: inline-block;
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const Truncate = React.forwardRef<React.Ref<HTMLElement>, Props>(
  ({ as, className, children, ...divProps }, ref) => {
    return (
      <StyledDiv as={as} className={className} ref={ref} {...divProps}>
        {children}
      </StyledDiv>
    );
  },
);
