import React from 'react';

type Option = {
  label: string;
  value: string | number;
};

export type Props = {
  options: Option[];
  value?: string | number | string[] | number[];
  hideLabel?: boolean;
  placeholder?: string;
  label: React.ReactNode;
  name?: string;
  disabled?: boolean;
  onChange?: React.ChangeEventHandler;
  onFocus?: React.FocusEventHandler;
  onBlur?: React.FocusEventHandler;
  className?: string;
};

export type SelectComponent = React.FunctionComponent<Props>;
