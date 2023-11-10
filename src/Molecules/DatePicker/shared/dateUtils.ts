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
import {
  addWeeks,
  differenceInCalendarDays,
  differenceInCalendarWeeks,
  isMatch,
  parse,
} from 'date-fns';
import { capitalize } from './textUtils';

type Options = {
  locale: Locale;
};

const dateFormat = {
  sv: 'yyyy-MM-dd',
  nb: 'd.M.yyyy',
  da: 'd.M.yyyy',
  fi: 'd.M.yyyy',
  en: 'dd/MM/yyyy',
};

const locales: { [key: string]: Locale } = {
  sv: svLocale,
  nb: nbLocale,
  da: daLocale,
  fi: fiLocale,
  en: enLocale,
};

export const getLocale = (locale: string = ''): Locale => {
  if (locales[locale.split('-')[0]]) {
    return locales[locale.split('-')[0]];
  }

  return locales.en;
};

export const getDateFormat = (locale: string = ''): string => {
  if (dateFormat[locale.split('-')[0]]) {
    return dateFormat[locale.split('-')[0]];
  }

  return dateFormat.en;
};

export const isValid = (date: Date) => {
  return isValidDate(date) && isAfter(date, new Date('1/1/1000'));
};

function isString(value: any): value is string {
  return typeof value === 'string' || value instanceof String;
}

export const newDate = (value: string | Date | number = new Date()): Date => {
  const d = isString(value) ? parseISO(value) : toDate(value);
  return isValid(d) ? d : new Date();
};

export const parseDateString = (dateString: string, locale?: string): null | Date => {
  if (!isMatch(dateString, getDateFormat(locale), { locale: getLocale(locale) })) return null;

  const date = parse(dateString, getDateFormat(locale), newDate());

  if (!isValid(date)) return null;

  return date;
};

export const parseDateStrings: (
  startDateString: string,
  endDateString: string,
  locale?: string,
) => [Date | null, Date | null] = (startDateString, endDateString, locale) => {
  const parsedStartDate = parseDateString(startDateString, locale);
  const parsedEndDate = parseDateString(endDateString, locale);

  if (parsedStartDate && parsedEndDate)
    return parsedStartDate < parsedEndDate
      ? [parsedStartDate, parsedEndDate]
      : [parsedEndDate, parsedStartDate];

  return [parsedStartDate, parsedEndDate];
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
    weekStartsOn: 1,
  });

  calendar.weekDays = [...Array(7).keys()]?.map((w) =>
    capitalize(
      format(addDays(firstCalDay, w), 'EEE', {
        locale: opts?.locale,
      }),
    ),
  );

  calendar.dates = [...Array(6).keys()]?.map(
    (w) => [...Array(7).keys()]?.map((d) => addDays(firstCalDay, w * 7 + d)),
  );

  return calendar;
};

export const getCalendarIndex = (now: Date, calendar: CalendarType): [number, number] => {
  // the difference in weeks from [0][0] will be the week index.
  // the difference in days from [0+weekIndex][0] will be the days index.
  const calendarStartDate = calendar.dates[0][0];
  const weekIndex = differenceInCalendarWeeks(now, calendarStartDate, { weekStartsOn: 1 });
  const dayIndex = differenceInCalendarDays(now, addWeeks(calendarStartDate, weekIndex));
  return [weekIndex, dayIndex];
};
