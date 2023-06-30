import * as React from 'react';
import styled from 'styled-components';
import { Props } from './PillTrigger.types';
import { Button } from '../../..';

const StyledPill = styled(Button.Pill)`
  border: 1px solid transparent;
  justify-content: left;

  &:focus-within,
  &:focus {
    border-color: ${({ theme }) => theme.colorTokens.neutral.border_default};
  }
`;

export function PillTrigger(props: Props) {
  return <StyledPill variant="secondary" size="m" fullWidth {...props} />;
}
