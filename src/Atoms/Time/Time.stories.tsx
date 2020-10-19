import React from 'react';
import { Time } from '../..';

export default {
  title: 'Atoms / Time',
  parameters: {
    component: Time,
  },
};

export const time = () => {
  return <Time value={1554824654} />;
};

time.story = {
  name: 'Time ',
};

export const invalidValueStory = () => {
  return <Time value={null} />;
};

invalidValueStory.story = {
  name: 'Invalid value',
};

export const usesCustomSymbolForInvalidValue = () => {
  return <Time value={null} invalidValue="X" />;
};

usesCustomSymbolForInvalidValue.story = {
  name: 'Uses custom symbol for invalid value',
};
