import React from 'react';
import styled from 'styled-components';
import { Props } from './PageWrapper.types';
import { Box } from '../..';

const Outer = styled.div<Props>`
  ${p => (p.background ? `background-color: ${p.background(p.theme)}` : '')}
`;

const Inner = styled(Box)`
  ${p => p.theme.media.greaterThan(p.theme.size.sm)} {
    max-width: 1252px;
  }
`;

export const PageWrapper: React.FC<Props> = ({ children, background }) => {
  return (
    <Outer background={background}>
      <Inner p={0} m="0 auto" sm={{ px: 6 }}>
        {children}
      </Inner>
    </Outer>
  );
};

PageWrapper.displayName = 'PageWrapper';
