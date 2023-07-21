import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import { add, isSameWeek, format } from 'date-fns';
import DatePicker from '.';
import { Box, Button, Flexbox, Typography } from '../../..';

export default {
  title: 'Molecules / DatePicker / Regular DatePicker ',
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
  const [date, setDate] = useState<Date | undefined>(new Date('01/01/2021'));

  return (
    <>
      <Button onClick={() => setDate(add(date || new Date('01/01/2021'), { days: 1 }))}>
        Next date
      </Button>
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

export const ControlledWithClearState = () => {
  const [date, setDate] = useState<Date | undefined>(new Date('01/01/2021'));
  const formattedDate = date ? format(date, 'dd/MM/yyyy') : 'no date selected';

  return (
    <Flexbox container direction="column" gap={4}>
      <Typography>Local state date: {formattedDate}</Typography>
      <Box>
        <Button onClick={() => setDate(add(date || new Date('01/01/2021'), { days: 1 }))}>
          Next date
        </Button>
      </Box>
      <DatePicker
        id="controlled"
        label="Label"
        selectedDate={date}
        onChange={(selectedDate) => {
          setDate(selectedDate);
          action('onChange');
        }}
        allowDateClearOnType
      />
    </Flexbox>
  );
};

export const ControlledWithClearStateWithButton = () => {
  const [date, setDate] = useState<Date | undefined>(new Date('01/01/2021'));

  const clearDateState = () => {
    setDate(undefined);
  };

  const formattedDate = date ? format(date, 'dd/MM/yyyy') : 'no date selected';

  return (
    <Flexbox container direction="column" gap={4}>
      <Typography>Local state date: {formattedDate}</Typography>
      <Box>
        <Button onClick={() => setDate(add(date || new Date('01/01/2021'), { days: 1 }))}>
          Next date
        </Button>
      </Box>
      <DatePicker
        id="controlled"
        label="Label"
        selectedDate={date}
        onChange={(selectedDate) => {
          setDate(selectedDate);
          action('onChange');
        }}
        clearDateButton={{
          clearButtonLabel: 'Clear date and state',
          onClearDate: clearDateState,
        }}
      />
    </Flexbox>
  );
};

export const DisabledInput = () => {
  return <DatePicker id="disabled-input" label="Label" disabled />;
};

export const WithErrorMessage = () => {
  return (
    <DatePicker
      id="with-error-message"
      label="Show error message when typing invalid dates"
      enableDate={(date) => isSameWeek(dateNow, date)}
      onChange={action('onChange')}
      errorMessage="Please choose a valid date"
    />
  );
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
      confirmButtonLabel: 'OK',
      clearButtonLabel: 'Clear date',
      dateLabel: 'Pick a date',
    }}
  />
);

export const FullscreenOnMobileWithClearStateDate = () => {
  const [date, setDate] = useState<Date | undefined>(undefined);

  const clearDateState = () => {
    setDate(undefined);
  };

  const formattedDate = date ? format(date, 'dd/MM/yyyy') : 'no date selected';

  return (
    <Flexbox container direction="column" gap={4}>
      <Typography>Local state date: {formattedDate}</Typography>

      <DatePicker
        id="date-picker-with-fullscreen-on-mobile-behavior"
        label="Fullscreen on mobile"
        onChange={(selectedDate) => {
          setDate(selectedDate);
          action('onChange regular');
        }}
        fullscreenOnMobile
        fullscreenProps={{
          title: 'Select a date',
          confirmButtonLabel: 'OK',
          clearButtonLabel: 'Clear date and state',
          dateLabel: 'Pick a date',
          onClearDate: clearDateState,
        }}
      />
    </Flexbox>
  );
};
