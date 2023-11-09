import React from 'react';
import { Meta } from '@storybook/react';

import ControlsListItem from '.';
import { Icon } from '../..';

const meta: Meta<typeof ControlsListItem.Button> = {
  component: ControlsListItem.Button,
  title: 'Molecules / ControlsListItem / Button',
};

export default meta;

export const ControlsListItemButtonWithIcon24 = () => (
  <ControlsListItem.Button
    buttonText="button text"
    label="label"
    onClick={() => {}}
    Icon={<Icon.Account24 />}
    description="description is good otherwise we don't understand"
  />
);

export const ControlsListItemButtonWithIcon16 = () => (
  <ControlsListItem.Button
    buttonText="button text"
    label="label"
    onClick={() => {}}
    Icon={<Icon.Gold16 />}
    description="description is good otherwise we don't understand"
  />
);
