import { action } from '@storybook/addon-actions';
import { add, isSameWeek } from 'date-fns';
import React, { useState } from 'react';
import { Button, Flexbox } from '../../..';
import DoubleDatePicker from '.';

export default {
  title: 'Molecules / DatePicker / Double DatePicker',
  parameters: {
    component: DoubleDatePicker,
  },
  decorators: [(Story: any) => <Story />],
};

const dateNow = new Date();

export const Default = () => (
  <>
    <DoubleDatePicker id="input-id" labelFrom="Label" labelTo="" onChange={action('Range date')} />
  </>
);

export const SameWeekDisabled = () => {
  return (
    <DoubleDatePicker
      id="disable-dates-input"
      labelFrom="Disabled dates on same week"
      labelTo=""
      disableDate={(date) => isSameWeek(dateNow, date)}
      onChange={action('onChange')}
    />
  );
};

export const SameWeekEnabled = () => {
  return (
    <DoubleDatePicker
      id="enable-dates-input"
      labelFrom="Only enabled dates in same week"
      labelTo=""
      enableDate={(date) => isSameWeek(dateNow, date)}
      onChange={action('onChange')}
    />
  );
};

export const Controlled = () => {
  const [startDate, setStartDate] = useState(new Date('01/01/2021'));
  const [endDate, setEndDate] = useState(add(startDate, { days: 4 }));

  return (
    <>
      <Flexbox container gap={2}>
        <Flexbox item>
          <Button onClick={() => setStartDate(add(startDate, { days: 1 }))}>Next date</Button>
        </Flexbox>
        <Flexbox item>
          <Button onClick={() => setEndDate(add(endDate, { days: 1 }))}>Next end date</Button>
        </Flexbox>
      </Flexbox>
      <DoubleDatePicker
        id="controlled"
        labelFrom="Controlled"
        labelTo="Controlled"
        selectedStartDate={startDate}
        selectedEndDate={endDate}
        onChange={(selectedStartDate, selectedEndDate) => {
          if (selectedStartDate) setStartDate(selectedStartDate);
          if (selectedEndDate) setEndDate(selectedEndDate);
          action('onChange');
        }}
      />
    </>
  );
};

export const DisabledInput = () => {
  return <DoubleDatePicker id="disabled-input" labelFrom="Disabled input" labelTo="" disabled />;
};

export const AllowUpdateWhileTyping = () => {
  return (
    <DoubleDatePicker
      id="allow-update-on-type"
      allowDateUpdateOnType
      labelFrom="Allow update while typing"
    />
  );
};

export const DisallowSingleDayRange = () => (
  <DoubleDatePicker
    id="input-id"
    labelFrom="Label"
    labelTo=""
    onChange={action('Range date')}
    allowSingleDayRange={false}
    showClearButton
    clearButtonLabel=""
  />
);

export const WithClearButton = () => (
  <DoubleDatePicker
    id="clear-button"
    labelFrom="With clear button"
    showClearButton
    clearButtonLabel="Clear Dates"
  />
);
