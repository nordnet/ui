import React from 'react';
import { Box } from '../..';
import Timeline from './Timeline';

export default {
  title: 'Molecules / Timeline',
  parameters: {
    component: Timeline,
  },
};

export const Default = () => {
  return (
    <Box px={10}>
      <Timeline
        steps={[
          { text: 'Newest', date: new Date(2020, 6, 3) },
          { text: 'Kinda new', date: new Date(2020, 3, 1), status: 'FAILURE' },
          { text: 'Old', date: new Date(2020, 2, 1), status: 'ACTIVE' },
        ]}
      />
    </Box>
  );
};

export const SingleElement = () => {
  return (
    <Box px={10}>
      <Timeline steps={[{ text: 'Single element. So lonely 😭', date: new Date(2020, 6, 3) }]} />
    </Box>
  );
};

export const DifferentHeights = () => {
  return (
    <Box px={10}>
      <Timeline
        steps={[
          { text: <Box py={3}>Newest</Box>, date: new Date(2020, 6, 3) },
          { text: 'Kinda new', date: new Date(2020, 3, 1) },
          { text: <Box py={4}>Kinda old</Box>, date: new Date(2020, 1, 1), status: 'FAILURE' },
          { text: <Box py={5}>Oldest</Box>, date: new Date(2020, 0, 1), status: 'ACTIVE' },
        ]}
      />
    </Box>
  );
};

export const WithButton = () => {
  /* eslint-disable-next-line no-alert */
  const button = { label: 'Click me', onClick: () => alert('Tihi that tickles') };
  return (
    <Box px={10}>
      <Timeline
        steps={[
          { text: 'Newest', date: new Date(2020, 6, 3) },
          { text: 'Old', date: new Date(2020, 5, 1), status: 'ACTIVE', button },
        ]}
      />
    </Box>
  );
};
