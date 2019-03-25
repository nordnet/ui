import React from 'react';
import styled from 'styled-components';
import { Props } from './Text.types';

const StyledDiv = styled.div<Props>`
  /* stylelint-disable no-empty-block */
`;

export const TextPlaceholder: React.FunctionComponent<Props> = props => <StyledDiv {...props} />;
