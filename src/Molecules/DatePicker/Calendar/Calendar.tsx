import React, { useCallback, useEffect, useState } from 'react';
import format from 'date-fns/format';
import isSameDay from 'date-fns/isSameDay';
import isSameMonth from 'date-fns/isSameMonth';
import isToday from 'date-fns/isToday';
import styled from 'styled-components';
import { Box, Flexbox, Typography } from '../../..';
import { useKeyPress } from '../../../common/Hooks';
import { getCalendar, getLocale, newDate } from '../shared/dateUtils';
import { CalendarDayProps, Props } from './Calendar.types';

const StyledWeekDay = styled(Box)`
  border: 1px solid transparent;
  min-width: ${({ theme }) => theme.spacing.unit(10)}px;
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.unit(2)}px;
  margin-top: ${({ theme }) => theme.spacing.unit(3)}px;
`;

const StyledCalendarDay = styled(Box)`
  background: ${({ theme }) => theme.color.backgroundInput};
  min-width: ${({ theme }) => theme.spacing.unit(10)}px;
  min-height: ${({ theme }) => theme.spacing.unit(10)}px;
  border: 1px solid transparent;
  justify-content: center;
  align-items: center;
  display: flex;
  cursor: pointer;

  &.today {
    border: 1px solid ${({ theme }) => theme.color.inputBorder};
  }

  &:hover,
  &.hover {
    border: 1px solid ${({ theme }) => theme.color.cta};
  }

  &.selected {
    background: ${({ theme }) => theme.color.cta};
    border: 1px solid transparent;
  }

  &.disabled {
    color: ${({ theme }) => theme.color.disabledText};
    cursor: not-allowed;
    border: 1px solid transparent;
  }
`;

const CalendarDay: React.FC<CalendarDayProps> = ({
  className = '',
  date,
  enabled = true,
  disabled = false,
  locale,
  onClick,
  sameMonth = true,
  hover = false,
  selected,
}) => {
  const classNames: Array<string> = [
    disabled || (typeof enabled === 'boolean' && !enabled) ? 'disabled' : '',
    selected ? 'selected' : '',
    !selected && hover ? 'hover' : '',
    isToday(date) ? 'today' : '',
  ].concat(className);

  const textColor: string | undefined = [
    disabled || (typeof enabled === 'boolean' && !enabled) ? 'label' : '',
    !sameMonth && !selected ? 'label' : '',
    selected ? 'buttonText' : '',
    !selected && hover ? 'text' : '',
  ]
    .filter((c) => c)
    .shift();

  const handleOnClick = useCallback(() => {
    if (disabled) {
      return;
    }

    if (onClick) {
      onClick(date);
    }
  }, [date, disabled, onClick]);

  const ariaLabel = format(date, 'cccc co MMMM, yyyy', {
    locale,
  });

  return (
    <StyledCalendarDay
      className={classNames.join(' ')}
      onClick={handleOnClick}
      aria-label={ariaLabel}
    >
      <Typography type="tertiary" color={(t) => t.color[textColor || 'text']}>
        {format(date, 'd')}
      </Typography>
    </StyledCalendarDay>
  );
};

const Calendar: React.FC<Props> = ({
  disableDate,
  enableDate,
  locale,
  viewedDate,
  onClick,
  selectedDate,
}) => {
  const arrowLeft = useKeyPress('ArrowLeft');
  const arrowRight = useKeyPress('ArrowRight');
  const arrowUp = useKeyPress('ArrowUp');
  const arrowDown = useKeyPress('ArrowDown');
  const enter = useKeyPress('Enter');
  const [hoverDate, setHoverDate] = useState<Date>(newDate(selectedDate || viewedDate));

  useEffect(() => {
    if (arrowLeft) {
      hoverDate.setDate(hoverDate.getDate() - 1);
      setHoverDate(hoverDate);
    } else if (arrowRight) {
      hoverDate.setDate(hoverDate.getDate() + 1);
      setHoverDate(hoverDate);
    } else if (arrowUp) {
      hoverDate.setDate(hoverDate.getDate() - 7);
      setHoverDate(hoverDate);
    } else if (arrowDown) {
      hoverDate.setDate(hoverDate.getDate() + 7);
      setHoverDate(hoverDate);
    } else if (enter) {
      onClick(hoverDate);
    }
  }, [hoverDate, arrowLeft, arrowRight, arrowUp, arrowDown, enter, onClick, setHoverDate]);

  const localeObj = getLocale(locale);
  const calendar = getCalendar(viewedDate, {
    locale: localeObj,
  });

  return (
    <Flexbox container direction="column" data-testid="datepicker-calendar">
      <Flexbox container aria-hidden>
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
              key={d.toString()}
              date={d}
              enabled={enableDate && enableDate(d)}
              disabled={disableDate && disableDate(d)}
              onClick={() => onClick(d)}
              selected={selectedDate && isSameDay(selectedDate, d)}
              sameMonth={isSameMonth(viewedDate, d)}
              locale={localeObj}
              hover={hoverDate && isSameDay(hoverDate, d)}
            />
          ))}
        </Flexbox>
      ))}
    </Flexbox>
  );
};

export default Calendar;
