import React from 'react';
import styled from 'styled-components';
import { Button, units } from '../..';
import { Props } from './Action.types';

const StyledButton = styled(Button)`
  padding: ${units(1)}px ${units(3)}px;
  color: ${({ theme }) => theme.colorTokens.action.text_default};
  justify-content: left;
`;

export function Action(props: Props) {
  return <StyledButton iconPlacement="left" variant="neutral" fullWidth {...props} />;
}
