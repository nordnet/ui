import { OptionItem } from '../Input/Select/Select.types';

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
} & Props;
