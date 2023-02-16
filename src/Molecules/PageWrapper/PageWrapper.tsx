import React from 'react';
import styled, { css } from 'styled-components';
import { Props } from './PageWrapper.types';

const getBreakpointStyles = (breakpointSize: string, maxWidthSize: string) => css`
  ${(p) => p.theme.media.greaterThan(p.theme.breakpoints[breakpointSize])} {
    max-width: ${(p) => p.theme.breakpoints[maxWidthSize].size}px;
    padding: 0 ${(p) => p.theme.spacing.unit(p.theme.breakpoints[maxWidthSize].offset)}px;
  }
`;

const Outer = styled.div<Props>`
  ${(p) => (p.background ? `background-color: ${p.background(p.theme)}` : '')}
`;

const Inner = styled.div`
  box-sizing: border-box;
  margin: 0 auto;

  ${getBreakpointStyles('xs', 'sm')};
  ${getBreakpointStyles('sm', 'md')};
  ${getBreakpointStyles('md', 'lg')};
  ${getBreakpointStyles('lg', 'xl')};

  @media print {
    max-width: none;
  }
`;

const components = { Inner };

export const PageWrapper: React.FC<Props> & { components: typeof components } = ({
  children,
  background,
  className,
}) => {
  return (
    <Outer background={background} className={className}>
      <Inner>{children}</Inner>
    </Outer>
  );
};

PageWrapper.components = components;

PageWrapper.displayName = 'PageWrapper';
