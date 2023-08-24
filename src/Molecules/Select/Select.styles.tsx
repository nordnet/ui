import styled from 'styled-components';
import { Props } from './Select.types';
import { Icon, units } from '../..';

export const ellipsis = `
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Root = styled.div<{ $width: number }>`
  display: inline-block;
  position: relative;
  width: ${(props) => units(props.$width)}px;
`;

export const StyledChevronDown8 = styled(Icon.ChevronDown8)`
  margin-left: auto;
`;

export const ListContainer = styled.div<{ $hidden: Props['hidden'] }>`
  position: absolute;
  width: 100%;
  cursor: pointer;
  z-index: ${({ theme }) => theme.zIndex.dropdown};

  ${({ $hidden }) =>
    $hidden
      ? `opacity: 0;
    visibility: hidden;
    transition: opacity 0.4s ease, visibility 0.4s step-end;`
      : ''}
`;

export const ListboxContainer = styled.div`
  margin-top: ${units(1)}px;
  background: ${({ theme }) => theme.colorTokens.neutral.background_default};
  border: 1px solid ${({ theme }) => theme.colorTokens.neutral.border_default};
  box-sizing: border-box;
  padding: ${({ theme }) => theme.spacing.unit(1)}px 0;
  border-radius: 4px;
  overflow: auto;
`;

export const Listbox = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;
