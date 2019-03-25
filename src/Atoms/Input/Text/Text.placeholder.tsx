import React from 'react';
import styled from 'styled-components';
import { Props } from './Text.types';

const StyledInput = styled.input<Props>`
  color: ${(p: Props) => p.color};
  font-size: ${(p: Props) => `${p.fontSize}px`};
`;

export const TextPlaceholder: React.FunctionComponent<Props> = props => <StyledInput {...props} />;
TextPlaceholder.displayName = 'Input.Text';
