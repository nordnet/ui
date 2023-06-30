import styled from 'styled-components';
import { Props } from './Select.types';
import { Icon, units } from '../..';

const TRIANGLE_SIZE = 10;
const BORDER_SIZE = 1;

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

export const Arrow = styled.div`
  position: absolute;
  z-index: 1;
  left: 16px;
  bottom: calc(100% - 1px);

  &::before,
  &::after {
    content: '';
    display: block;
    width: 0;
    height: 0;
    position: absolute;
    top: 0;
    left: 0;
  }

  &::before {
    border-left: ${TRIANGLE_SIZE}px solid transparent;
    border-right: ${TRIANGLE_SIZE}px solid transparent;
    border-bottom: ${TRIANGLE_SIZE}px solid ${(p) => p.theme.color.bubbleBorder};
  }

  &::after {
    left: ${BORDER_SIZE * 2}px;
    top: ${BORDER_SIZE * 2}px;
    border-left: ${TRIANGLE_SIZE - BORDER_SIZE * 2}px solid transparent;
    border-right: ${TRIANGLE_SIZE - BORDER_SIZE * 2}px solid transparent;
    border-bottom: ${TRIANGLE_SIZE - BORDER_SIZE * 2}px solid
      ${(p) => p.theme.color.bubbleBackground};
  }
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
  margin: ${TRIANGLE_SIZE}px 0 0 0;
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
