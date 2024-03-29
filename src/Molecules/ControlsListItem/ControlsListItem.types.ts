import React from 'react';
import { SizeProp } from '../Toggle/Toggle.types';
import { OptionItem } from '../Input/Select/Select.types';

export type JustifyContentProp =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | undefined;

export type Props = {
  label: string;
  Icon?: React.ReactNode;
  text?: string;
  description?: string;
  disabled?: boolean;
};

export type ControlsListItemSwitch = {
  onChange: (checked?: boolean) => void;
  checked?: boolean;
  addon?: React.ReactNode;
  size?: SizeProp;
} & Props;

export type ControlsListItemButton = {
  onClick: () => void;
  buttonText: string;
  disabled?: boolean;
} & Props;

export type ControlsListItemSelect = {
  options: OptionItem[];
  onChange: (val: OptionItem[]) => void;
  selectedItem: OptionItem[];
  asAddon?: boolean;
  showCheckmark?: boolean;
  justifyContent?: JustifyContentProp;
  listWidth?: string;
  disabled?: boolean;
  placement?: 'top' | 'bottom';
} & Props;

export type ControlsListItemRadio = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  name: string;
  label: string;
  checked?: boolean;
  addon?: React.ReactNode;
  disabled?: boolean;
} & Props;
