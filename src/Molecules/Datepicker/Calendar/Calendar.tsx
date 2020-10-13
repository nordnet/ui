import React, { useCallback, useEffect } from 'react';
import format from 'date-fns/format';
import isSameDay from 'date-fns/isSameDay';
import isSameMonth from 'date-fns/isSameMonth';
import isToday from 'date-fns/isToday';
import styled from 'styled-components';
import { Box, Flexbox, Typography } from '../../..';
import { useKeyPress } from '../../../common/Hooks';
import { getCalendar, getLocale } from '../shared/dateUtils';
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

  &:hover {
    border: 1px solid ${({ theme }) => theme.color.cta};
  }

  &.selected {
    background: ${({ theme }) => theme.color.cta};
    border: 1px solid transparent;
  }

  &.disabled {
    background: ${({ theme }) => theme.color.disabledBackground};
    color: ${({ theme }) => theme.color.disabledText};
    cursor: not-allowed;
    border: 1px solid transparent;

    &:hover {
      border: 1px solid ${({ theme }) => theme.color.disabledBackground};
    }
  }
`;

const CalendarDay: React.FC<CalendarDayProps> = ({
  className = '',
  date,
  enabled = true,
  disabled = false,
  onClick,
  sameMonth = true,
  selected,
}) => {
  const classNames: Array<string> = [
    className,
    disabled || (typeof enabled === 'boolean' && !enabled) ? 'disabled' : '',
    selected ? 'selected' : '',
    isToday(date) ? 'today' : '',
  ];

  const textColor: string | undefined = [
    disabled || (typeof enabled === 'boolean' && !enabled) ? 'disabledText' : '',
    !sameMonth ? 'label' : '',
    selected ? 'buttonText' : '',
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

  return (
    <StyledCalendarDay className={classNames.join(' ')} onClick={handleOnClick}>
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
  now,
  onClick,
  selectedDate,
}) => {
  const arrowLeft = useKeyPress('ArrowLeft');
  const arrowRight = useKeyPress('ArrowRight');
  const arrowUp = useKeyPress('ArrowUp');
  const arrowDown = useKeyPress('ArrowDown');
  const arrowDate = selectedDate || now;

  useEffect(() => {
    if (arrowLeft) {
      arrowDate.setDate(arrowDate.getDate() - 1);
      onClick(arrowDate);
    } else if (arrowRight) {
      arrowDate.setDate(arrowDate.getDate() + 1);
      onClick(arrowDate);
    } else if (arrowUp) {
      arrowDate.setDate(arrowDate.getDate() - 7);
      onClick(arrowDate);
    } else if (arrowDown) {
      arrowDate.setDate(arrowDate.getDate() + 7);
      onClick(arrowDate);
    }
  }, [arrowDate, arrowLeft, arrowRight, arrowUp, arrowDown, onClick]);

  const calendar = getCalendar(now, {
    locale: getLocale(locale),
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
              sameMonth={isSameMonth(now, d)}
            />
          ))}
        </Flexbox>
      ))}
    </Flexbox>
  );
};

export default Calendar;
