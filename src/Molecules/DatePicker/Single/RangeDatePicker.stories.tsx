import { action } from '@storybook/addon-actions';
import { add, isSameWeek } from 'date-fns';
import React, { useState } from 'react';
import DatePicker from '../DatePicker';
import { Button, Flexbox } from '../../..';

export default {
  title: 'Molecules / DatePicker / DatePicker with range',
  parameters: {
    component: DatePicker,
  },
};

const dateNow = new Date();

export const Default = () => (
  <DatePicker id="input-id" label="Label" onChange={action('Range date')} variant="RANGE" />
);

export const SameWeekDisabled = () => {
  return (
    <DatePicker
      id="disable-dates-input"
      variant="RANGE"
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
      variant="RANGE"
      label="Only enabled dates in same week"
      enableDate={(date) => isSameWeek(dateNow, date)}
      onChange={action('onChange')}
    />
  );
};

export const Controlled = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(add(startDate, { days: 4 }));

  return (
    <>
      <Flexbox container gutter={2}>
        <Flexbox item>
          <Button onClick={() => setStartDate(add(startDate, { days: 1 }))}>Next date</Button>
        </Flexbox>
        <Flexbox item>
          <Button onClick={() => setEndDate(add(endDate, { days: 1 }))}>Next end date</Button>
        </Flexbox>
      </Flexbox>
      <DatePicker
        id="controlled"
        variant="RANGE"
        label="Controlled"
        selectedDate={startDate}
        selectedEndDate={endDate}
        onChange={(selectedDate, selectedEndDate) => {
          setStartDate(selectedDate);
          if (selectedEndDate) setEndDate(selectedEndDate);
          action('onChange');
        }}
      />
    </>
  );
};

export const DisabledInput = () => {
  return <DatePicker id="disabled-input" variant="RANGE" label="Disabled input" disabled />;
};

export const AllowUpdateWhileTyping = () => {
  return (
    <DatePicker
      id="disabled-input"
      variant="RANGE"
      allowDateUpdateOnType
      label="Allow update while typing"
    />
  );
};

export const FullscreenOnMobile = () => (
  <DatePicker
    id="fullscreen-on-mobile"
    variant="RANGE"
    label="FullscreenOnMobile"
    fullScreenOnMobile
  />
);
