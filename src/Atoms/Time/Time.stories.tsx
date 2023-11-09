import React from 'react';
import { Time } from '../..';

export default {
  title: 'Atoms / Time',
  parameters: {
    component: Time,
  },
};

export const Default = {
  render: () => <Time value={1554824654} />,
};

export const InvalidValue = {
  render: () => {
    return <Time value={null} />;
  },
};

export const UsesCustomSymbolForInvalidValue = {
  render: () => {
    return <Time value={null} invalidValue="X" />;
  },
};
