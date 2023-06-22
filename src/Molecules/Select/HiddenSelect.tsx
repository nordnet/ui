import React from 'react';
import styled from 'styled-components';
import { isArray } from '../../common/utils';

type Props = {
  name: string;
  value?: string | string[];
  multiple?: boolean;
};

const StyledSelect = styled.select`
  display: none;
`;

export function HiddenSelect(props: Props) {
  /**
   * This component is only used to be able to include values from select in a form submit.
   */

  const { name, value, multiple } = props;

  return value ? (
    <StyledSelect name={name} multiple={multiple} defaultValue={value} aria-hidden="true">
      {isArray(value) ? (
        value.map((v) => (
          <option key={v} value={v}>
            {v}
          </option>
        ))
      ) : (
        <option value={value}>{value}</option>
      )}
    </StyledSelect>
  ) : null;
}
