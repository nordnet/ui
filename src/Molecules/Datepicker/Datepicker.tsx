import React, { useRef, useState, useCallback } from 'react';
import styled from 'styled-components';
import parseISO from 'date-fns/parseISO';
import format from 'date-fns/format';
import { useIntl } from 'react-intl';
import { Props } from './Datepicker.types';
import { Box, Flexbox, Input, Icon, DropdownBubble } from '../..';
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

export const Datepicker = (React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { onChange, label, disabled, disableDate, enableDate, id, width } = props;

  assert(Boolean(props.id), `Datepicker: "id" is required.`);

  if (disableDate) {
    assert(
      isUndefined(enableDate),
      `Datepicker: "enableDate" cannot be used at the same time as "disableDate".`,
    );
  }

  if (enableDate) {
    assert(
      isUndefined(disableDate),
      `Datepicker: "disableDate" cannot be used at the same time as "enableDate".`,
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
  const selectedDateFormatted = selectedDate ? format(selectedDate, dateFormat, opts) : '';

  const handleOnDateCliked = useCallback(
    (date: Date) => {
      setSelectedDate(date);

      if (onChange) {
        onChange(date);
      }

      setOpen(false);
    },
    [onChange, setSelectedDate, setOpen],
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
      const date = parseISO(event.target.value);
      if (isValid(date)) {
        setSelectedDate(date);
      }
    },
    [setSelectedDate],
  );

  const handleInputOnFocus = useCallback(() => setOpen(true), [setOpen]);

  const datepicker = (
    <Box my={3} mx={2}>
      <Header
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
        selectedDate={selectedDate}
      />
    </Box>
  );

  const inputLeftAddon = open ? <Icon.CrossThin size={3} /> : null;
  const inputRightAddon = <Icon.CalendarTwoRows size={6} />;

  const datepickerRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(datepickerRef, () => setOpen(false));

  return (
    <div ref={ref as React.Ref<HTMLDivElement>}>
      <Flexbox container>
        <StyledInputText
          label={label}
          disabled={disabled}
          id={id}
          data-testid="datepicker-input"
          placeholder={dateFormat.toLowerCase()}
          value={selectedDateFormatted}
          leftAddon={inputLeftAddon}
          rightAddon={inputRightAddon}
          onChange={handleInputOnChange}
          onFocus={handleInputOnFocus}
          width={width}
        />
      </Flexbox>
      {open ? <StyledDropdownBubble ref={datepickerRef}>{datepicker}</StyledDropdownBubble> : null}
    </div>
  );
}) as any) as React.FC<Props> & {};
