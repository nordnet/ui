import React, { useRef } from 'react';
import styled from 'styled-components';
import * as R from 'ramda';
import { isSameDay, isSameMonth, isWithinInterval } from 'date-fns';
import { Box, Flexbox, Typography } from '../../../..';
import { getCalendar, getLocale } from '../../shared/dateUtils';
import { Props } from './Calendar.types';
import CalendarDay from '../../shared/components/CalendarDay';
import { useFocusedDate } from '../../shared/hooks';

export const StyledBox = styled(Box)`
  border: 1px solid transparent;
  min-width: ${({ theme }) => theme.spacing.unit(10)}px;
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.unit(2)}px;
  margin-top: ${({ theme }) => theme.spacing.unit(3)}px;
`;

const Calendar: React.FC<Props> = ({
  disableDate,
  enableDate,
  locale,
  viewedDate,
  onMonthChange,
  onClick,
  selectedDate,
  selectedEndDate,
  fullscreenMode,
  isDayPicker = false,
}) => {
  const calendarRef = useRef<HTMLDivElement>(null);
  const localeObj = getLocale(locale);
  const calendar = getCalendar(viewedDate, {
    locale: localeObj,
    isDayPicker,
  });

  const dateIsDisabled = (dateToCheck: Date | null) => {
    const isEnabled = dateToCheck && enableDate && enableDate(dateToCheck);
    const isDisabled = dateToCheck && disableDate && disableDate(dateToCheck);

    if (R.isNil(isEnabled) && R.isNil(isDisabled)) return false;
    if (R.isNil(isEnabled)) return isDisabled;
    if (R.isNil(isDisabled)) return !isEnabled;
    return false;
  };

  const { focusedDate, handleKeyPress, handleFocus } = useFocusedDate({
    calendarRef,
    viewedDate,
    calendar,
    onMonthChange,
    dateIsDisabled,
    onSelectDate: onClick,
  });

  return (
    <Flexbox ref={calendarRef} container direction="column" data-testid="datepicker-calendar">
      {!isDayPicker && (
        <Flexbox container justifyContent="space-between" aria-hidden>
          {calendar.weekDays?.map((n) => (
            <Flexbox item justifyContent="center" alignItems="center" key={n}>
              <StyledBox>
                <Typography type="tertiary">{n}</Typography>
              </StyledBox>
            </Flexbox>
          ))}
        </Flexbox>
      )}
      {calendar.dates.map((week, weekIndex) => (
        <Flexbox container justifyContent="space-between" key={week.toString()}>
          {week?.map((day, dayIndex) => (
            <CalendarDay
              isDayPicker={isDayPicker}
              onFocus={() => {
                handleFocus(day);
              }}
              focused={!!focusedDate && isSameDay(day, focusedDate)}
              key={day.toString()}
              date={day}
              disabled={!!dateIsDisabled(day)}
              onClick={() => {
                if (!dateIsDisabled(day)) onClick(day);
              }}
              onKeyDown={handleKeyPress}
              selected={
                (selectedDate && isSameDay(selectedDate, day)) ||
                (selectedEndDate && isSameDay(selectedEndDate, day))
              }
              sameMonth={isSameMonth(viewedDate, day)}
              locale={localeObj}
              isWithinRange={(() => {
                if (selectedEndDate && selectedDate < selectedEndDate)
                  return isWithinInterval(day, { start: selectedDate, end: selectedEndDate });
                if (selectedEndDate && selectedDate > selectedEndDate)
                  return isWithinInterval(day, { start: selectedEndDate, end: selectedDate });
                return false;
              })()}
              isFirstDay={weekIndex === 0 && dayIndex === 0}
              isLastDay={weekIndex === calendar.dates.length - 1 && dayIndex === week.length - 1}
              fullscreenMode={fullscreenMode}
            />
          ))}
        </Flexbox>
      ))}
    </Flexbox>
  );
};

export default Calendar;
