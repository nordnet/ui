import React, { useState } from 'react';
import { OptionItem } from '../Input/Select/Select.types';

import ControlsListItem from '.';
import { Icon, Separator } from '../..';

export default {
  title: 'Molecules / ControlsListItem',
  component: ControlsListItem,
};

export const ControlsListItemButtonWithIcon24 = () => (
  <ControlsListItem.Button
    buttonText="button text"
    label="label"
    onClick={() => {}}
    Icon={<Icon.Account24 />}
    description="description is good otherwise we don't understand"
  />
);

ControlsListItemButtonWithIcon24.story = {
  name: 'Controls list item button with icon 24',
};

export const ControlsListItemButtonWithIcon16 = () => (
  <ControlsListItem.Button
    buttonText="button text"
    label="label"
    onClick={() => {}}
    Icon={<Icon.Gold16 />}
    description="description is good otherwise we don't understand"
  />
);

ControlsListItemButtonWithIcon16.story = {
  name: 'Controls list item button with icon 16',
};

export const ControlsListItemSelect = () => {
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
    />
  );
};

ControlsListItemSelect.story = {
  name: 'Controls list item select',
};

export const ControlsListItemSelectWithoutDescription = (asAddon = false) => {
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
      asAddon={asAddon}
    />
  );
};

ControlsListItemSelectWithoutDescription.story = {
  name: 'Controls list item select without description',
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

export const ControlsListItemRadio = () => {
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
      />
    </>
  );
};

ControlsListItemRadio.story = {
  name: 'Controls list item Radio with multiple groups',
};

export const ControlsListItemRadioWithAddon = () => {
  const OPTIONS = { KARAM: 'KARAM', VIKING: 'VIKING', MICHAEL: 'MICHAEL', JESPER: 'JESPER' };

  const [currentGroup, setCurrentGroup] = useState('');

  const onChange = (s: string) => {
    setCurrentGroup(s);
  };

  return (
    <div style={{ width: '100%' }}>
      <ControlsListItem.Radio
        checked={currentGroup === OPTIONS.VIKING}
        name={OPTIONS.VIKING}
        label={OPTIONS.VIKING}
        Icon={<Icon.Gold16 />}
        value={OPTIONS.VIKING}
        description="description is good otherwise we don't understand"
        onChange={(_) => onChange(OPTIONS.VIKING)}
        addon={ControlsListItemSelectWithoutDescription(true)}
      />
    </div>
  );
};

ControlsListItemRadioWithAddon.story = {
  name: 'Controls list item Radio with addon component',
};
