import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { Props } from './TriggerPill.types';
import { Button } from '../../..';
import { useSelect } from '..';

const StyledPill = styled(Button.Pill)`
  border: 1px solid transparent;
  justify-content: left;
  &:focus-within,
  &:focus {
    border-color: ${({ theme }) => theme.colorTokens.neutral.border_default};
  }
`;

export const TriggerPill = forwardRef<HTMLButtonElement, Props>(function TriggerPillComponent(
  props: Props,
  ref,
) {
  const { children } = props;
  const { getButtonProps } = useSelect();

  return (
    <StyledPill variant="secondary" size="m" fullWidth {...getButtonProps()} ref={ref}>
      {children}
    </StyledPill>
  );
});
