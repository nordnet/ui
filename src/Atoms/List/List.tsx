import styled from 'styled-components';
import React from 'react';
import { Props } from './List.types';

const BaseList = styled.ul<Props>`
  list-style-type: none;
  margin: 0;
  padding: 0;

  ${(p) =>
    p.separated
      ? `
        li + li {
          border-top: 1px solid ${p.theme.color.divider};
        }
      `
      : ''}

  ${(p) =>
    p.fullWidthSeparator
      ? `
        li + li {
          border-top: 1px solid ${p.theme.color.divider};
          margin-left: -${p.theme.spacing.unit(5)}px;
          padding: 0 ${p.theme.spacing.unit(5)}px;
          width: 100%;
          ${p.theme.media.lessThan(p.theme.breakpoints.sm)} {
            margin-left: -${p.theme.spacing.unit(3)}px;
            padding: 0 ${p.theme.spacing.unit(3)}px;
          }
        }
      `
      : ''}
`;

export const List: React.FunctionComponent<Props> = React.forwardRef<HTMLUListElement, Props>(
  ({ as = 'ul', className, children, separated, fullWidthSeparator, ...rest }, ref) => (
    <BaseList
      ref={ref}
      className={className}
      separated={separated}
      fullWidthSeparator={fullWidthSeparator}
      as={as}
      {...rest}
    >
      {children}
    </BaseList>
  ),
);
List.displayName = 'List';
