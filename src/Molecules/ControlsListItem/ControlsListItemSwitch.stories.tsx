import React, { useState } from 'react';
import { Meta } from '@storybook/react';

import ControlsListItem from '.';
import { Icon } from '../..';
import { ControlsListItemSelect } from './ControlsListItemSelect.stories';

const meta: Meta<typeof ControlsListItem.Switch> = {
  component: ControlsListItem.Switch,
  title: 'Molecules / ControlsListItem / Switch',
};

export default meta;

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

export const ControlsListItemSwitchWithAddon = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <ControlsListItem.Switch
      checked={isChecked}
      label="label"
      Icon={<Icon.Account24 />}
      description="description is good otherwise we don't understand"
      onChange={() => setIsChecked(!isChecked)}
      addon={
        <ControlsListItemSelect
          asAddon
          justifyContent="flex-end"
          showCheckmark={false}
          description=""
        />
      }
    />
  );
};

export const ControlsListItemSwitchDisabled = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <ControlsListItem.Switch
      checked={isChecked}
      label="label"
      Icon={<Icon.Account24 />}
      description="description is good otherwise we don't understand"
      onChange={() => setIsChecked(!isChecked)}
      disabled
    />
  );
};
