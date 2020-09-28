import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import parseISO from 'date-fns/parseISO';
import format from 'date-fns/format';
import { Props } from './Datepicker.types';
import { Box, Flexbox, Input, Icon, DropdownBubble } from '../..';
import { useOnClickOutside } from '../../common/Hooks';
import { newDate, getLocale, isValid } from './shared/dateUtils';
import Header from './Header';
import Calendar from './Calendar';

const StyledInputText = styled(Input.Text)`
  z-index: 1;
`;

const StyledDropdownBubble = styled(DropdownBubble)`
  max-width: 331px;
  margin-top: -11px;
  &:after,
  &:before {
    display: none;
  }
`;

export const Datepicker = (React.forwardRef<HTMLDivElement, Props>(
  ({ onChange, label, locale = 'en', dateFormat = 'dd/MM/yyyy', disabled, width }, ref) => {
    const opts = {
      locale: getLocale(locale),
    };

    const [open, setOpen] = useState(true);
    const [now, setNow] = useState<Date>(newDate());
    const [selectedDate, setSelectedDate] = useState<Date>();
    const selectedDateFormatted = selectedDate ? format(selectedDate, dateFormat, opts) : '';

    const handleOnDateCliked = (date: Date) => {
      setSelectedDate(date);

      if (onChange) {
        onChange(date);
      }
    };

    const handleOnMonthChange = (index: number) => {
      now.setMonth(index);
      setNow(newDate(now));
    };

    const handleOnYearChange = (year: number) => {
      now.setFullYear(year);
      setNow(newDate(now));
    };

    const handleInputOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const date = parseISO(event.target.value);
      if (isValid(date)) {
        setSelectedDate(date);
      }
    };

    const handleInputOnFocus = () => setOpen(true);

    const datepicker = (
      <Box m={3}>
        <Header
          now={now}
          locale={locale}
          onMonthChange={handleOnMonthChange}
          onYearChange={handleOnYearChange}
        />
        <Calendar
          now={now}
          locale={locale}
          onClick={handleOnDateCliked}
          selectedDate={selectedDate}
        />
      </Box>
    );

    const inputLeftAddon = open ? <Icon.CrossThin size={3} /> : null;
    const inputRightAddon = <Icon.Calendar size={4} />;

    const datepickerRef = useRef<HTMLDivElement>(null);
    useOnClickOutside(datepickerRef, () => setOpen(false));

    return (
      <div ref={ref as React.Ref<HTMLDivElement>}>
        <Flexbox container>
          <StyledInputText
            label={label}
            disabled={disabled}
            id="datepicker-date"
            placeholder={dateFormat.toLowerCase()}
            value={selectedDateFormatted}
            leftAddon={inputLeftAddon}
            rightAddon={inputRightAddon}
            onChange={handleInputOnChange}
            onFocus={handleInputOnFocus}
            width={width}
          />
        </Flexbox>
        {open ? (
          <StyledDropdownBubble ref={datepickerRef}>{datepicker}</StyledDropdownBubble>
        ) : null}
      </div>
    );
  },
) as any) as React.FC<Props> & {};
