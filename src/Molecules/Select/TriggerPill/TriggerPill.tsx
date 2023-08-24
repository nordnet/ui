import React, { forwardRef } from 'react';
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

export const TriggerPill = forwardRef<HTMLButtonElement, Props>(function TriggerComponent(
  props: Props,
  ref,
) {
  // ! It's important to use the passed in children from props because it's connected to the useSelect hook in Select.tsx
  const { children, ...rest } = props;

  return (
    <StyledPill variant="secondary" size="m" fullWidth ref={ref} {...rest}>
      {children}
    </StyledPill>
  );
});
