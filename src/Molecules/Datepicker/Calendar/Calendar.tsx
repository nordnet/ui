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
  min-width: 44px;
  text-align: center;
  margin-bottom: 8px;
  margin-top: 20px;
`;

const StyledCalendarDay = styled(Box)`
  background: ${({ theme }) => theme.color.backgroundInput};
  min-width: 38px;
  min-height: 38px;
  border: 1px solid transparent;
  justify-content: center;
  align-items: center;
  display: flex;
  color: gray;
  margin: 2px;

  &.today {
    border: 1px solid ${({ theme }) => theme.color.background};
  }

  &.active {
    border: 1px solid ${({ theme }) => theme.color.cta};
  }

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
    <StyledCalendarDay className={classNames.join(' ')} onClick={() => onClick && onClick(date)}>
      <Typography type="tertiary" color={(t) => t.color[sameMonth ? 'text' : 'label']}>
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
          <Flexbox item justifyContent="center" alignItems="center" key={n}>
            <StyledWeekDay>
              <Typography type="tertiary">{n}</Typography>
            </StyledWeekDay>
          </Flexbox>
        ))}
      </Flexbox>
      {calendar.dates.map((week) => (
        <Flexbox container key={week.toString()}>
          {week.map((d) => (
            <CalendarDay
              date={d}
              onClick={() => onClick(d)}
              selected={selectedDate && isSameDay(selectedDate, d)}
              sameMonth={isSameMonth(now, d)}
            />
          ))}
        </Flexbox>
      ))}
    </Flexbox>
  );
};

export default Calendar;
