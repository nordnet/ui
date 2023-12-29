import styled from 'styled-components';

export const ellipsis = `
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Root = styled.div<{ $width: number; $fullWidth?: boolean }>`
  display: inline-block;
  position: relative;
  width: ${({ theme, $width, $fullWidth }) =>
    $fullWidth ? '100%' : `${theme.spacing.unit($width)}px`};
`;

export const ListContainer = styled.div<{ $hidden: boolean }>`
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
  margin-top: ${(p) => p.theme.spacing.unit(1)}px;
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
