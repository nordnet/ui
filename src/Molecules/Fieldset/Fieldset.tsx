import React from 'react';
import styled from 'styled-components';
import { Props } from './Fieldset.types';

const StyledFieldset = styled.fieldset`
  padding: 0;
  margin: 0;
  border: 0;
`;

export const Fieldset: React.FC<Props> = props => {
  const { className, children } = props;

  return <StyledFieldset className={className}>{children}</StyledFieldset>;
};
