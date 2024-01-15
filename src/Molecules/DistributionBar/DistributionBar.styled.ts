import styled from 'styled-components';
import { Flexbox, Icon } from '../../index';

export const Item = styled(Flexbox)`
  isolation: isolate;
  position: relative;
  min-width: 0;
`;

export const StyledFlexbox = styled(Flexbox)`
  border-radius: ${({ theme }) => theme.borderRadius100};
  padding-right: ${({ theme }) => theme.spacing.unit(2)}px;

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
    margin: 0;
    padding: 0;
    position: absolute;
    content: '';
    display: block;
    border-radius: ${({ theme }) => theme.borderRadius100} 0 0
      ${({ theme }) => theme.borderRadius100};
    background-color: ${(p) => p.theme.colorTokens.action.background_weak};
    height: 100%;
    width: ${(p) => p.theme.spacing.unit(4)}px;
    top: 0;
    left: -${(p) => p.theme.spacing.unit(4)}px;
  }

  &::after {
    border-radius: 0 ${({ theme }) => theme.borderRadius100} ${({ theme }) => theme.borderRadius100}
      0;
    left: initial;
    right: -${(p) => p.theme.spacing.unit(4)}px;
  }

  ${StyledFlexbox}:hover & {
    box-sizing: border-box;
    border: 1px solid ${(p) => p.theme.colorTokens.action.border_weak};

    &::before {
      margin-top: -1px;
      border-left: 1px solid ${(p) => p.theme.colorTokens.action.border_weak};
      border-top: 1px solid ${(p) => p.theme.colorTokens.action.border_weak};
      border-bottom: 1px solid ${(p) => p.theme.colorTokens.action.border_weak};
    }

    &::after {
      margin-top: -1px;
      border-right: 1px solid ${(p) => p.theme.colorTokens.action.border_weak};
      border-top: 1px solid ${(p) => p.theme.colorTokens.action.border_weak};
      border-bottom: 1px solid ${(p) => p.theme.colorTokens.action.border_weak};
    }
  }
`;

export const StyledDot = styled(Icon.Dot8)`
  margin: 0 ${(p) => p.theme.spacing.unit(1)}px;
`;
