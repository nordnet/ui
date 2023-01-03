import styled from 'styled-components';
import { Flexbox, Icon } from '../../index';

export const Item = styled(Flexbox)`
  isolation: isolate;
  position: relative;
  min-width: 0;
  height: 100%;
`;

export const Bar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background-color: ${(p) => p.theme.color.tableEmphasis};
  z-index: -1;
  margin: 0 ${(p) => p.theme.spacing.unit(4)}px;
  &:before,
  &:after {
    position: absolute;
    content: '';
    display: block;
    border-radius: 100px 0 0 100px;
    background-color: ${(p) => p.theme.color.tableEmphasis};
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

export const StyledDot = styled(Icon.Dot8)`
  margin: 0 ${(p) => p.theme.spacing.unit(1)}px;
`;
