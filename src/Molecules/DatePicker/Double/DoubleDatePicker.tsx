import React, { useCallback, useEffect, useRef, useState } from 'react';
import styled, { useTheme } from 'styled-components';
import { useIntl } from 'react-intl';
import {
  Props as DoubleDatePickerProps,
  PropsWithClearButton,
  PropsWithoutClearButton,
} from './DoubleDatePicker.types';

/**
 * Imported separately because when imported in src/index.ts, Input will not have been imported yet and an error will be thrown
 */
import Input from '../../Input';
import { Box, DropdownBubble, Flexbox, OldIcon, Button } from '../../..';
import { assert, isUndefined } from '../../../common/utils';
import { useOnClickOutside } from '../../../common/Hooks';
import { getDateFormat } from '../shared/dateUtils';

import DoubleHeader from './Header';
import DoubleCalendar from './Calendar';
import { DEFAULT_INPUT_WIDTH, INPUT_ID_END, INPUT_ID_START } from '../shared/constants';
import { useDatePicker } from '../shared/hooks';
import { StyledDropdownBubbleWrapper } from '../shared/DatePicker.styled';

const INPUT_SPACING = 4;

const StyledInputText = styled(Input.Text)`
  z-index: 1;
  margin-bottom: ${(p) => p.theme.spacing.unit(1)}px;
`;

const StyledDropdownBubble = styled(DropdownBubble)`
  width: ${({ theme }) => theme.spacing.unit(156 + INPUT_SPACING)}px;
  z-index: ${({ theme }) => theme.zIndex.overlay};
  box-sizing: border-box;
  top: -10px;

  &:after,
  &:before {
    display: none;
  }
`;

const isWithClearButton = (
  props: PropsWithoutClearButton | PropsWithClearButton,
): props is PropsWithClearButton => Boolean(props.showClearButton);

const DoubleDatePicker = React.forwardRef<HTMLDivElement, DoubleDatePickerProps>((props, ref) => {
  const {
    ariaLabelPrevious,
    ariaLabelNext,
    onChange,
    labelFrom,
    labelTo = '',
    disabled,
    disableDate,
    enableDate,
    id,
    open: openProp = false,
    selectedStartDate: selectedStartDateProp,
    selectedEndDate: selectedEndDateProp,
    width = DEFAULT_INPUT_WIDTH,
    yearSelectLength,
    inputSize,
    allowSingleDayRange = true,
    allowDateUpdateOnType,
    showClearButton,
    selectMonthLabel,
    selectYearLabel,
  } = props;

  assert(Boolean(props.id), `DatePicker: "id" is required.`);

  if (disableDate) {
    assert(
      isUndefined(enableDate),
      `DatePicker: "enableDate" cannot be used at the same time as "disableDate".`,
    );
  }

  if (showClearButton) {
    assert(
      !isUndefined(props.clearButtonLabel),
      `DatePicker: "clearButtonLabel" is required when "showClearButton" is true`,
    );
  }

  const theme = useTheme();
  const { locale } = useIntl();
  const dateFormat = getDateFormat(locale);

  const [open, setOpen] = useState<boolean>(openProp);

  useEffect(() => {
    setOpen(openProp);
  }, [openProp]);

  const {
    selectedDate: selectedStartDate,
    selectedEndDate,
    inputValue: inputValueStart,
    inputValueEnd,
    handleInputKeyDown,
    handleInputOnChange,
    handleInputOnBlur,
    onMonthChange,
    onYearChange,
    onDateClick,
    viewedDate,
    clearDate,
  } = useDatePicker({
    id,
    selectedDateProp: selectedStartDateProp,
    selectedEndDateProp,
    enableDate,
    disableDate,
    onChange,
    allowDateUpdateOnType,
    allowSingleDayRange,
    noOfMonthsInCalendarView: 2,
    isRangePicker: true,
  });

  const handleInputOnFocus = useCallback(() => setOpen(true), [setOpen]);

  const datepicker = (
    <Box my={3} mx={2}>
      <DoubleHeader
        ariaLabelPrevious={ariaLabelPrevious}
        ariaLabelNext={ariaLabelNext}
        id={id}
        viewedDate={viewedDate}
        locale={locale}
        onMonthChange={onMonthChange}
        onYearChange={onYearChange}
        yearSelectLength={yearSelectLength}
        selectMonthLabel={selectMonthLabel}
        selectYearLabel={selectYearLabel}
      />
      <DoubleCalendar
        disableDate={disableDate}
        enableDate={enableDate}
        viewedDate={viewedDate}
        locale={locale}
        onClick={onDateClick}
        selectedStartDate={selectedStartDate as Date}
        selectedEndDate={selectedEndDate as Date}
        onMonthChange={onMonthChange}
      />
      {isWithClearButton(props) ? (
        <Box pt={3}>
          <Button variant="neutral" color={(p) => p.color.cta} onClick={clearDate}>
            {props.clearButtonLabel}
          </Button>
        </Box>
      ) : null}
    </Box>
  );

  const inputRightAddon = <OldIcon.CalendarTwoRows size={6} />;

  const selfRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(selfRef, () => {
    setOpen(false);
  });

  return (
    <div ref={(ref || selfRef) as React.Ref<HTMLDivElement>}>
      <Flexbox container wrap="wrap" gutter={1} alignItems="flex-end">
        <StyledInputText
          size={inputSize}
          label={labelFrom}
          disabled={disabled}
          id={INPUT_ID_START(id)}
          data-testid="datepicker-input-start"
          placeholder={dateFormat.toLowerCase()}
          value={inputValueStart}
          rightAddon={inputRightAddon}
          onChange={handleInputOnChange}
          onKeyDown={handleInputKeyDown}
          onFocus={handleInputOnFocus}
          onBlur={handleInputOnBlur}
          width={typeof width === 'string' ? width : `${theme.spacing.unit(width)}px`}
          autoComplete="off"
        />
        <StyledInputText
          size={inputSize}
          label={labelTo}
          disabled={disabled}
          id={INPUT_ID_END(id)}
          data-testid="datepicker-input-end"
          placeholder={dateFormat.toLowerCase()}
          value={inputValueEnd}
          rightAddon={inputRightAddon}
          onChange={handleInputOnChange}
          onKeyDown={handleInputKeyDown}
          onFocus={handleInputOnFocus}
          onBlur={handleInputOnBlur}
          width={typeof width === 'string' ? width : `${theme.spacing.unit(width)}px`}
          autoComplete="off"
        />
      </Flexbox>
      {open ? (
        <StyledDropdownBubbleWrapper>
          <StyledDropdownBubble>{datepicker}</StyledDropdownBubble>
        </StyledDropdownBubbleWrapper>
      ) : null}
    </div>
  );
});

export default DoubleDatePicker;
