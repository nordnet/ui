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
import { getDateFormat, getLocale, parseDateString } from '../../shared/dateUtils';
import { ClearableProps as Props } from '../../shared/hooks/useDatePicker.types';
import { INPUT_ID_START, INPUT_ID_RANGE } from '../../shared/constants';

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

export const useDatePickerClearable = ({
  id,
  selectedDateProp,
  enableDate,
  disableDate,
  onChange,
  onBlur,
  allowDateUpdateOnType,
  allowSingleDayRange = true,
  noOfMonthsInCalendarView: dateRange = 1,
}: Props) => {
  const { locale } = useIntl();
  const [selectedDate, setSelectedDate] = useState<Date | null>(selectedDateProp || null);
  const [invalidDate, setInvalidDate] = useState(false);

  const [inputValue, setInputValue] = useState<string>(
    formatInputValue(selectedDate, getDateFormat(locale), getLocale(locale)),
  );

  const [viewedDate, setViewedDate] = useState<Date>(
    setDate((selectedDateProp && new Date(selectedDateProp)) || startOfDay(new Date()), 1),
  );

  const previousInputValue = usePrevious(inputValue);

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
    if (previousInputValue && !inputValue) {
      setSelectedDate(null);
    }

    setInvalidDate(false);
  }, [inputValue, previousInputValue]);

  const allowedDate = useCallback(
    (date: Date | null) => {
      if (date && disableDate && disableDate(date)) {
        setInvalidDate(true);
        return null;
      }

      if (date && enableDate && !enableDate(date)) {
        setInvalidDate(true);
        return null;
      }

      return date;
    },
    [disableDate, enableDate],
  );

  const handleDateClick = useCallback(
    (date: Date) => {
      const [startDate] = handleSelectDate(date, selectedDate, null, allowSingleDayRange, false);

      if (selectedDate && isSameDay(startDate, selectedDate)) return;

      const dateString = formatInputValue(startDate, getDateFormat(locale), getLocale(locale));
      setSelectedDate(startDate);
      setInputValue(dateString);

      if (onChange) onChange(startDate);
    },
    [selectedDate, allowSingleDayRange, locale, onChange],
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
    ([startDateValue = inputValue] = []) => {
      const [parsedStartDate] = [parseDateString(startDateValue, locale)];

      const [startDate] = [allowedDate(parsedStartDate)];

      if (startDate) {
        setSelectedDate(startDate);

        if (
          startDate &&
          !isWithinInterval(startDate, {
            start: viewedDate,
            end: subMilliseconds(addMonths(viewedDate, dateRange), 1),
          })
        ) {
          setViewedDate(setDate(startDate, 1));
        }

        const dateString = formatInputValue(startDate, getDateFormat(locale), getLocale(locale));

        setInputValue(dateString);
        if (onChange) onChange(startDate);
        if (onBlur) onBlur(startDate);
      }
    },
    [inputValue, locale, allowedDate, viewedDate, dateRange, onChange, onBlur],
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

      // When input is cleared manually (value === ''), we update DatePicker's internal state
      if (value === '' && onChange) {
        setInputValue(value);
        onChange(undefined);
        return;
      }

      // @ts-ignore
      const assignedValues: [string?] = (() => {
        if (elementId === INPUT_ID_START(id)) {
          setInputValue(value);
          return [value];
        }

        if (elementId === INPUT_ID_RANGE(id)) {
          const [startDateValue] = value.split('-').map((v) => v.trim());
          setInputValue(startDateValue);

          return [startDateValue];
        }
        setInputValue(value);
        return [value];
      })();

      if (allowDateUpdateOnType) {
        handleInputSubmit(assignedValues);
      }
    },
    [allowDateUpdateOnType, handleInputSubmit, id, onChange],
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
    // setInputValueEnd('');
  }, []);

  return {
    selectedDate,
    inputValue,
    handleInputKeyDown,
    handleInputOnChange,
    handleInputOnBlur,
    onMonthChange,
    onYearChange,
    onDateClick,
    viewedDate,
    clearDate,
    invalidDate,
  };
};
