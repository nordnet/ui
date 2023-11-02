import React, { useState } from 'react';
import { Meta } from '@storybook/react';

import ControlsListItem from '.';
import { Icon, Separator } from '../..';
import { ControlsListItemSelect } from './ControlsListItemSelect.stories';

const meta: Meta<typeof ControlsListItem.Radio> = {
  component: ControlsListItem.Radio,
  title: 'Molecules / ControlsListItem / Radio',
};

export default meta;

export const ControlsListItemRadioWithMultipleGroups = () => {
  const OPTIONS = { KARAM: 'KARAM', VIKING: 'VIKING', MICHAEL: 'MICHAEL', JESPER: 'JESPER' };

  const [currentGroup, setCurrentGroup] = useState('');
  const [currentAnotherGroup, setCurrentAnotherGroup] = useState('');

  const onChange = (s: string) => {
    setCurrentGroup(s);
  };

  const onChangeAnother = (s: string) => {
    setCurrentAnotherGroup(s);
  };

  return (
    <>
      <ControlsListItem.Radio
        checked={currentGroup === OPTIONS.VIKING}
        name={OPTIONS.VIKING}
        label={OPTIONS.VIKING}
        Icon={<Icon.Gold16 />}
        value={OPTIONS.VIKING}
        description="description is good otherwise we don't understand"
        onChange={(_) => onChange(OPTIONS.VIKING)}
      />

      <ControlsListItem.Radio
        checked={currentGroup === OPTIONS.KARAM}
        name={OPTIONS.KARAM}
        label={OPTIONS.KARAM}
        value={OPTIONS.KARAM}
        Icon={<Icon.Swish16 />}
        description="description is good otherwise we don't understand"
        onChange={(_) => onChange(OPTIONS.KARAM)}
      />

      <Separator />

      <ControlsListItem.Radio
        checked={currentAnotherGroup === OPTIONS.MICHAEL}
        name={OPTIONS.MICHAEL}
        label={OPTIONS.MICHAEL}
        Icon={<Icon.Add16 />}
        value={OPTIONS.MICHAEL}
        description="description is good otherwise we don't understand"
        onChange={(_) => onChangeAnother(OPTIONS.MICHAEL)}
      />

      <ControlsListItem.Radio
        checked={currentAnotherGroup === OPTIONS.JESPER}
        name={OPTIONS.JESPER}
        label={OPTIONS.JESPER}
        value={OPTIONS.JESPER}
        Icon={<Icon.LikeFill16 />}
        description="description is good otherwise we don't understand"
        onChange={(_) => onChangeAnother(OPTIONS.JESPER)}
        disabled
      />
    </>
  );
};

export const ControlsListItemRadioWithAddonComponent = () => {
  const OPTIONS = { KARAM: 'KARAM', VIKING: 'VIKING', MICHAEL: 'MICHAEL', JESPER: 'JESPER' };

  const [currentGroup, setCurrentGroup] = useState('');

  const onChange = (s: string) => {
    setCurrentGroup(s);
  };

  return (
    <ControlsListItem.Radio
      checked={currentGroup === OPTIONS.VIKING}
      name={OPTIONS.VIKING}
      label={OPTIONS.VIKING}
      Icon={<Icon.Gold16 />}
      value={OPTIONS.VIKING}
      description="description is good otherwise we don't understand"
      onChange={(_) => onChange(OPTIONS.VIKING)}
      addon={<ControlsListItemSelect asAddon showCheckmark description="" />}
    />
  );
};

export const ControlsListItemRadioWithAddonComponentRightAligned = () => {
  const OPTIONS = { KARAM: 'KARAM', VIKING: 'VIKING', MICHAEL: 'MICHAEL', JESPER: 'JESPER' };

  const [currentGroup, setCurrentGroup] = useState('');

  const onChange = (s: string) => {
    setCurrentGroup(s);
  };

  return (
    <ControlsListItem.Radio
      checked={currentGroup === OPTIONS.VIKING}
      name={OPTIONS.VIKING}
      label={OPTIONS.VIKING}
      Icon={<Icon.Gold16 />}
      value={OPTIONS.VIKING}
      description="description is good otherwise we don't understand"
      onChange={(_) => onChange(OPTIONS.VIKING)}
      addon={
        <ControlsListItemSelect
          asAddon
          justifyContent="flex-end"
          showCheckmark={false}
          listWidth="auto"
          description=""
        />
      }
    />
  );
};

export const ControlsListItemRadioWithAddonComponentRightAlignedAndFixedMinWidth = () => {
  const OPTIONS = { KARAM: 'KARAM', VIKING: 'VIKING', MICHAEL: 'MICHAEL', JESPER: 'JESPER' };

  const [currentGroup, setCurrentGroup] = useState('');

  const onChange = (s: string) => {
    setCurrentGroup(s);
  };

  return (
    <ControlsListItem.Radio
      checked={currentGroup === OPTIONS.VIKING}
      name={OPTIONS.VIKING}
      label={OPTIONS.VIKING}
      Icon={<Icon.Gold16 />}
      value={OPTIONS.VIKING}
      description="description is good otherwise we don't understand"
      onChange={(_) => onChange(OPTIONS.VIKING)}
      addon={
        <ControlsListItemSelect
          asAddon
          justifyContent="flex-end"
          showCheckmark={false}
          listWidth="300px"
          description=""
        />
      }
    />
  );
};
