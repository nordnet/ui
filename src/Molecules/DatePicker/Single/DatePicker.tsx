import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import styled, { useTheme } from 'styled-components';
import format from 'date-fns/format';
import { useIntl } from 'react-intl';
import { isBefore, isSameDay, isSameMonth, startOfDay } from 'date-fns';
import {
  Props as SingleDatePickerProps,
  PropsWithFullscreen,
  PropsWithoutFullscreen,
} from './DatePicker.types';

/**
 * Imported separately because when imported in src/index.ts, Input will not have been imported yet and an error will be thrown
 */
import Input from '../../Input';
import { Box, Button, DropdownBubble, Icon, Modal, useMedia } from '../../..';
import { assert, isUndefined } from '../../../common/utils';
import { useOnClickOutside } from '../../../common/Hooks';
import {
  getDateFormat,
  getLocale,
  newDate,
  parseDateString,
  parseDateStrings,
} from '../shared/dateUtils';
import Header from './Header';
import Calendar from './Calendar';
import { DEFAULT_INPUT_WIDTH, RANGE_DATE_PICKER, REGULAR_DATE_PICKER } from '../shared/constants';

const StyledInputText = styled(Input.Text)`
  z-index: 1;
`;

const StyledDropdownBubble = styled(DropdownBubble)`
  max-width: ${({ theme }) => theme.spacing.unit(78)}px;
  z-index: ${({ theme }) => theme.zIndex.overlay};
  top: -10px;

  &:after,
  &:before {
    display: none;
  }
`;

const StyledDropdownBubbleWrapper = styled.div`
  position: absolute;
`;

const isFullscreenMode = (
  props: PropsWithFullscreen | PropsWithoutFullscreen,
  isSmallScreen: boolean | null,
): props is PropsWithFullscreen => Boolean(props.fullscreenOnMobile) && Boolean(isSmallScreen);

