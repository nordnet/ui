import styled from 'styled-components';
import { Flexbox, Icon } from '../../index';

export const Item = styled(Flexbox)`
  isolation: isolate;
  position: relative;
  min-width: 0;
`;

export const StyledFlexBox = styled(Flexbox)`
  border-radius: 50px;
  padding-right: ${({ theme }) => theme.spacing.unit(2)}px;
  height: 100%;

  &:hover {
    background-color: ${({ theme }) => theme.colorTokens.neutral.background_hover};
  }
`;

export const Bar = styled.div`
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
    box-sizing: border-box;
    border: 1px solid ${(p) => p.theme.colorTokens.action.border_weak};

    &::before {
      box-sizing: border-box;
      box-shadow: -1px 0 0 1px ${(p) => p.theme.colorTokens.action.border_weak};
    }

    &::after {
      box-sizing: border-box;
      box-shadow: 1px 0 0 1px ${(p) => p.theme.colorTokens.action.border_weak};
    }
  }
`;

export const StyledDot = styled(Icon.Dot8)`
  margin: 0 ${(p) => p.theme.spacing.unit(1)}px;
`;
