import React, { useState } from 'react';
import { OptionItem } from '../Input/Select/Select.types';

import ControlsListItem from '.';
import { Box, Icon, List, Separator } from '../..';

export default {
  title: 'Molecules / ControlsListItem',
  component: ControlsListItem,
};

export const ControlsListItemButtonWithIcon24 = {
  render: () => (
    <ControlsListItem.Button
      buttonText="button text"
      label="label"
      onClick={() => {}}
      Icon={<Icon.Account24 />}
      description="description is good otherwise we don't understand"
    />
  ),

  name: 'Controls list item button with icon 24',
};

export const ControlsListItemButtonWithIcon16 = {
  render: () => (
    <ControlsListItem.Button
      buttonText="button text"
      label="label"
      onClick={() => {}}
      Icon={<Icon.Gold16 />}
      description="description is good otherwise we don't understand"
    />
  ),

  name: 'Controls list item button with icon 16',
};

export const ControlsListItemSelect = {
  render: () => {
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
  },

  name: 'Controls list item select',
};

export const ControlsListItemSelectPlacementTop = {
  render: () => {
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
  },

  name: 'Controls list item select with placement top',
};

export const ControlsListItemSelectWithoutDescription = {
  render: (
    asAddon = false,
    rightAligned = false,
    showCheckmark = true,
    listWidth: string | undefined,
  ) => {
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
        justifyContent={rightAligned ? 'flex-end' : undefined}
        showCheckmark={showCheckmark}
        listWidth={listWidth}
      />
    );
  },

  name: 'Controls list item select without description',
};

export const ControlsListItemSwitch = {
  render: () => {
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
  },

  name: 'Controls list item switch',
};

export const ControlsListItemSwitchWithAddon = {
  render: () => {
    const [isChecked, setIsChecked] = useState(false);

    return (
      <ControlsListItem.Switch
        checked={isChecked}
        label="label"
        Icon={<Icon.Account24 />}
        description="description is good otherwise we don't understand"
        onChange={() => setIsChecked(!isChecked)}
        addon={ControlsListItemSelectWithoutDescription(true, true, false, undefined)}
      />
    );
  },

  name: 'Controls list item switch with addon',
};

export const ControlsListItemSwitchDisabled = {
  render: () => {
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
  },

  name: 'Controls list item switch disabled',
};

export const ControlsListItemRadio = {
  render: () => {
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
  },

  name: 'Controls list item Radio with multiple groups',
};

export const ControlsListItemRadioWithAddon = {
  render: () => {
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
        addon={ControlsListItemSelectWithoutDescription(true, false, true, undefined)}
      />
    );
  },

  name: 'Controls list item Radio with addon component',
};

export const ControlsListItemRadioWithAddonRightAligned = {
  render: () => {
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
        addon={ControlsListItemSelectWithoutDescription(true, true, false, 'auto')}
      />
    );
  },

  name: 'Controls list item Radio with addon component right aligned',
};

export const ControlsListItemRadioWithAddonRightAlignedFixedMinWidth = {
  render: () => {
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
        addon={ControlsListItemSelectWithoutDescription(true, true, false, '300px')}
      />
    );
  },

  name: 'Controls list item Radio with addon component right aligned and fixed min-width',
};

export const ControlsListWithLotsOfItems = {
  render: () => {
    return (
      <div style={{ width: '80%', margin: 20, background: 'white' }}>
        <List separated>
          <ControlsListItemButtonWithIcon24 />
          <ControlsListItemButtonWithIcon16 />
          <ControlsListItemSelect />
          <ControlsListItemSelect />
          <ControlsListItemSwitch />
          <ControlsListItemSwitchWithAddon />
          <ControlsListItemSwitchDisabled />
          <ControlsListItemRadio />
          <ControlsListItemRadioWithAddon />
          <ControlsListItemRadioWithAddonRightAligned />
          <ControlsListItemRadioWithAddonRightAlignedFixedMinWidth />
        </List>
      </div>
    );
  },

  name: 'Controls list with lots of items',
};
