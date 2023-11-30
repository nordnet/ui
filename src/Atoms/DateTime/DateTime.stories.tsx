import React from 'react';
import { IntlProvider } from 'react-intl';
import DateTime from '.';

export default {
  title: 'Atoms / DateTime',
  parameters: {
    component: DateTime,
  },
};

export const DateTimeStory = {
  render: () => {
    return (
      <IntlProvider locale="en">
        <DateTime value={1554824654} />
      </IntlProvider>
    );
  },

  name: 'DateTime',
};

export const WithDateOnly = {
  render: () => {
    return (
      <IntlProvider locale="en">
        <DateTime onlyDate value={1554824654} />
      </IntlProvider>
    );
  },

  name: 'With date only',
};

export const WithDateTimeAsIso8601String = {
  render: () => {
    return (
      <IntlProvider locale="en">
        <DateTime value="1999-11-11T11:11+0100" />
      </IntlProvider>
    );
  },

  name: 'With date time as ISO 8601 string',
};

export const WithDateAsIso8601String = {
  render: () => {
    return (
      <IntlProvider locale="en">
        <DateTime onlyDate value="1999-11-11" />
      </IntlProvider>
    );
  },

  name: 'With date as ISO 8601 string',
};

export const WithCustomFormattingOptions = {
  render: () => {
    type FormatDateOptionYear = 'numeric';
    type FormatDateOptionMonth = 'short';
    type FormatDateOptionDay = 'numeric';
    type FormatDateOptionWeekDay = 'short';

    const options = {
      year: 'numeric' as FormatDateOptionYear,
      month: 'short' as FormatDateOptionMonth,
      day: 'numeric' as FormatDateOptionDay,
      weekday: 'short' as FormatDateOptionWeekDay,
    };

    return (
      <IntlProvider locale="en">
        <DateTime value="1999-11-11" options={options} />
      </IntlProvider>
    );
  },

  name: 'With custom formatting options',
};

export const InvalidValueStory = {
  render: () => {
    return (
      <IntlProvider locale="en">
        <DateTime value={null} />
      </IntlProvider>
    );
  },

  name: 'Invalid value',
};

export const UsesCustomSymbolForInvalidValue = {
  render: () => {
    return (
      <IntlProvider locale="en">
        <DateTime value={null} invalidValue="X" />
      </IntlProvider>
    );
  },

  name: 'Uses custom symbol for invalid value',
};
