import React from 'react';
import format from 'date-fns/format';
import isSameDay from 'date-fns/isSameDay';
import isSameMonth from 'date-fns/isSameMonth';
import isToday from 'date-fns/isToday';
import styled from 'styled-components';
import { Box, Flexbox, Typography } from '../../..';
import { getCalendar, getLocale } from '../shared/dateUtils';
import { CalendarDayProps, Props } from './Calendar.types';

const StyledWeekDay = styled(Box)`
  min-width: 43px;
  text-align: center;
`;

const StyledCalendarDay = styled(Box)`
  background: ${({ theme }) => theme.color.backgroundInput};
  min-width: 17px;
  border: 1px solid transparent;
  text-align: center;

  &.today {
    border: 1px solid ${({ theme }) => theme.color.background};
  }

  &.active {
    border: 1px solid ${({ theme }) => theme.color.cta};
  }

  color: gray;

  &.same {
    color: black;
  }
`;

const CalendarDay: React.FC<CalendarDayProps> = ({
  className = '',
  date,
  onClick,
  sameMonth = true,
  selected,
}) => {
  const classNames: Array<string> = [
    className,
    selected ? 'active' : '',
    isToday(date) ? 'today' : '',
  ];

  return (
    <StyledCalendarDay
      className={classNames.join(' ')}
      py={2}
      px={3}
      onClick={() => onClick && onClick(date)}
    >
      <Typography type="secondary" color={(t) => t.color[sameMonth ? 'text' : 'label']}>
        {format(date, 'd')}
      </Typography>
    </StyledCalendarDay>
  );
};

const Calendar: React.FC<Props> = ({ locale, now, onClick, selectedDate }) => {
  const calendar = getCalendar(now, {
    locale: getLocale(locale),
  });

  return (
    <Flexbox container direction="column">
      <Flexbox container>
        {calendar.weekDays.map((n) => (
          <Flexbox container item key={n}>
            <StyledWeekDay py={3}>
              <Typography type="secondary">{n}</Typography>
            </StyledWeekDay>
          </Flexbox>
        ))}
      </Flexbox>
      {calendar.dates.map((week) => (
        <Flexbox container key={week.toString()}>
          {week.map((d) => (
            <Flexbox container item key={d.toString()}>
              <CalendarDay
                date={d}
                onClick={() => onClick(d)}
                selected={selectedDate && isSameDay(selectedDate, d)}
                sameMonth={isSameMonth(now, d)}
              />
            </Flexbox>
          ))}
        </Flexbox>
      ))}
    </Flexbox>
  );
};

export default Calendar;
