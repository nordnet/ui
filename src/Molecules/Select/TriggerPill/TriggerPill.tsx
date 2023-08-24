import * as React from 'react';
import styled from 'styled-components';
import { Props } from './TriggerPill.types';
import { Button } from '../../..';

const StyledPill = styled(Button.Pill)`
  border: 1px solid transparent;
  justify-content: left;

  &:focus-within,
  &:focus {
    border-color: ${({ theme }) => theme.colorTokens.neutral.border_default};
  }
`;

export function TriggerPill({ children, ...rest }: Props) {
  // ! It's important to use the passed in children from props because it's connected to the useSelect hook in Select.tsx
  return (
    <StyledPill variant="secondary" size="m" fullWidth {...rest}>
      {children}
    </StyledPill>
  );
}
