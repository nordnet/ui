import { action } from '@storybook/addon-actions';
import { add, isSameWeek } from 'date-fns';
import React, { useState } from 'react';
import { IntlProvider } from 'react-intl';
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
  <IntlProvider locale="en">
    <DoubleDatePicker id="input-id" labelFrom="Label" labelTo="" onChange={action('Range date')} />
  </IntlProvider>
);

export const SameWeekDisabled = () => {
  return (
    <IntlProvider locale="en">
      <DoubleDatePicker
        id="disable-dates-input"
        labelFrom="Disabled dates on same week"
        labelTo=""
        disableDate={(date) => isSameWeek(dateNow, date)}
        onChange={action('onChange')}
      />
    </IntlProvider>
  );
};

export const SameWeekEnabled = () => {
  return (
    <IntlProvider locale="en">
      <DoubleDatePicker
        id="enable-dates-input"
        labelFrom="Only enabled dates in same week"
        labelTo=""
        enableDate={(date) => isSameWeek(dateNow, date)}
        onChange={action('onChange')}
      />
    </IntlProvider>
  );
};

export const Controlled = () => {
  const [startDate, setStartDate] = useState(new Date('01/01/2021'));
  const [endDate, setEndDate] = useState(add(startDate, { days: 4 }));

  return (
    <IntlProvider locale="en">
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
    </IntlProvider>
  );
};

export const DisabledInput = () => {
  return (
    <IntlProvider locale="en">
      <DoubleDatePicker id="disabled-input" labelFrom="Disabled input" labelTo="" disabled />;
    </IntlProvider>
  );
};

export const AllowUpdateWhileTyping = () => {
  return (
    <IntlProvider locale="en">
      <DoubleDatePicker
        id="allow-update-on-type"
        allowDateUpdateOnType
        labelFrom="Allow update while typing"
      />
    </IntlProvider>
  );
};

export const DisallowSingleDayRange = () => (
  <IntlProvider locale="en">
    <DoubleDatePicker
      id="input-id"
      labelFrom="Label"
      labelTo=""
      onChange={action('Range date')}
      allowSingleDayRange={false}
      showClearButton
      clearButtonLabel=""
    />
  </IntlProvider>
);

export const WithClearButton = () => (
  <IntlProvider locale="en">
    <DoubleDatePicker
      id="clear-button"
      labelFrom="With clear button"
      showClearButton
      clearButtonLabel="Clear Dates"
    />
  </IntlProvider>
);
