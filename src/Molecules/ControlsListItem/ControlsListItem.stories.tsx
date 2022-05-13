import React, { useState } from 'react';
import { OptionItem } from '../Input/Select/Select.types';

import ControlsListItem from '.';
import { Icon } from '../..';

export default {
  title: 'Molecules / ControlsListItem',
  component: ControlsListItem,
};

export const ControlsListItemButton = () => (
  <ControlsListItem.Button
    buttonText="button text"
    label="label"
    onClick={() => {}}
    Icon={<Icon.Account24 />}
    description="description is good otherwise we don't understand"
  />
);

ControlsListItemButton.story = {
  name: 'Controls list item button',
};

const mockedListItems = [
  { label: 'first label', value: 'first value' },
  { label: 'second label', value: 'second value' },
  { label: 'third label', value: 'third value' },
] as OptionItem[];

export const ControlsListItemSelect = () => {
  const [selectedItem, setSelectedItem] = useState([mockedListItems[0]]);
  const onChange = (val: OptionItem[]) => {
    setSelectedItem(val);
  };
  return (
    <ControlsListItem.Select
      label="label"
      onChange={onChange}
      options={mockedListItems}
      selectedItem={selectedItem}
      text="text"
      description="description is good otherwise we don't understand"
    />
  );
};

ControlsListItemSelect.story = {
  name: 'Controls list item select',
};

export const ControlsListItemSwitch = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <ControlsListItem.Switch
      checked={isChecked}
      label="label"
      Icon={<Icon.Account24 />}
      description="description is good otherwise we don't understand"
      onChange={() => setIsChecked(!isChecked)}
    />
  );
};

ControlsListItemSwitch.story = {
  name: 'Controls list item switch',
};
