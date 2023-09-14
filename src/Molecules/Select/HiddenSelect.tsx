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

export function HiddenSelect(props: Props) {
  /**
   * This component is only used to be able to include values from select in a form submit.
   */

  const { name, value, multiple, options } = props;

  return (
    <StyledSelect name={name} multiple={multiple} defaultValue={value} aria-hidden="true">
      {options.map((option) => (
        <option
          key={option}
          value={option}
          selected={Array.isArray(value) ? value.includes(option) : value === option}
        >
          {option}
        </option>
      ))}
    </StyledSelect>
  );
}
