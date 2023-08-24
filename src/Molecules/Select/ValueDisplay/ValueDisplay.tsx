import React from 'react';
import { SelectOption } from '@mui/base/useOption';
import styled from 'styled-components';
import { Typography } from '../../..';
import { ellipsis } from '../Select.styles';
import { Props } from './ValueDisplay.types';

function renderValue<OptionValue>(
  selectedOptions: SelectOption<OptionValue> | SelectOption<OptionValue>[] | null,
) {
  if (Array.isArray(selectedOptions)) {
    return <>{selectedOptions.map((o) => o.label).join(', ')}</>;
  }

  return selectedOptions?.label ?? '';
}

function getSelectedOptionsLabel(
  getOptionMetadata: Props['getOptionMetadata'],
  value: Props['value'],
) {
  let selectedOptionsMetadata = null;

  if (value) {
    if (Array.isArray(value)) {
      selectedOptionsMetadata = value
        .map((v) => getOptionMetadata(v))
        .filter((o) => o !== undefined);
    } else {
      selectedOptionsMetadata = getOptionMetadata(value);
    }
  }

  return selectedOptionsMetadata
    ? renderValue(selectedOptionsMetadata as SelectOption<string> | SelectOption<string>[] | null)
    : null;
}

export const StyledTypography = styled(Typography)<{ $hasValue: boolean }>`
  display: inline-block;
  margin-right: ${({ theme }) => theme.spacing.unit(2)}px;
  color: inherit;
  ${ellipsis}
`;

export function ValueDisplay({ placeholder, value, getOptionMetadata }: Props) {
  const selectedOptionsLabel = value ? getSelectedOptionsLabel(getOptionMetadata, value) : null;

  return (
    <>
      <StyledTypography $hasValue={!!value} type="secondary">
        {selectedOptionsLabel || placeholder}
      </StyledTypography>
    </>
  );
}
