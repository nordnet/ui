import React, { useCallback, useEffect, useState } from 'react';
import { useIntl } from 'react-intl';
import {
  addMonths,
  isBefore,
  isSameDay,
  isWithinInterval,
  setDate,
  setMonth,
  setYear,
  startOfDay,
  subMilliseconds,
  subMonths,
  format,
} from 'date-fns';
import { usePrevious } from '../../../../common/Hooks';
import { getDateFormat, getLocale, parseDateString } from '../dateUtils';
import { Props } from './useDatePicker.types';
import { INPUT_ID_START, INPUT_ID_END, INPUT_ID_RANGE } from '../constants';

const formatInputValue = (selectedDate: Date | null, dateFormat: string, locale: Locale) => {
  if (selectedDate) {
    return format(selectedDate, dateFormat, { locale });
  }
  return '';
};

const handleSelectDate = (
  date: Date,
  selectedDate: Date | null,
  selectedEndDate: Date | null,
  allowSingleDayRange: boolean,
  isRangePicker: boolean,
): [startDate: Date, endDate: Date | null] => {
  if (!selectedDate || !isRangePicker) return [date, null];

  if (isBefore(date, selectedDate)) return [date, selectedEndDate];
  const swapDate = !selectedEndDate && isBefore(date, selectedDate);
  if (swapDate) return [date, selectedDate];

  if (isSameDay(date, selectedDate)) {
    if (!allowSingleDayRange) {
      return [selectedDate, null];
    }
    return [selectedDate, selectedDate];
  }
  if (selectedEndDate && isSameDay(date, selectedEndDate)) {
    if (!allowSingleDayRange) {
      return [selectedDate, null];
    }
    return [selectedEndDate, selectedEndDate];
  }

  return [selectedDate, date];
};

