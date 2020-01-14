import styled from 'styled-components';
import React from 'react';
import { Props } from './List.types';

const BaseList = styled.ul<Props>`
  list-style-type: none;
  margin: 0;
  padding: 0;

  ${p =>
    p.separated
      ? `
        li + li {
          border-top: 1px solid ${p.theme.color.divider}
        }
      `
      : ``}
`;

export const List: React.FunctionComponent<Props> = React.forwardRef<HTMLUListElement, Props>(
  ({ as = 'ul', className, children, separated, ...rest }, ref) => (
    <BaseList ref={ref} className={className} separated={separated} as={as} {...rest}>
      {children}
    </BaseList>
  ),
);
List.displayName = 'List';
