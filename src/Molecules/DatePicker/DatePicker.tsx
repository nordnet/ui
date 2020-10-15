import React, { useRef, useState, useCallback } from 'react';
import styled from 'styled-components';
import parse from 'date-fns/parse';
import format from 'date-fns/format';
import isMatch from 'date-fns/isMatch';
import { useIntl } from 'react-intl';
import { Props } from './DatePicker.types';

/**
 * Imported seperately because when imported in src/index.ts, Input will not have been imported yet and an error will be thrown
 */
import Input from '../Input';
import { Box, Icon, DropdownBubble } from '../..';
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
  top: -11px;
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
    width,
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

  const [open, setOpen] = useState(false);
  const [now, setNow] = useState<Date>(newDate());
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [inputValue, setInputValue] = useState('');

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
      now.setMonth(index);
      setNow(newDate(now));
    },
    [now, setNow],
  );

  const handleOnYearChange = useCallback(
    (year: number) => {
      now.setFullYear(year);
      setNow(newDate(now));
    },
    [now, setNow],
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
      setNow(newDate(date));

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
        now={now}
        locale={locale}
        onMonthChange={handleOnMonthChange}
        onYearChange={handleOnYearChange}
      />
      <Calendar
        disableDate={disableDate}
        enableDate={enableDate}
        now={now}
        locale={locale}
        onClick={handleOnDateCliked}
        selectedDate={selectedDate as Date}
      />
    </Box>
  );

  const inputLeftAddon = open ? <Icon.CrossThin size={3} /> : null;
  const inputRightAddon = <Icon.CalendarTwoRows size={6} />;

  const datepickerRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(datepickerRef, () => setOpen(false));

  return (
    <div ref={ref as React.Ref<HTMLDivElement>}>
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
        width={width}
      />
      {open ? (
        <StyledDropdownBubbleWrapper>
          <StyledDropdownBubble ref={datepickerRef}>{datepicker}</StyledDropdownBubble>
        </StyledDropdownBubbleWrapper>
      ) : null}
    </div>
  );
}) as any) as React.FC<Props> & {};
