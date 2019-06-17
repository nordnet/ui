import React from 'react';
import styled, { css } from 'styled-components';
import { Props } from './PageWrapper.types';

const getBreakpointStyles = (size: string) => css`
  ${p => p.theme.media.greaterThan(p.theme.breakpoints[size])} {
    max-width: ${p => p.theme.breakpoints[size].size}px;
    padding: 0 ${p => p.theme.spacing.unit(p.theme.breakpoints[size].offset)}px;
  }
`;

const Outer = styled.div<Props>`
  ${p => (p.background ? `background-color: ${p.background(p.theme)}` : '')}
`;

const Inner = styled.div`
  box-sizing: border-box;
  margin: 0 auto;
  padding: 0 ${p => p.theme.spacing.unit(p.theme.breakpoints.xs.offset)}px;

  ${getBreakpointStyles('sm')};
  ${getBreakpointStyles('md')};
  ${getBreakpointStyles('lg')};
  ${getBreakpointStyles('xl')};
`;

export const PageWrapper: React.FC<Props> = ({ children, background }) => {
  return (
    <Outer background={background}>
      <Inner>{children}</Inner>
    </Outer>
  );
};

PageWrapper.displayName = 'PageWrapper';
