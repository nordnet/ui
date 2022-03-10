import React, { useCallback, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { format, isToday } from 'date-fns';
import { Box, Typography } from '../../../../..';
import { CalendarDayProps } from './CalendarDay.types';
import { DOUBLE_CALENDAR_GUTTER } from '../../constants';

const StyledCalendarDay = styled(Box)<{
  $disabled?: boolean;
  $selected?: boolean;
  $isWithinRange?: boolean;
  $isToday?: boolean;
  $isSameMonth?: boolean;
  $isFirstDay?: boolean;
  $isLastDay?: boolean;
  $withGutter?: boolean;
  $fullscreenMode: boolean;
}>`
  background: ${({ theme }) => theme.color.inputBackground};
  min-width: ${({ theme }) => theme.spacing.unit(10) + 2}px;
  min-height: ${({ theme }) => theme.spacing.unit(10) + 2}px;
  margin: ${({ theme }) => theme.spacing.unit(0.5)}px 0;
  ${({ $withGutter }) => ($withGutter ? `margin-right: ${DOUBLE_CALENDAR_GUTTER}px;` : '')}
  justify-content: center;
  align-items: center;
  display: flex;
  cursor: pointer;
  box-sizing: border-box;
  flex: 1;

  ${({
    $disabled,
    $selected,
    $isWithinRange,
    $isToday,
    $isFirstDay,
    $isLastDay,
    $fullscreenMode,
    theme,
  }) => `
  ${
    $disabled
      ? `cursor: not-allowed;
        background: ${theme.color.shadowInput};

        &:focus {
          border: 1px solid ${theme.color.inputBorder};
        }`
      : `
      &:focus {
        border: 1px solid ${theme.color.cta};
      }

      &:hover {
        border: 1px solid ${theme.color.cta};
      }`
  }
  ${$isWithinRange ? `background: ${theme.color.datePickerWithinRangeBackground};` : ''}
  ${
    $fullscreenMode
      ? `width: calc((100vw - ${theme.spacing.unit(6)}px) / 7);
			height: calc((100vw - ${theme.spacing.unit(6)}px) / 7);
			`
      : ''
  }
  ${
    $isWithinRange && $isFirstDay
      ? `background: linear-gradient(to right, ${theme.color.datePickerWithinRangeFade}, ${theme.color.datePickerWithinRangeBackground});`
      : ''
  }
  ${
    $isWithinRange && $isLastDay
      ? `background: linear-gradient(to left, ${theme.color.datePickerWithinRangeFade}, ${theme.color.datePickerWithinRangeBackground});`
      : ''
  }
  ${$isToday ? `border: 1px solid ${theme.color.label};` : ''}
  ${$selected ? `background: ${theme.color.cta};` : ''}
`}
`;

const CalendarDay: React.FC<CalendarDayProps> = ({
  onFocus,
  className = '',
  date,
  focused,
  disabled = false,
  locale,
  onClick,
  onKeyDown,
  sameMonth = true,
  selected,
  isWithinRange = false,
  isFirstDay = false,
  isLastDay = false,
  withGutter,
  fullscreenMode = false,
  isDayPicker = false,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (focused) {
      ref.current?.focus();
    }
  }, [focused]);

  const textColor = (() => {
    if (!isDayPicker && !sameMonth && !selected) return 'otherMonthDateText';
    if (disabled) return 'disabledText';
    if (selected) return 'buttonText';
    if (!selected) return 'text';
    return '';
  })();

  const handleClick = useCallback(() => {
    if (disabled) return;
    if (onClick) onClick(date);
  }, [date, disabled, onClick]);

  const ariaLabel = format(date, 'EEEE dd MMMM, yyyy', {
    locale,
  });

  return (
    <StyledCalendarDay
      ref={ref}
      className={className}
      $disabled={disabled}
      $selected={selected}
      $isWithinRange={isWithinRange}
      $isToday={isToday(date)}
      $isSameMonth={sameMonth}
      $isFirstDay={isFirstDay}
      $isLastDay={isLastDay}
      data-testid={`${format(date, 'MMMM d', { locale })}`}
      onClick={handleClick}
      onKeyDown={onKeyDown}
      onFocus={onFocus}
      aria-label={ariaLabel}
      tabIndex={disabled ? -1 : 0} // should not be focusable if disabled
      $withGutter={withGutter}
      $fullscreenMode={fullscreenMode}
    >
      <Typography type="tertiary" aria-hidden color={(t) => t.color[textColor || 'text']}>
        {format(date, 'd')}
      </Typography>
    </StyledCalendarDay>
  );
};

export default CalendarDay;
