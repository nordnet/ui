import React from 'react';
import styled from 'styled-components';
import { LabeledValueComponent } from './LabeledValue.types';
import Text from '../../Atoms/Text';

const StyledLabeledValue = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledLabel = styled.div`
  margin-bottom: ${p => p.theme.spacing.unit(1)};
`;

export const LabeledValue: LabeledValueComponent = props => (
  <StyledLabeledValue>
    <StyledLabel>
      <Text.Secondary color={t => t.color.label}>{props.label}</Text.Secondary>
    </StyledLabel>
    {props.children}
  </StyledLabeledValue>
);
