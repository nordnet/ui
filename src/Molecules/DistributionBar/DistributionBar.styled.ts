import styled from 'styled-components';
import { Flexbox } from '../../index';

export const Container = styled(Flexbox)`
  isolation: isolate;
  position: relative;
  height: ${(p) => p.theme.spacing.unit(8)}px;
`;

export const Content = styled(Flexbox)<{ mx: number }>`
  z-index: 1;
  width: 100%;
  margin: 0 ${(p) => p.theme.spacing.unit(p.mx)}px};
`;

export const Bar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background-color: ${(p) => p.theme.color.switchReadOnlyTrackBg};
  z-index: 0;
  margin: 0 ${(p) => p.theme.spacing.unit(4)}px;
  &:before,
  &:after {
    position: absolute;
    content: '';
    display: block;
    border-radius: 100px 0 0 100px;
    background-color: ${(p) => p.theme.color.switchReadOnlyTrackBg};
    height: 100%;
    width: ${(p) => p.theme.spacing.unit(4)}px;
    top: 0;
    left: -${(p) => p.theme.spacing.unit(4)}px;
  }
  &:after {
    border-radius: 0 100px 100px 0;
    left: initial;
    right: -${(p) => p.theme.spacing.unit(4)}px;
  }
`;
