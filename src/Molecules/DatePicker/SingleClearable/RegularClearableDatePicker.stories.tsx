import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import { add, format } from 'date-fns';
import ClearableDatePicker from '.';
import { Box, Button, Flexbox, Typography } from '../../..';

export default {
  title: 'Molecules / DatePicker / Clearable DatePicker ',
  parameters: {
    component: ClearableDatePicker,
  },
};

export const Controlled = () => {
  const [date, setDate] = useState<Date | undefined>(new Date('01/01/2021'));

  return (
    <>
      <Button onClick={() => setDate(add(date || new Date('01/01/2021'), { days: 1 }))}>
        Next date
      </Button>
      <ClearableDatePicker
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

export const ControlledWithClearStateByTyping = () => {
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
      <ClearableDatePicker
        id="controlled"
        label="Label"
        selectedDate={date}
        onChange={(selectedDate) => {
          setDate(selectedDate);
          action('onChange');
        }}
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
      <ClearableDatePicker
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

export const ControlledWithClearStateWithTypingAndButton = () => {
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
      <ClearableDatePicker
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

export const FullscreenOnMobileWithClearStateDate = () => {
  const [date, setDate] = useState<Date | undefined>(undefined);

  const clearDateState = () => {
    setDate(undefined);
  };

  const formattedDate = date ? format(date, 'dd/MM/yyyy') : 'no date selected';

  return (
    <Flexbox container direction="column" gap={4}>
      <Typography>Local state date: {formattedDate}</Typography>

      <ClearableDatePicker
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
