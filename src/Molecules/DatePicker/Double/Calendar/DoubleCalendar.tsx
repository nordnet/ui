import React, { useRef, useMemo } from 'react';
import styled from 'styled-components';
import * as R from 'ramda';
import {
  addMonths,
  isFirstDayOfMonth,
  isLastDayOfMonth,
  isSameDay,
  isSameMonth,
  isWithinInterval,
} from 'date-fns';
import { Box, Flexbox, Typography } from '../../../..';
import { getCalendar, getLocale } from '../../shared/dateUtils';
import { FlexProps } from '../../../../Atoms/Flexbox/Flexbox.types';
import { Props } from './DoubleCalendar.types';
import { DOUBLE_CALENDAR_GUTTER, NUMBER_OF_VISIBLE_WEEKDAYS_SINGLE } from '../../shared/constants';
import CalendarDay from '../../shared/components/CalendarDay';
import { useFocusedDate } from '../../shared/hooks';

export const StyledBox = styled(Box)`
  border: 1px solid transparent;
  min-width: ${({ theme }) => theme.spacing.unit(10)}px;
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.unit(2)}px;
  margin-top: ${({ theme }) => theme.spacing.unit(3)}px;
`;

const HiddenDate = styled.div<{ $withGutter?: boolean }>`
  min-width: ${({ theme }) => theme.spacing.unit(10) + 2}px;
  min-height: ${({ theme }) => theme.spacing.unit(10) + 2}px;
  margin: ${({ theme }) => theme.spacing.unit(0.5)}px 0;
  ${({ $withGutter }) => ($withGutter ? `margin-right: ${DOUBLE_CALENDAR_GUTTER}px;` : '')}
`;

const StyledCalendarContainer = styled(Flexbox)<FlexProps & { $withGutter: boolean }>`
  ${({ $withGutter }) => ($withGutter ? `margin-right: ${DOUBLE_CALENDAR_GUTTER}px;` : '')}
`;

const DoubleCalendar: React.FC<Props> = ({
  disableDate,
  enableDate,
  locale,
  viewedDate,
  onClick,
  selectedStartDate,
  selectedEndDate,
  onMonthChange,
}) => {
  const calendarRef = useRef<HTMLDivElement>(null);
  const dateIsDisabled = (dateToCheck: Date | null) => {
    const isEnabled = dateToCheck && enableDate?.(dateToCheck);
    const isDisabled = dateToCheck && disableDate?.(dateToCheck);

    if (R.isNil(isEnabled) && R.isNil(isDisabled)) return false;
    if (R.isNil(isEnabled)) return isDisabled;
    if (R.isNil(isDisabled)) return !isEnabled;
    return false;
  };

  const leftViewedDate = viewedDate;
  const rightViewedDate = addMonths(leftViewedDate, 1);

  const localeObj = getLocale(locale);

  const calendar = useMemo(() => {
    const leftCalendar = getCalendar(viewedDate, {
      locale: localeObj,
    });
    const rightCalendar = getCalendar(addMonths(viewedDate, 1), {
      locale: localeObj,
    });
    return {
      weekDays: [...leftCalendar?.weekDays, ...rightCalendar?.weekDays],
      dates: leftCalendar?.dates?.map((leftWeek, index) => [
        ...leftWeek,
        ...rightCalendar?.dates[index],
      ]),
    };
  }, [localeObj, viewedDate]);

  const { focusedDate, handleKeyPress, handleFocus } = useFocusedDate({
    calendarRef,
    viewedDate,
    calendar,
    onMonthChange,
    dateIsDisabled,
    onSelectDate: onClick,
  });

  return (
    <Flexbox
      ref={calendarRef}
      container
      direction="row"
      justifyContent="space-between"
      data-testid="datepicker-calendars"
    >
      <Flexbox container direction="column" aria-hidden>
        <Flexbox container>
          {calendar?.weekDays?.map((n, index) => (
            <StyledCalendarContainer
              item
              justifyContent="center"
              alignItems="center"
              key={`${n}-${index < NUMBER_OF_VISIBLE_WEEKDAYS_SINGLE ? 'left' : 'right'}`}
              $withGutter={index === NUMBER_OF_VISIBLE_WEEKDAYS_SINGLE - 1}
            >
              <StyledBox>
                <Typography type="tertiary">{n}</Typography>
              </StyledBox>
            </StyledCalendarContainer>
          ))}
        </Flexbox>
        {calendar?.dates?.map((week = [], weekIndex) => (
          <Flexbox container justifyContent="flex-start" key={week.toString()}>
            {week?.map((day, dayIndex) => {
              const hideDate =
                (!isSameMonth(leftViewedDate, day) &&
                  isSameMonth(rightViewedDate, day) &&
                  dayIndex < NUMBER_OF_VISIBLE_WEEKDAYS_SINGLE) ||
                (!isSameMonth(rightViewedDate, day) &&
                  isSameMonth(leftViewedDate, day) &&
                  dayIndex >= NUMBER_OF_VISIBLE_WEEKDAYS_SINGLE);
              return hideDate ? (
                <HiddenDate
                  key={day.toString()}
                  $withGutter={dayIndex === NUMBER_OF_VISIBLE_WEEKDAYS_SINGLE - 1}
                  aria-hidden
                />
              ) : (
                <CalendarDay
                  withGutter={dayIndex === NUMBER_OF_VISIBLE_WEEKDAYS_SINGLE - 1}
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
                    (selectedStartDate && isSameDay(selectedStartDate, day)) ||
                    (selectedEndDate && isSameDay(selectedEndDate, day))
                  }
                  sameMonth={isSameMonth(leftViewedDate, day) || isSameMonth(rightViewedDate, day)}
                  locale={localeObj}
                  isWithinRange={(() => {
                    if (selectedStartDate && selectedEndDate && selectedStartDate < selectedEndDate)
                      return isWithinInterval(day, {
                        start: selectedStartDate,
                        end: selectedEndDate,
                      });
                    if (selectedStartDate && selectedEndDate && selectedStartDate > selectedEndDate)
                      return isWithinInterval(day, {
                        start: selectedEndDate,
                        end: selectedStartDate,
                      });
                    return false;
                  })()}
                  isFirstDay={
                    (weekIndex === 0 && dayIndex === 0) ||
                    (isFirstDayOfMonth(day) && isSameMonth(rightViewedDate, day))
                  }
                  isLastDay={
                    (weekIndex === calendar?.dates?.length - 1 && dayIndex === week.length - 1) ||
                    (isLastDayOfMonth(day) && isSameMonth(leftViewedDate, day))
                  }
                />
              );
            })}
          </Flexbox>
        ))}
      </Flexbox>
    </Flexbox>
  );
};

export default DoubleCalendar;
