import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import { add, isSameWeek } from 'date-fns';
import DatePicker from '../DatePicker';
import { Button } from '../../..';

export default {
  title: 'Molecules / DatePicker / DatePicker',
  parameters: {
    component: DatePicker,
  },
};

const dateNow = new Date();

export const Default = () => {
  return <DatePicker id="input-id" label="Default" onChange={action('onChange')} />;
};

export const SameWeekDisabled = () => {
  return (
    <DatePicker
      id="disable-dates-input"
      label="Disabled dates on same week"
      disableDate={(date) => isSameWeek(dateNow, date)}
      onChange={action('onChange')}
    />
  );
};

export const SameWeekEnabled = () => {
  return (
    <DatePicker
      id="enable-dates-input"
      label="Enabled dates on same week"
      enableDate={(date) => isSameWeek(dateNow, date)}
      onChange={action('onChange')}
    />
  );
};

export const Controlled = () => {
  const [date, setDate] = useState(new Date());

  return (
    <>
      <Button onClick={() => setDate(add(date, { days: 1 }))}>Next date</Button>
      <DatePicker
        id="controlled"
        label="Label"
        selectedDate={date}
        onChange={(selectedDate) => {
          setDate(selectedDate);
          action('onChange');
        }}
      />
    </>
  );
};

export const DisabledInput = () => {
  return <DatePicker id="disabled-input" label="Label" disabled />;
};

export const FullWidthInput = () => {
  return <DatePicker id="full-width-input" label="Label" width="100%" />;
};

export const AllowUpdateWhileTyping = () => {
  return <DatePicker id="disabled-input" allowDateUpdateOnType label="Allow update while typing" />;
};

export const FullscreenOnMobile = () => (
  <DatePicker
    id="date-picker-with-fullscreen-on-mobile-behavior"
    label="Fullscreen on mobile"
    onChange={action('onChange regular')}
    fullscreenOnMobile
    fullscreenProps={{
      title: 'Select a date',
      closeButtonLabel: 'Ok',
      clearButtonLabel: 'Clear date',
    }}
  />
);
