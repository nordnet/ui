import React from 'react';
import styled from 'styled-components';

type Props = {
  name: string;
  value: string | string[];
  options: string[];
  multiple?: boolean;
};

const StyledSelect = styled.select`
  display: none;
`;

const NOOP = () => {}; // to avoid warnings in the browser

export function HiddenSelect(props: Props) {
  /**
   * This component is only used to be able to include values from select in a form submit.
   */

  const { name, value, multiple, options } = props;

  return (
    <StyledSelect
      name={name}
      multiple={multiple}
      aria-hidden="true"
      value={value}
      onChange={NOOP}
      data-testid="hidden-native-select"
    >
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </StyledSelect>
  );
}
