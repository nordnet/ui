import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import * as R from 'ramda';
import { addMonths, isSameDay, isSameMonth, isWithinInterval, subMonths } from 'date-fns';
import { Box, Flexbox, Typography } from '../../../..';
import { getCalendar, getCalendarIndex, getLocale, newDate } from '../../shared/dateUtils';
import { Props } from './Calendar.types';
import {
  NUMBER_OF_VISIBLE_WEEKDAYS_SINGLE,
  NUMBER_OF_VISIBLE_WEEKS_SINGLE,
} from '../../shared/constants';
import CalendarDay from '../../shared/components/CalendarDay';

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
  setViewedDate,
  onClick,
  selectedDate,
  selectedEndDate,
  focusedState,
}) => {
  const [[focusedWeek, focusedDay], setFocused] = focusedState;
  const localeObj = getLocale(locale);
  const calendar = getCalendar(viewedDate, {
    locale: localeObj,
  });

  const focusedDateObjRef = useRef<Date | null>(null);

  const dateIsDisabled = (dateToCheck: Date | null) => {
    const isEnabled = dateToCheck && enableDate && enableDate(dateToCheck);
    const isDisabled = dateToCheck && disableDate && disableDate(dateToCheck);

    if (R.isNil(isEnabled) && R.isNil(isDisabled)) return false;
    if (R.isNil(isEnabled)) return isDisabled;
    if (R.isNil(isDisabled)) return !isEnabled;
    return false;
  };

  const calendarDayRefs = useRef(
    [...Array(NUMBER_OF_VISIBLE_WEEKS_SINGLE)]?.map(() =>
      [...Array(NUMBER_OF_VISIBLE_WEEKDAYS_SINGLE)]?.map(() => React.createRef<HTMLDivElement>()),
    ),
  );

  const stepToCalendarPage = (focusDate: Date, viewDate: Date = focusDate) => {
    setViewedDate(viewDate);
    const newCalendar = getCalendar(viewDate, {
      locale: localeObj,
    });
    setFocused(getCalendarIndex(focusDate, newCalendar));
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    event.stopPropagation();

    if (R.isNil(focusedWeek) || R.isNil(focusedDay)) {
      setFocused([0, 0]);
    } else {
      switch (event.key) {
        case 'ArrowLeft':
          if (focusedDay > 0) {
            setFocused([focusedWeek, focusedDay - 1]);
          } else if (focusedWeek > 0) {
            setFocused([focusedWeek - 1, NUMBER_OF_VISIBLE_WEEKDAYS_SINGLE - 1]);
          } else {
            // we are in the top left corner of calendar
            const focusDate = newDate(calendar.dates[focusedWeek][focusedDay]);
            stepToCalendarPage(focusDate);
          }
          break;

        case 'ArrowRight':
          if (focusedDay < NUMBER_OF_VISIBLE_WEEKDAYS_SINGLE - 1) {
            setFocused([focusedWeek, focusedDay + 1]);
          } else if (focusedWeek < NUMBER_OF_VISIBLE_WEEKS_SINGLE - 1) {
            setFocused([focusedWeek + 1, 0]);
          } else {
            // we are in the bottom right corner of calendar
            const focusDate = newDate(calendar.dates[focusedWeek][focusedDay]);
            stepToCalendarPage(focusDate);
          }
          break;

        case 'ArrowUp':
          if (focusedWeek > 0) {
            setFocused([focusedWeek - 1, focusedDay]);
          } else {
            // we are in the top row
            const focusDate = newDate(calendar.dates[focusedWeek][focusedDay]);
            const viewDate = isSameMonth(viewedDate, focusDate)
              ? subMonths(focusDate, 1)
              : focusDate;
            stepToCalendarPage(focusDate, viewDate);
          }
          break;

        case 'ArrowDown':
          if (focusedWeek < NUMBER_OF_VISIBLE_WEEKS_SINGLE - 1) {
            setFocused([focusedWeek + 1, focusedDay]);
          } else {
            // we are in the bottom row
            const focusDate = newDate(calendar.dates[focusedWeek][focusedDay]);
            const viewDate = isSameMonth(viewedDate, focusDate)
              ? addMonths(focusDate, 1)
              : focusDate;
            stepToCalendarPage(focusDate, viewDate);
          }
          break;

        case ' ': // Spacebar
        case 'Enter':
          if (focusedDateObjRef.current && !dateIsDisabled(focusedDateObjRef.current)) {
            onClick(new Date(focusedDateObjRef.current));
          }
          break;

        default:
          break;
      }
    }
  };

  useEffect(() => {
    if (
      !R.isNil(focusedWeek) &&
      !R.isNil(focusedDay) &&
      !R.isNil(calendarDayRefs.current[focusedWeek][focusedDay].current)
    ) {
      calendarDayRefs.current[focusedWeek][focusedDay].current?.focus();
    }
  }, [focusedDay, focusedWeek]);

  return (
    <Flexbox container direction="column" data-testid="datepicker-calendar">
      <Flexbox container justifyContent="space-between" aria-hidden>
        {calendar.weekDays?.map((n) => (
          <Flexbox item justifyContent="center" alignItems="center" key={n}>
            <StyledBox>
              <Typography type="tertiary">{n}</Typography>
            </StyledBox>
          </Flexbox>
        ))}
      </Flexbox>
      {calendar.dates?.map((week, weekIndex) => (
        <Flexbox container justifyContent="space-between" key={week.toString()}>
          {week?.map((day, dayIndex) => (
            <CalendarDay
              ref={calendarDayRefs.current[weekIndex][dayIndex]}
              onFocus={() => {
                setFocused([weekIndex, dayIndex]);
                focusedDateObjRef.current = day;
              }}
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
            />
          ))}
        </Flexbox>
      ))}
    </Flexbox>
  );
};

export default Calendar;
