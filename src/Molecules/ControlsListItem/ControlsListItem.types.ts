import React from 'react';
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
};

export type ControlsListItemSwitch = {
  onChange: (checked?: boolean) => void;
  checked?: boolean;
} & Props;

export type ControlsListItemButton = { onClick: () => void; buttonText: string } & Props;

export type ControlsListItemSelect = {
  options: OptionItem[];
  onChange: (val: OptionItem[]) => void;
  selectedItem: OptionItem[];
  asAddon?: boolean;
  showCheckmark?: boolean;
  justifyContent?: JustifyContentProp;
  listWidth?: string;
} & Props;

export type ControlsListItemRadio = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  name: string;
  label: string;
  checked?: boolean;
  addon?: React.ReactNode;
} & Props;
