import React from 'react';

import { Box, Flexbox, Icon, Card } from '../..';
import FilterChip from '.';

export default {
  title: 'DEPRECATED / Molecules / QuickFilter (use FilterChip instead)',
  parameters: {
    component: [FilterChip],
  },
};

export const WithFourFilterChips = () => (
  <Card>
    <Box p={2}>
      <Flexbox container gap={1}>
        <FilterChip icon={<Icon.MonthlySavings16 />} value="1" />{' '}
        <FilterChip icon={<Icon.MonthlySavings16 />} label="&nbsp;" value="1" />{' '}
        <FilterChip icon={<Icon.MonthlySavings16 />} label="label" value="1" />{' '}
        <FilterChip label="Label one next to icon one" value="0" />
      </Flexbox>
    </Box>
  </Card>
);
