import React from 'react';
import styled, { css } from 'styled-components';
import { Props } from './PageWrapper.types';
import { BreakpointKey } from '../../theme/theme.types';

const getBreakpointStyles = (size: BreakpointKey) => css`
  ${(p) => p.theme.media.greaterThan(p.theme.breakpoints[size])} {
    max-width: ${(p) => p.theme.breakpoints[size].size}px;
    padding: 0 ${(p) => p.theme.spacing.unit(p.theme.breakpoints[size].offset)}px;
  }
`;

const Outer = styled.div<Props>`
  ${(p) => (p.background ? `background-color: ${p.background(p.theme)}` : '')}
`;

const Inner = styled.div`
  box-sizing: border-box;
  margin: 0 auto;

  ${getBreakpointStyles('sm')};
  ${getBreakpointStyles('md')};
  ${getBreakpointStyles('lg')};
  ${getBreakpointStyles('xl')};

  ${({ theme }) =>
    theme.isFeatureEnabled('shadows') &&
    `
      ${theme.media.lessThan(theme.breakpoints.sm)} {
        margin: 0px ${theme.spacing.unit(4)}px;
      }
  `}

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
