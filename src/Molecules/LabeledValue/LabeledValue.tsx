import React from 'react';
import styled from 'styled-components';
import { LabeledValueComponent } from './LabeledValue.types';
import Typography from '../../Atoms/Typography';
import { isElement } from '../../common/utils';

const StyledLabeledValue = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledLabel = styled.div`
  margin-bottom: ${p => p.theme.spacing.unit(1)}px;
`;

export const LabeledValue: LabeledValueComponent = ({ children, className, label }) => {
  const pageHeaderTitle = () => {
    if (isElement(label)) {
      return label;
    }
    return (
      <Typography type="secondary" color={t => t.color.label}>
        {label}
      </Typography>
    );
  };
  return (
    <StyledLabeledValue className={className}>
      <StyledLabel>{pageHeaderTitle()}</StyledLabel>
      {children}
    </StyledLabeledValue>
  );
};