const DatePicker = React.forwardRef<HTMLDivElement, SingleDatePickerProps>((props, ref) => {
  const {
    ariaLabelPrevious,
    ariaLabelNext,
    allowDateUpdateOnType = false,
    onChange,
    onBlur,
    label,
    disabled,
    disableDate,
    enableDate,
    id,
    open: openProp = false,
    selectedDate: selectedDateProp,
    selectedEndDate: selectedEndDateProp,
    inputValue: inputValueProp,
    variant = REGULAR_DATE_PICKER,
    width = DEFAULT_INPUT_WIDTH,
    yearSelectLength,
    inputSize,
  } = props;

  assert(Boolean(props.id), `DatePicker: "id" is required.`);

  if (disableDate) {
    assert(
      isUndefined(enableDate),
      `DatePicker: "enableDate" cannot be used at the same time as "disableDate".`,
    );
  }

  const theme = useTheme();
  const { locale } = useIntl();
  const dateFormat = getDateFormat(locale);
  const isSmallScreen = useMedia((t) => t.media.lessThan(t.breakpoints.sm));

  const options = useMemo(
    () => ({
      locale: getLocale(locale),
    }),
    [locale],
  );

  const [open, setOpen] = useState<boolean>(openProp);
  const [viewedDate, setViewedDate] = useState<Date>(
    (selectedDateProp && new Date(selectedDateProp)) || startOfDay(new Date()),
  );
  const [selectedDate, setSelectedDate] = useState<Date | null>(selectedDateProp || null);
  const [selectedEndDate, setSelectedEndDate] = useState<Date | null>(selectedEndDateProp || null);
  const [inputValue, setInputValue] = useState<string>(inputValueProp || '');

  const focusedState = useState<[number | null, number | null]>([null, null]);
  const setFocused = focusedState[1];

  useEffect(() => {
    setOpen(openProp);
  }, [openProp]);

  useEffect(() => {
    if (selectedDateProp) setSelectedDate(selectedDateProp);
    if (selectedEndDateProp) setSelectedEndDate(selectedEndDateProp);
    if (inputValueProp) {
      setInputValue(inputValueProp);
    } else {
      const controlledInputValue = (() => {
        if (variant === REGULAR_DATE_PICKER && selectedDateProp) {
          return format(selectedDateProp, dateFormat, options);
        }
        if (variant === RANGE_DATE_PICKER && selectedDateProp) {
          return !selectedEndDateProp
            ? `${format(selectedDateProp, dateFormat, options)} - `
            : `${format(selectedDateProp, dateFormat, options)} - ${format(
                selectedEndDateProp,
                dateFormat,
                options,
              )}`;
        }
        return '';
      })();

      setInputValue(controlledInputValue);
    }
  }, [dateFormat, inputValueProp, options, selectedDateProp, selectedEndDateProp, variant]);

  useEffect(() => {
    if (!inputValue) {
      setSelectedDate(null);
      setSelectedEndDate(null);
    }
  }, [inputValue]);

  const handleDateClickRegular = useCallback(
    (date: Date) => {
      setInputValue(format(date, dateFormat, options));
      setSelectedDate(date);
      setOpen(false);

      if (onChange) onChange(date);
    },
    [dateFormat, onChange, options],
  );

  const handleDateClickRange = useCallback(
    (date: Date) => {
      const [startDate, endDate] = ((): [Date, Date | null] => {
        if (!selectedDate) return [date, null];

        if (selectedDate && isBefore(date, selectedDate)) return [date, selectedEndDate];
        const swapDate = !selectedEndDate && isBefore(date, selectedDate);
        if (swapDate) return [date, selectedDate];
        if (selectedDate && isSameDay(date, selectedDate)) return [date, null];
        if (selectedDate && selectedEndDate && isSameDay(date, selectedEndDate))
          return [date, null];
        if (selectedDate) return [selectedDate, date];

        return [selectedDate, date];
      })();

      if (endDate && isSameDay(startDate, endDate)) return;
      if (
        selectedDate &&
        isSameDay(startDate, selectedDate) &&
        endDate &&
        selectedEndDate &&
        isSameDay(endDate, selectedEndDate)
      )
        return;

      const rangeDateString = !endDate
        ? `${format(startDate, dateFormat, options)}`
        : `${format(startDate, dateFormat, options)} - ${format(endDate, dateFormat, options)}`;

      setSelectedDate(startDate);
      setSelectedEndDate(endDate);
      setInputValue(rangeDateString);

      if (onChange) onChange(startDate, endDate);
    },
    [selectedDate, dateFormat, options, onChange, selectedEndDate],
  );

  const onDateClick = useCallback(
    (date: Date) => {
      if (date && !isSameMonth(date, viewedDate)) {
        setViewedDate(newDate(date));
        setFocused([null, null]);
      }
      if (variant === REGULAR_DATE_PICKER) handleDateClickRegular(date);
      else handleDateClickRange(date);
    },
    [viewedDate, variant, handleDateClickRegular, handleDateClickRange, setFocused],
  );

  const allowedDate = useCallback(
    (date: Date | null) => {
      if (date && disableDate && disableDate(date)) return null;
      if (date && enableDate && !enableDate(date)) return null;
      return date;
    },
    [disableDate, enableDate],
  );

  const handleInputSubmitRegular = useCallback(
    (dateString: string) => {
      const parsedDate = parseDateString(dateString, locale);
      const date = allowedDate(parsedDate);
      if (!date) return;
      if (selectedDate && isSameDay(date, selectedDate)) return;

      setInputValue(format(date, dateFormat, options));
      setSelectedDate(date);
      setViewedDate(newDate(date));

      if (onBlur) onBlur(date);
      if (onChange) onChange(date);
    },
    [allowedDate, dateFormat, locale, onBlur, onChange, options, selectedDate],
  );

  const handleInputSubmitRange = useCallback(
    (dateString: string) => {
      const [startDateString, endDateString] = dateString.split(' - ');
      const [parsedStartDate, parsedEndDate] = parseDateStrings(
        startDateString,
        endDateString,
        locale,
      );
      const [startDate, endDate] = [allowedDate(parsedStartDate), allowedDate(parsedEndDate)];

      if (startDate && !endDate) {
        const selectedDateReselected = selectedDate && isSameDay(startDate, selectedDate);

        if (selectedDateReselected) return;

        setSelectedDate(startDate);
        setSelectedEndDate(endDate);
        setViewedDate(newDate(startDate));

        if (onChange) onChange(startDate, endDate);
      } else if (startDate && endDate) {
        const selectedDatesReselected =
          selectedDate &&
          selectedEndDate &&
          isSameDay(startDate, selectedDate) &&
          isSameDay(endDate, selectedEndDate);

        if (isSameDay(startDate, endDate)) return;
        if (selectedDatesReselected) return;

        const rangeDateString = `${format(startDate, dateFormat, options)} - ${format(
          endDate,
          dateFormat,
          options,
        )}`;

        setSelectedDate(startDate);
        setSelectedEndDate(endDate);
        setViewedDate(newDate(endDate));

        setInputValue(rangeDateString);

        if (onChange) onChange(startDate, endDate);
      }
    },
    [allowedDate, dateFormat, locale, onChange, options, selectedDate, selectedEndDate],
  );

  const handleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const { value } = event.target as HTMLInputElement;

    switch (event.key) {
      case 'ArrowUp':
      case 'ArrowRight':
      case 'ArrowDown':
      case 'ArrowLeft':
        if (!inputValue) setFocused([0, 0]);
        break;

      case 'Enter':
        if (variant === RANGE_DATE_PICKER) handleInputSubmitRange(value);
        else handleInputSubmitRegular(value);
        break;

      default:
        break;
    }
  };

  const handleInputOnFocus = useCallback(() => setOpen(true), [setOpen]);

  const handleInputOnChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;

      if (variant === REGULAR_DATE_PICKER && allowDateUpdateOnType) handleInputSubmitRegular(value);
      if (variant === RANGE_DATE_PICKER && allowDateUpdateOnType) handleInputSubmitRange(value);
      setInputValue(value);
    },
    [handleInputSubmitRange, handleInputSubmitRegular, allowDateUpdateOnType, variant],
  );

  const handleInputOnBlur = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;

      if (variant === REGULAR_DATE_PICKER) handleInputSubmitRegular(value);
      if (variant === RANGE_DATE_PICKER) handleInputSubmitRange(value);
    },
    [handleInputSubmitRange, handleInputSubmitRegular, variant],
  );

  const onMonthChange = useCallback(
    (index: number) => {
      viewedDate.setMonth(index);
      setViewedDate(newDate(viewedDate));
    },
    [viewedDate, setViewedDate],
  );

  const onYearChange = useCallback(
    (year: number) => {
      viewedDate.setFullYear(year);
      setViewedDate(newDate(viewedDate));
    },
    [viewedDate, setViewedDate],
  );

  const datepicker = (
    <>
      <Header
        ariaLabelPrevious={ariaLabelPrevious}
        ariaLabelNext={ariaLabelNext}
        id={id}
        viewedDate={viewedDate}
        locale={locale}
        onMonthChange={onMonthChange}
        onYearChange={onYearChange}
        yearSelectLength={yearSelectLength}
      />
      <Calendar
        disableDate={disableDate}
        enableDate={enableDate}
        viewedDate={viewedDate}
        setViewedDate={setViewedDate}
        locale={locale}
        onClick={onDateClick}
        selectedDate={selectedDate as Date}
        selectedEndDate={selectedEndDate as Date}
        focusedState={focusedState}
      />
    </>
  );

  const inputRightAddon = <Icon.CalendarTwoRows size={6} />;

  const selfRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(selfRef, () => {
    if (!isFullscreenMode(props, isSmallScreen)) {
      setFocused([null, null]);
      setOpen(false);
    }
  });

  const onClose = useCallback(() => setOpen(false), []);

  return (
    <div ref={(ref || selfRef) as React.Ref<HTMLDivElement>}>
      <StyledInputText
        size={inputSize}
        label={label}
        disabled={disabled}
        id={id}
        data-testid="datepicker-input"
        placeholder={
          variant === REGULAR_DATE_PICKER
            ? dateFormat.toLowerCase()
            : `${dateFormat.toLowerCase()} - ${dateFormat.toLowerCase()}`
        }
        value={inputValue}
        rightAddon={inputRightAddon}
        onChange={handleInputOnChange}
        onKeyDown={handleInputKeyDown}
        onFocus={handleInputOnFocus}
        onBlur={handleInputOnBlur}
        width={typeof width === 'string' ? width : `${theme.spacing.unit(width)}px`}
        autoComplete="off"
      />
      {open && !isFullscreenMode(props, isSmallScreen) && (
        <StyledDropdownBubbleWrapper data-testid="styled-dropdown-bubble-wrapper">
          <StyledDropdownBubble>
            <Box
              my={3}
              mx={2}
              onBlur={() => {
                setFocused([null, null]);
              }}
            >
              {datepicker}
            </Box>
          </StyledDropdownBubble>
        </StyledDropdownBubbleWrapper>
      )}
      {open && isFullscreenMode(props, isSmallScreen) && (
        <Modal
          title={props.fullscreenProps.title}
          open={open}
          onClose={onClose}
          fullScreenMobile
          footer={
            <>
              <Box py={5}>
                <Button
                  variant="neutral"
                  color={(p) => p.color.cta}
                  onClick={() => setInputValue('')}
                >
                  {props.fullscreenProps.clearButtonLabel}
                </Button>
              </Box>
              <Button onClick={onClose} size="l" fullWidth>
                {props.fullscreenProps.closeButtonLabel}
              </Button>
            </>
          }
        >
          {datepicker}
        </Modal>
      )}
    </div>
  );
});

export default DatePicker;
