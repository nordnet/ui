import React from 'react';
import styled from 'styled-components';
import { ThComponent, Props } from './Th.types';

const StyledTh = styled.th<Props>`
  color: ${p => p.theme.color.label};
  font-weight: normal;
  height: 100%;
  padding: ${p => p.theme.spacing.unit(2)}px ${p => p.theme.spacing.unit(1)}px;
  text-align: ${p => p.textAlign};
  width: ${p => p.width};

  :first-child {
    padding-left: 0;
  }
  :last-child {
    padding-right: 0;
  }

  ${p =>
    p.ellipsis
      ? `white-space: nowrap;
     overflow: hidden;
     text-overflow: ellipsis;
    `
      : ''}
`;

export const Th: ThComponent = ({
  width = 'auto',
  textAlign = 'left',
  ellipsis = false,
  scope,
  className,
  children,
}) => (
  <StyledTh
    width={width}
    textAlign={textAlign}
    ellipsis={ellipsis}
    scope={scope}
    className={className}
  >
    {children}
  </StyledTh>
);
