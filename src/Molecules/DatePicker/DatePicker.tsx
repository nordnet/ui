import React, { useRef, useState, useCallback, useEffect, SyntheticEvent } from 'react';
import styled, { useTheme } from 'styled-components';
import parse from 'date-fns/parse';
import format from 'date-fns/format';
import isMatch from 'date-fns/isMatch';
import { useIntl } from 'react-intl';
import { Props } from './DatePicker.types';

/**
 * Imported seperately because when imported in src/index.ts, Input will not have been imported yet and an error will be thrown
 */
import Input from '../Input';
import { Box, Icon, DropdownBubble, Button } from '../..';
import { assert, isUndefined } from '../../common/utils';
import { useOnClickOutside } from '../../common/Hooks';
import { newDate, getLocale, isValid, getDateFormat } from './shared/dateUtils';
import Header from './Header';
import Calendar from './Calendar';

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

export const DatePicker = (React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const {
    ariaLabelPrevious,
    ariaLabelNext,
    onChange,
    label,
    disabled,
    disableDate,
    enableDate,
    id,
    open: openProp = false,
    selectedDate: selectedDateProp,
    width = 78,
  } = props;

  assert(Boolean(props.id), `DatePicker: "id" is required.`);

  if (disableDate) {
    assert(
      isUndefined(enableDate),
      `DatePicker: "enableDate" cannot be used at the same time as "disableDate".`,
    );
  }

  if (enableDate) {
    assert(
      isUndefined(disableDate),
      `DatePicker: "disableDate" cannot be used at the same time as "enableDate".`,
    );
  }

  const { locale } = useIntl();

  const opts = {
    locale: getLocale(locale),
  };

  const dateFormat = getDateFormat(locale);

  const initialInputValue = selectedDateProp ? format(selectedDateProp, dateFormat, opts) : '';

  const [open, setOpen] = useState<boolean>(openProp);
  const [viewedDate, setViewedDate] = useState<Date>(selectedDateProp || newDate());
  const [selectedDate, setSelectedDate] = useState<Date>(selectedDateProp || viewedDate);
  const [inputValue, setInputValue] = useState<string>(initialInputValue);

  const theme = useTheme();

  useEffect(() => {
    setOpen(openProp);
  }, [openProp]);

  const handleOnDateCliked = useCallback(
    (date: Date) => {
      setInputValue(format(date, dateFormat, opts));
      setSelectedDate(date);

      if (onChange) {
        onChange(date);
      }

      setOpen(false);
    },
    [dateFormat, opts, onChange, setSelectedDate, setOpen],
  );

  const handleOnMonthChange = useCallback(
    (index: number) => {
      viewedDate.setMonth(index);
      setViewedDate(newDate(viewedDate));
    },
    [viewedDate, setViewedDate],
  );

  const handleOnYearChange = useCallback(
    (year: number) => {
      viewedDate.setFullYear(year);
      setViewedDate(newDate(viewedDate));
    },
    [viewedDate, setViewedDate],
  );

  const handleInputOnChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;
      setInputValue(value);

      if (!isMatch(value, dateFormat, opts)) {
        return;
      }

      const date = parse(value, dateFormat, newDate());
      if (!isValid(date)) {
        return;
      }

      setInputValue(format(date, dateFormat, opts));
      setSelectedDate(date);
      setViewedDate(newDate(date));

      if (onChange) {
        onChange(date);
      }
    },
    [opts, dateFormat, onChange, setSelectedDate, setInputValue],
  );

  const handleInputOnFocus = useCallback(() => setOpen(true), [setOpen]);

  const datepicker = (
    <Box my={3} mx={2}>
      <Header
        ariaLabelPrevious={ariaLabelPrevious}
        ariaLabelNext={ariaLabelNext}
        id={id}
        viewedDate={viewedDate}
        locale={locale}
        onMonthChange={handleOnMonthChange}
        onYearChange={handleOnYearChange}
      />
      <Calendar
        disableDate={disableDate}
        enableDate={enableDate}
        viewedDate={viewedDate}
        locale={locale}
        onClick={handleOnDateCliked}
        selectedDate={selectedDate as Date}
      />
    </Box>
  );

  const inputLeftAddon = open ? (
    <Button
      variant="neutral"
      type="button"
      onClick={(e: SyntheticEvent) => {
        // prevent default to avoid triggering focus on the input element
        e.preventDefault();
        setOpen(false);
      }}
    >
      <Icon.CrossThin size={3} />
    </Button>
  ) : null;
  const inputRightAddon = <Icon.CalendarTwoRows size={6} />;

  const selfRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(selfRef, () => setOpen(false));

  return (
    <div ref={(ref || selfRef) as React.Ref<HTMLDivElement>}>
      <StyledInputText
        label={label}
        disabled={disabled}
        id={id}
        data-testid="datepicker-input"
        placeholder={dateFormat.toLowerCase()}
        value={inputValue}
        leftAddon={inputLeftAddon}
        rightAddon={inputRightAddon}
        onChange={handleInputOnChange}
        onFocus={handleInputOnFocus}
        width={width ? `${theme.spacing.unit(width)}px` : ''}
        autoComplete="off"
      />
      {open ? (
        <StyledDropdownBubbleWrapper>
          <StyledDropdownBubble>{datepicker}</StyledDropdownBubble>
        </StyledDropdownBubbleWrapper>
      ) : null}
    </div>
  );
}) as any) as React.FC<Props> & {};