export const useDatePicker = ({
  id,
  selectedDateProp,
  selectedEndDateProp,
  enableDate,
  disableDate,
  onChange,
  onBlur,
  allowDateUpdateOnType,
  allowSingleDayRange = true,
  noOfMonthsInCalendarView: dateRange = 1,
  isRangePicker = false,
}: Props) => {
  const { locale } = useIntl();
  const [selectedDate, setSelectedDate] = useState<Date | null>(selectedDateProp || null);
  const [selectedEndDate, setSelectedEndDate] = useState<Date | null>(selectedEndDateProp || null);
  const [inputValue, setInputValue] = useState<string>(
    formatInputValue(selectedDate, getDateFormat(locale), getLocale(locale)),
  );
  const [inputValueEnd, setInputValueEnd] = useState<string>(
    formatInputValue(selectedEndDate, getDateFormat(locale), getLocale(locale)),
  );
  const [viewedDate, setViewedDate] = useState<Date>(
    setDate((selectedDateProp && new Date(selectedDateProp)) || startOfDay(new Date()), 1),
  );

  const previousInputValue = usePrevious(inputValue);
  const previousInputValueEnd = usePrevious(inputValueEnd);

  useEffect(() => {
    if (selectedDateProp) {
      setSelectedDate(selectedDateProp);
      const controlledInputValue = formatInputValue(
        selectedDateProp,
        getDateFormat(locale),
        getLocale(locale),
      );
      setInputValue(controlledInputValue);
      setViewedDate(setDate(selectedDateProp, 1));
    }
  }, [locale, selectedDateProp]);

  useEffect(() => {
    if (selectedEndDateProp) {
      setSelectedEndDate(selectedEndDateProp);
      const controlledInputValueEnd = formatInputValue(
        selectedEndDateProp,
        getDateFormat(locale),
        getLocale(locale),
      );
      setInputValueEnd(controlledInputValueEnd);
    }
  }, [locale, selectedEndDateProp]);

  useEffect(() => {
    if (previousInputValue && !inputValue) {
      setSelectedDate(null);
    }
    if (previousInputValueEnd && !inputValueEnd) {
      setSelectedEndDate(null);
    }
  }, [inputValue, inputValueEnd, previousInputValue, previousInputValueEnd]);

  const allowedDate = useCallback(
    (date: Date | null) => {
      if (date && disableDate && disableDate(date)) return null;
      if (date && enableDate && !enableDate(date)) return null;
      return date;
    },
    [disableDate, enableDate],
  );

  const handleDateClick = useCallback(
    (date: Date) => {
      const [startDate, endDate] = handleSelectDate(
        date,
        selectedDate,
        selectedEndDate,
        allowSingleDayRange,
        isRangePicker,
      );

      if (
        selectedDate &&
        isSameDay(startDate, selectedDate) &&
        endDate &&
        selectedEndDate &&
        isSameDay(endDate, selectedEndDate)
      )
        return;

      const dateString = formatInputValue(startDate, getDateFormat(locale), getLocale(locale));

      const dateStringEnd = formatInputValue(endDate, getDateFormat(locale), getLocale(locale));
      setSelectedDate(startDate);
      setSelectedEndDate(endDate);
      setInputValue(dateString);
      setInputValueEnd(dateStringEnd);

      if (onChange) onChange(startDate, endDate);
    },
    [selectedDate, selectedEndDate, allowSingleDayRange, isRangePicker, locale, onChange],
  );

  const onDateClick = useCallback(
    (date: Date) => {
      if (
        date &&
        !isWithinInterval(date, {
          start: viewedDate,
          end: subMilliseconds(addMonths(viewedDate, dateRange), 1),
        })
      ) {
        const newViewedDate = isBefore(date, viewedDate)
          ? subMonths(viewedDate, 1)
          : addMonths(viewedDate, 1);

        setViewedDate(newViewedDate);
      }
      handleDateClick(date);
    },
    [viewedDate, dateRange, handleDateClick],
  );

  const handleInputSubmit = useCallback(
    ([startDateValue = inputValue, endDateValue = inputValueEnd] = []) => {
      const [parsedStartDate, parsedEndDate] = [
        parseDateString(startDateValue, locale),
        parseDateString(endDateValue, locale),
      ];

      const [startDate, endDate] = [allowedDate(parsedStartDate), allowedDate(parsedEndDate)];
      if (!allowSingleDayRange && startDate && endDate && isSameDay(startDate, endDate)) return;

      if (startDate) {
        const selectedDatesReselected = (() => {
          if (startDate && !endDate) {
            return selectedDate && isSameDay(startDate, selectedDate);
          }
          if (startDate && endDate) {
            return (
              selectedDate &&
              selectedEndDate &&
              isSameDay(startDate, selectedDate) &&
              isSameDay(endDate, selectedEndDate)
            );
          }
          return false;
        })();

        if (selectedDatesReselected) return;

        setSelectedDate(startDate);
        setSelectedEndDate(endDate);

        if (
          startDate &&
          !endDate &&
          !isWithinInterval(startDate, {
            start: viewedDate,
            end: subMilliseconds(addMonths(viewedDate, dateRange), 1),
          })
        ) {
          setViewedDate(setDate(startDate, 1));
        }

        if (
          startDate &&
          endDate &&
          !isWithinInterval(endDate, {
            start: viewedDate,
            end: subMilliseconds(addMonths(viewedDate, dateRange), 1),
          })
        ) {
          setViewedDate(setDate(endDate, 1));
        }

        const dateString = formatInputValue(startDate, getDateFormat(locale), getLocale(locale));
        const dateStringEnd = formatInputValue(endDate, getDateFormat(locale), getLocale(locale));

        setInputValue(dateString);
        setInputValueEnd(dateStringEnd);

        if (onChange) onChange(startDate, endDate);
        if (onBlur) onBlur(startDate, endDate);
      }
    },
    [
      inputValue,
      inputValueEnd,
      locale,
      allowedDate,
      allowSingleDayRange,
      viewedDate,
      dateRange,
      onChange,
      onBlur,
      selectedDate,
      selectedEndDate,
    ],
  );

  const onMonthChange = useCallback(
    (index: number) => {
      setViewedDate(setMonth(viewedDate, index));
    },
    [viewedDate, setViewedDate],
  );

  const onYearChange = useCallback(
    (year: number) => {
      setViewedDate(setYear(viewedDate, year));
    },
    [viewedDate, setViewedDate],
  );

  const handleInputOnChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value, id: elementId } = event.target;
      const assignedValues = (() => {
        if (elementId === INPUT_ID_START(id)) {
          setInputValue(value);
          return [value];
        }
        if (elementId === INPUT_ID_END(id)) {
          setInputValueEnd(value);
          return [undefined, value];
        }

        if (elementId === INPUT_ID_RANGE(id)) {
          const [startDateValue, endDateValue] = value.split('-').map((v) => v.trim());
          setInputValue(startDateValue);
          setInputValueEnd(endDateValue);

          return [startDateValue, endDateValue];
        }
        setInputValue(value);
        return [value];
      })();

      if (allowDateUpdateOnType) {
        handleInputSubmit(assignedValues);
      }
    },
    [allowDateUpdateOnType, handleInputSubmit, id],
  );

  const handleInputOnBlur = useCallback(() => {
    handleInputSubmit();
  }, [handleInputSubmit]);

  const handleInputKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter') handleInputSubmit();
    },
    [handleInputSubmit],
  );

  const clearDate = useCallback(() => {
    setInputValue('');
    setInputValueEnd('');
  }, []);

  return {
    selectedDate,
    selectedEndDate,
    inputValue,
    inputValueEnd,
    handleInputKeyDown,
    handleInputOnChange,
    handleInputOnBlur,
    onMonthChange,
    onYearChange,
    onDateClick,
    viewedDate,
    clearDate,
  };
};
