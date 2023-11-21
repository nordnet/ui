import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { OptionItem } from '../Input/Select/Select.types';
import ControlsListItem from '.';
import { Box } from '../..';
import { ControlsListItemSelect as SelectProps } from './ControlsListItem.types';

const meta: Meta<typeof ControlsListItem.Select> = {
  component: ControlsListItem.Select,
  title: 'Molecules / ControlsListItem / Select',
};

export default meta;
type Story = StoryObj<typeof ControlsListItem.Select>;

export const ControlsListItemSelect = (props: Partial<SelectProps>) => {
  const mockedListItems = [
    { label: 'first label', value: 'first value' },
    { label: 'second label', value: 'second value' },
    { label: 'third label', value: 'third value' },
  ] as OptionItem[];

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
      {...props}
    />
  );
};

export const ControlsListItemSelectWithPlacementTop = () => {
  const mockedListItems = [
    { label: 'first label', value: 'first value' },
    { label: 'second label', value: 'second value' },
    { label: 'third label', value: 'third value' },
  ] as OptionItem[];

  const [selectedItem, setSelectedItem] = useState([mockedListItems[0]]);
  const onChange = (val: OptionItem[]) => {
    setSelectedItem(val);
  };
  return (
    <Box pt={25}>
      <ControlsListItem.Select
        label="label"
        onChange={onChange}
        options={mockedListItems}
        selectedItem={selectedItem}
        text="text"
        description="description is good otherwise we don't understand"
        placement="top"
      />
    </Box>
  );
};

export const ControlsListItemSelectWithoutDescription: Story = {
  render: () => <ControlsListItemSelect asAddon={false} showCheckmark description="" />,
};
