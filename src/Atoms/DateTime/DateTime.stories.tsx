import React from 'react';
import DateTime from '.';

export default {
  title: 'Atoms / DateTime',
  parameters: {
    component: DateTime,
  },
};

export const dateTime = {
  render: () => {
    return <DateTime value={1554824654} />;
  },

  name: 'DateTime',
};

export const withDateOnly = {
  render: () => {
    return <DateTime onlyDate value={1554824654} />;
  },

  name: 'With date only',
};

export const withDateTimeAsIso8601String = {
  render: () => {
    return <DateTime value="1999-11-11T11:11+0100" />;
  },

  name: 'With date time as ISO 8601 string',
};

export const withDateAsIso8601String = {
  render: () => {
    return <DateTime onlyDate value="1999-11-11" />;
  },

  name: 'With date as ISO 8601 string',
};

export const withCustomFormattingOptions = {
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

    return <DateTime value="1999-11-11" options={options} />;
  },

  name: 'With custom formatting options',
};

export const invalidValueStory = {
  render: () => {
    return <DateTime value={null} />;
  },

  name: 'Invalid value',
};

export const usesCustomSymbolForInvalidValue = {
  render: () => {
    return <DateTime value={null} invalidValue="X" />;
  },

  name: 'Uses custom symbol for invalid value',
};
