import styled from 'styled-components';
import { Flexbox } from '../..';

export const ContainerLabel = styled.label`
  border: 1px solid
    ${({ theme }) =>
      theme.isDarkMode ? theme.color.tooltipBadgeBorder : theme.color.listSelectionCardBorder};

  border-radius: ${(p) => p.theme.spacing.unit(8)}px;
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  padding: 0 ${(p) => p.theme.spacing.unit(2)}px;
  height: ${(p) => p.theme.spacing.unit(8)}px;
  color: ${(p) => p.theme.color.quickFilterText};
`;

export const StyledFlexbox = styled(Flexbox)`
  & > * {
    color: inherit;
  }
`;
