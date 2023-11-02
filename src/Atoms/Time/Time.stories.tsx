import React from 'react';
import { Time } from '../..';

export default {
  title: 'Atoms / Time',
  parameters: {
    component: Time,
  },
};

export const time = {
  render: () => {
    return <Time value={1554824654} />;
  },

  name: 'Time ',
};

export const invalidValueStory = {
  render: () => {
    return <Time value={null} />;
  },

  name: 'Invalid value',
};

export const usesCustomSymbolForInvalidValue = {
  render: () => {
    return <Time value={null} invalidValue="X" />;
  },

  name: 'Uses custom symbol for invalid value',
};
