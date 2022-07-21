import React from 'react';

export type Option<T> = {
  label: React.ReactNode;
  value: T;
};

export type Props<T> = {
  options: Option<T>[];
  selectedValue: T;
  size?: 's' | 'm';
  onChange: (selectedValue: T) => void;
  disabled?: boolean;
  error?: string;
  success?: string;
  width?: string;
  hideLabel?: boolean;
  label?: string;
  extraInfo?: string;
  height?: string;
  multiple?: boolean;
  fullscreenOnMobile?: boolean;
};
