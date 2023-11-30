import { action } from '@storybook/addon-actions';
import { add, isSameWeek } from 'date-fns';
import React, { useState } from 'react';
import { IntlProvider } from 'react-intl';
import DateRangePicker from './DateRangePicker';
import { Button, Flexbox } from '../../..';

export default {
  title: 'Molecules / DatePicker / Range DatePicker',
  parameters: {
    component: DateRangePicker,
  },
};

const dateNow = new Date();

export const Default = () => (
  <IntlProvider locale="en">
    <DateRangePicker id="input-id" label="Label" onChange={action('Range date')} />
  </IntlProvider>
);

export const SameWeekDisabled = () => {
  return (
    <IntlProvider locale="en">
      <DateRangePicker
        id="disable-dates-input"
        label="Disabled dates on same week"
        disableDate={(date) => isSameWeek(dateNow, date)}
        onChange={action('onChange')}
      />
    </IntlProvider>
  );
};

export const SameWeekEnabled = () => {
  return (
    <IntlProvider locale="en">
      <DateRangePicker
        id="enable-dates-input"
        label="Only enabled dates in same week"
        enableDate={(date) => isSameWeek(dateNow, date)}
        onChange={action('onChange')}
      />
    </IntlProvider>
  );
};

export const Controlled = () => {
  const [startDate, setStartDate] = useState<Date | undefined>(new Date('01/01/2021'));
  const [endDate, setEndDate] = useState(add(startDate || new Date(), { days: 4 }));

  return (
    <IntlProvider locale="en">
      <Flexbox container gap={2}>
        <Flexbox item>
          <Button onClick={() => setStartDate(add(startDate || new Date(), { days: 1 }))}>
            Next date
          </Button>
        </Flexbox>
        <Flexbox item>
          <Button onClick={() => setEndDate(add(endDate, { days: 1 }))}>Next end date</Button>
        </Flexbox>
      </Flexbox>
      <DateRangePicker
        id="controlled"
        label="Controlled"
        selectedDate={startDate}
        selectedEndDate={endDate}
        onChange={(selectedDate, selectedEndDate) => {
          setStartDate(selectedDate);
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
      <DateRangePicker id="disabled-input" label="Disabled input" disabled />;
    </IntlProvider>
  );
};

export const WithErrorMessage = () => {
  return (
    <IntlProvider locale="en">
      <DateRangePicker
        id="with-error-message"
        label="Show error message when typing invalid dates"
        enableDate={(date) => isSameWeek(dateNow, date)}
        onChange={action('onChange')}
        errorMessage="Please choose a valid date"
      />
    </IntlProvider>
  );
};

export const AllowUpdateWhileTyping = () => {
  return (
    <IntlProvider locale="en">
      <DateRangePicker
        id="disabled-input"
        allowDateUpdateOnType
        label="Allow update while typing"
      />
    </IntlProvider>
  );
};

export const FullscreenOnMobile = () => (
  <IntlProvider locale="en">
    <DateRangePicker
      id="fullscreen-on-mobile"
      label="FullscreenOnMobile"
      fullscreenOnMobile
      fullscreenProps={{
        title: 'Select a date',
        confirmButtonLabel: 'OK',
        clearButtonLabel: 'Clear dates',
        fromLabel: 'From',
        toLabel: 'To',
      }}
    />
  </IntlProvider>
);

export const DisallowSingleDayRange = () => (
  <IntlProvider locale="en">
    <DateRangePicker
      id="disallow-single-day-range"
      label="Disallow single day range"
      onChange={action('Range date')}
      allowSingleDayRange={false}
    />
  </IntlProvider>
);

export const WithClearButton = () => (
  <IntlProvider locale="en">
    <DateRangePicker
      id="clear-button"
      label="With clear button"
      showClearButton
      clearButtonLabel="Clear Dates"
    />
  </IntlProvider>
);
