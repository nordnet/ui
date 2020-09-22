import format from 'date-fns/format';
import isAfter from 'date-fns/isAfter';
import isValidDate from 'date-fns/isValid';
import addDays from 'date-fns/addDays';
import toDate from 'date-fns/toDate';
import parseISO from 'date-fns/parseISO';
import startOfWeek from 'date-fns/startOfWeek';
import svLocale from 'date-fns/locale/sv';
import enLocale from 'date-fns/locale/en-US';
import nbLocale from 'date-fns/locale/nb';
import daLocale from 'date-fns/locale/da';
import fiLocale from 'date-fns/locale/fi';

type Options = {
  locale: Locale;
};

const locales: { [key: string]: any } = {
  sv: svLocale,
  nb: nbLocale,
  da: daLocale,
  fi: fiLocale,
  en: enLocale,
};

export const getLocale = (locale: string = ''): any => {
  if (locales[locale]) {
    return locales[locale];
  }

  return locales.en;
};

export const isValid = (date: Date) => {
  return isValidDate(date) && isAfter(date, new Date('1/1/1000'));
};

export const newDate = (value: any = new Date()): Date => {
  const d =
    typeof value === 'string' || value instanceof String
      ? parseISO(value as string)
      : toDate(value);
  return isValid(d) ? d : new Date();
};

export type CalendarType = {
  weekDays: Array<string>;
  dates: Array<Array<Date>>;
};

export const getCalendar = (now: Date, opts?: Options): CalendarType => {
  const calendar: CalendarType = {
    weekDays: [],
    dates: [],
  };

  const firstCalDay = startOfWeek(new Date(now.getFullYear(), now.getMonth(), 0), {
    locale: opts?.locale,
  });

  calendar.weekDays = [...Array(7).keys()].map((w) =>
    format(addDays(firstCalDay, w), 'EEE', {
      locale: opts?.locale,
    }),
  );

  calendar.dates = [...Array(6).keys()].map((w) =>
    [...Array(7).keys()].map((d) => addDays(firstCalDay, w * 7 + d)),
  );

  return calendar;
};
