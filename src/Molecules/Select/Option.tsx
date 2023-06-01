/* eslint-disable react/require-default-props */
import React from 'react';
import useOption from '@mui/base/useOption';
import styled from 'styled-components';

interface OptionProps {
  children?: React.ReactNode;
  className?: string;
  value: string;
  disabled?: boolean;
}

const Item = styled.li`
  padding: 8px;
  border-radius: 0.45em;

  &[aria-selected='true'] {
    background-color: red;
    color: blue;
  }

  &.highlighted,
  &:hover {
    background-color: purple;
    color: green;
  }

  &[aria-selected='true'].highlighted {
    background-color: orange;
    color: blue;
  }

  &:before {
    content: '';
    width: 1ex;
    height: 1ex;
    margin-right: 1ex;
    background-color: gray;
    display: inline-block;
    border-radius: 50%;
    vertical-align: middle;
  }
`;

function Option(props: OptionProps) {
  const { children, value, className, disabled = false } = props;
  const { getRootProps, highlighted } = useOption({
    value,
    disabled,
    label: children,
  });
  //   console.log({ value, highlighted });

  return (
    <Item {...getRootProps()} className={className}>
      {children}
    </Item>
  );
}

export default Option;
