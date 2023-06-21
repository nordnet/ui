/* eslint-disable react/require-default-props */
import React from 'react';
import styled from 'styled-components';
import { Badge, Flexbox, Typography } from '../../..';
import { ellipsis } from '../Select.styles';
import { Props } from './ValueDisplayMultiSelect.types';

const StyledTypography = styled(Typography)`
  display: block;
  margin-right: ${({ theme }) => theme.spacing.unit(2)}px;
  ${ellipsis}
`;

export function ValueDisplayMultiSelect(props: Props) {
  const { selectedCount, label, placeholderLabel } = props;

  if (selectedCount === 0) {
    return (
      <StyledTypography type="secondary" color={(t) => t.colorTokens.neutral.text_weak}>
        {placeholderLabel}
      </StyledTypography>
    );
  }

  return (
    <Flexbox container alignItems="center" gap={1}>
      <Flexbox item>
        <Badge.Number size={4}>{selectedCount}</Badge.Number>
      </Flexbox>
      <Flexbox item>
        <StyledTypography type="secondary" color="inherit">
          {label}
        </StyledTypography>
      </Flexbox>
    </Flexbox>
  );
}
