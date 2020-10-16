import React from 'react';
import { action } from '@storybook/addon-actions';
import isSameMonth from 'date-fns/isSameMonth';
import { DatePicker } from './DatePicker';
import { Flexbox } from '../..';

export default {
  title: 'Molecules | DatePicker',
  parameters: {
    component: DatePicker,
  },
};

const dateNow = new Date();

export const defaultStory = () => {
  return <DatePicker id="input-id" label="Label" onChange={action('onChange')} />;
};

defaultStory.story = {
  name: 'Default',
};

export const disableDates = () => {
  return (
    <DatePicker
      id="disable-dates-input"
      label="Label"
      disableDate={(date) => !isSameMonth(dateNow, date)}
      onChange={action('onChange')}
    />
  );
};

disableDates.story = {
  name: 'Disable certain dates',
};

export const enableDates = () => {
  return (
    <DatePicker
      id="enable-dates-input"
      label="Label"
      enableDate={(date) => isSameMonth(dateNow, date)}
      onChange={action('onChange')}
    />
  );
};

enableDates.story = {
  name: 'Enable certain dates',
};

export const disabledInput = () => {
  return <DatePicker id="disabled-input" label="Label" disabled />;
};

disabledInput.story = {
  name: 'Disabled input',
};

export const sideBySideStory = () => {
  return (
    <Flexbox container>
      <Flexbox item>
        <DatePicker id="input-id-side-one" label="Label" onChange={action('onChange')} />
      </Flexbox>
      <Flexbox item>
        <DatePicker id="input-id-side-two" label="Label" onChange={action('onChange')} />
      </Flexbox>
    </Flexbox>
  );
};

sideBySideStory.story = {
  name: 'Side by side',
};
