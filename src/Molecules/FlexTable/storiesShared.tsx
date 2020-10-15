import styled from 'styled-components';
import { Flexbox } from '../..';

export const StyledBackground = styled.div`
  background-color: ${(p) => p.theme.color.background};
  &:not(:last-of-type) {
    margin-bottom: ${(p) => p.theme.spacing.unit(10)}px;
  }
`;

export const StyledFlexboxContainer = styled(Flexbox)`
  justify-content: inherit;
`;
