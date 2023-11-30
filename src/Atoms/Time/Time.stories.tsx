import React from 'react';
import { IntlProvider } from 'react-intl';
import { Time } from '../..';

export default {
  title: 'Atoms / Time',
  parameters: {
    component: Time,
  },
};

export const Default = {
  render: () => (
    <IntlProvider locale="en">
      <Time value={1554824654} />
    </IntlProvider>
  ),
};

export const InvalidValue = {
  render: () => {
    return (
      <IntlProvider locale="en">
        <Time value={null} />
      </IntlProvider>
    );
  },
};

export const UsesCustomSymbolForInvalidValue = {
  render: () => {
    return (
      <IntlProvider locale="en">
        <Time value={null} invalidValue="X" />
      </IntlProvider>
    );
  },
};
