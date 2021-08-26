import React from 'react';
import { action } from '@storybook/addon-actions';
import DatePicker from './DatePicker';
import { DateRangePicker } from './Range';
import { DoubleDatePickerDisclaimer } from './Double/DoubleDatePickerDisclaimer';
import { Typography, Box } from '../..';

export default {
  title: 'Molecules / DatePicker',
  parameters: {
    component: DatePicker,
  },
};

export const All = () => {
  return (
    <>
      <DatePicker id="regular-datepicker" label="Regular" onChange={action('onChange regular')} />
      <DateRangePicker id="range-datepicker" label="Range" onChange={action('onChange range')} />
      <Box mt={2}>
        <Typography type="title3">Double</Typography>
      </Box>
      <DoubleDatePickerDisclaimer>
        <DatePicker
          id="double-datepicker"
          labelFrom="Date from"
          labelTo="Date to"
          onChange={action('onChange double')}
          variant="DOUBLE"
        />
      </DoubleDatePickerDisclaimer>
    </>
  );
};
