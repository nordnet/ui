import React from 'react';
import { action } from '@storybook/addon-actions';
import isSameMonth from 'date-fns/isSameMonth';
import { Datepicker } from './Datepicker';

export default {
  title: 'Molecules | Datepicker',
  parameters: {
    component: Datepicker,
  },
};

const dateNow = new Date();

export const defaultStory = () => {
  return <Datepicker id="input-id" label="Label" onChange={action('onChange')} />;
};

defaultStory.story = {
  name: 'Default',
};

export const disableDates = () => {
  return (
    <Datepicker
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
    <Datepicker
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
  return <Datepicker id="disabled-input" label="Label" disabled />;
};

disabledInput.story = {
  name: 'Disabled input',
};
