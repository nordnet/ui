import styled from 'styled-components';
import { Flexbox, Icon } from '../../index';

export const Item = styled(Flexbox)`
  isolation: isolate;
  position: relative;
  min-width: 0;
`;

export const StyledFlexBox = styled(Flexbox)<{ $hoverEffect?: boolean }>`
  border-radius: 50px;
  &:hover {
    background-color: ${({ theme, $hoverEffect }) =>
      $hoverEffect ? theme.colorTokens.neutral.background_hover : 'transparent'};
  }
`;

export const Bar = styled.div<{ $hoverEffect?: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background-color: ${(p) => p.theme.colorTokens.action.background_weak};
  z-index: -1;
  margin: 0 ${(p) => p.theme.spacing.unit(4)}px;

  &::before,
  &::after {
    position: absolute;
    content: '';
    display: block;
    border-radius: 100px 0 0 100px;
    background-color: ${(p) => p.theme.colorTokens.action.background_weak};
    height: 100%;
    width: ${(p) => p.theme.spacing.unit(4)}px;
    top: 0;
    left: -${(p) => p.theme.spacing.unit(4)}px;
  }

  &::after {
    border-radius: 0 100px 100px 0;
    left: initial;
    right: -${(p) => p.theme.spacing.unit(4)}px;
  }

  ${StyledFlexBox}:hover & {
    border: 1px solid ${({ theme, $hoverEffect }) =>
          $hoverEffect ? theme.colorTokens.action.border_weak : 'transparent'};
    &::before {
      box-shadow: -1px 0px 0px 1px
        ${({ theme, $hoverEffect }) =>
          $hoverEffect ? theme.colorTokens.action.border_weak : 'transparent'};
    }
    &::after {
      box-shadow: 1px 0px 0px 1px
        ${({ theme, $hoverEffect }) =>
          $hoverEffect ? theme.colorTokens.action.border_weak : 'transparent'};
    }
  }
`;

export const StyledDot = styled(Icon.Dot8)`
  margin: 0 ${(p) => p.theme.spacing.unit(1)}px;
`;
