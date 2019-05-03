import React from 'react';
import styled from 'styled-components';
import { Props } from './PageWrapper.types';
import { Box } from '../..';

const OLD_GRID_PADDING = 10 * 2; // px
const OLD_GRID_REDUCTION = 30; // px
const OLD_GRID_COMPABILITY = OLD_GRID_PADDING + OLD_GRID_REDUCTION;
// TODO: remove OLD_GRID_COMPABILITY when header and footer uses new grid

const Outer = styled.div<Props>`
  ${p => (p.background ? `background-color: ${p.background(p.theme)}` : '')}
`;

const Inner = styled(Box)`
  ${p => p.theme.media.greaterThan(p.theme.size.sm)} {
    max-width: ${p => p.theme.size.sm - OLD_GRID_COMPABILITY}px;
  }
  ${p => p.theme.media.greaterThan(p.theme.size.md)} {
    max-width: ${p => p.theme.size.md - OLD_GRID_COMPABILITY}px;
  }
  ${p => p.theme.media.greaterThan(p.theme.size.lg)} {
    max-width: ${p => p.theme.size.lg - OLD_GRID_COMPABILITY}px;
  }
`;

export const PageWrapper: React.FC<Props> = ({ children, background }) => {
  return (
    <Outer background={background}>
      <Inner m="0 auto" p={0} sm={{ px: 2 }}>
        {children}
      </Inner>
    </Outer>
  );
};

PageWrapper.displayName = 'PageWrapper';
