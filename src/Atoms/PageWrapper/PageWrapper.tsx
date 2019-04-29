import React from 'react';
import styled from 'styled-components';
import { Props } from './PageWrapper.types';

const Outer = styled.div<Props>`
  ${p => (p.background ? `background-color: ${p.background(p.theme)}` : '')}
`;

const Inner = styled.div`
  ${p => p.theme.media.greaterThan(p.theme.size.sm)} {
    padding: 0 ${p => p.theme.spacing.unit(6)}px;
    margin: 0 auto;
    max-width: 1252px;
  }
`;

export const PageWrapper: React.FC<Props> = ({ children, background }) => {
  return (
    <Outer background={background}>
      <Inner>{children}</Inner>
    </Outer>
  );
};

PageWrapper.displayName = 'PageWrapper';
