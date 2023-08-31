import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useTheme } from 'styled-components';
import { useIntl } from 'react-intl';
import {
  Props,
  PropsWithClearButton,
  PropsWithFullscreen,
  PropsWithoutClearButton,
  PropsWithoutFullscreen,
} from './DateRangePicker.types';

/**
 * Imported separately because when imported in src/index.ts, Input will not have been imported yet and an error will be thrown
 */
import Input from '../../Input';
import { Box, Button, Flexbox, Icon, Modal, useMedia } from '../../..';
import { assert, isUndefined } from '../../../common/utils';
import { useOnClickOutside } from '../../../common/Hooks';
import { getDateFormat, parseDateString } from '../shared/dateUtils';
import Header from '../Single/Header';
import Calendar from '../Single/Calendar';
import { DEFAULT_INPUT_WIDTH, INPUT_ID_RANGE } from '../shared/constants';
import { useDatePicker } from '../shared/hooks';
import {
  StyledDropdownBubble,
  StyledDropdownBubbleWrapper,
  StyledInputText,
} from '../shared/DatePicker.styled';

export const isFullscreenMode = (
  props: PropsWithFullscreen | PropsWithoutFullscreen,
  isSmallScreen: boolean | null,
): props is PropsWithFullscreen => Boolean(props.fullscreenOnMobile) && Boolean(isSmallScreen);

const isWithClearButton = (
  props: PropsWithoutClearButton | PropsWithClearButton,
): props is PropsWithClearButton => Boolean(props.showClearButton);

const DateRangePicker = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const {
    ariaLabelPrevious,
    ariaLabelNext,
    allowDateUpdateOnType = false,
    onChange,
    label,
    disabled,
    disableDate,
    enableDate,
    id,
    open: openProp = false,
    selectedDate: selectedDateProp,
    selectedEndDate: selectedEndDateProp,
    width = DEFAULT_INPUT_WIDTH,
    yearSelectLength,
    inputSize,
    allowSingleDayRange,
    showClearButton,
    fullscreenOnMobile,
    selectMonthLabel,
    selectYearLabel,
    errorMessage,
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

  if (fullscreenOnMobile) {
    assert(
      !isUndefined(props.fullscreenProps),
      `DatePicker: "fullscreenProps" is required when "fullscreenOnMobile" is true`,
    );
  }

  const theme = useTheme();
  const { locale } = useIntl();
  const dateFormat = getDateFormat(locale);
  const isSmallScreen = useMedia((t) => t.media.lessThan(t.breakpoints.sm));

  const [open, setOpen] = useState<boolean>(openProp);

  useEffect(() => {
    setOpen(openProp);
  }, [openProp]);

  const onClose = useCallback(() => setOpen(false), []);

  const {
    selectedDate,
    selectedEndDate,
    inputValue,
    inputValueEnd,
    handleInputKeyDown,
    handleInputOnChange,
    handleInputOnBlur,
    onMonthChange,
    onYearChange,
    onDateClick,
    viewedDate,
    clearDate,
    invalidDate,
  } = useDatePicker({
    id,
    selectedDateProp,
    selectedEndDateProp,
    enableDate,
    disableDate,
    onChange,
    allowDateUpdateOnType,
    allowSingleDayRange,
    isRangePicker: true,
  });

  const handleInputOnFocus = useCallback(() => setOpen(true), [setOpen]);

  const datepicker = (
    <>
      <Header
        ariaLabelPrevious={ariaLabelPrevious}
        ariaLabelNext={ariaLabelNext}
        id={id}
        viewedDate={viewedDate}
        locale={locale}
        onMonthChange={onMonthChange}
        onYearChange={onYearChange}
        yearSelectLength={yearSelectLength}
        fullscreenMode={isFullscreenMode(props, isSmallScreen)}
        selectMonthLabel={selectMonthLabel}
        selectYearLabel={selectYearLabel}
      />
      <Calendar
        disableDate={disableDate}
        enableDate={enableDate}
        viewedDate={viewedDate}
        onMonthChange={onMonthChange}
        locale={locale}
        onClick={onDateClick}
        selectedDate={selectedDate as Date}
        selectedEndDate={selectedEndDate as Date}
        fullscreenMode={isFullscreenMode(props, isSmallScreen)}
      />
      {isWithClearButton(props) ? (
        <Box pt={3}>
          <Button
            variant="neutral"
            color={(p) => p.colorTokens.action.background_default}
            onClick={clearDate}
          >
            {props.clearButtonLabel}
          </Button>
        </Box>
      ) : null}
    </>
  );

  const inputRightAddon = <Icon.Calendar24 />;

  const selfRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(selfRef, () => {
    if (!isFullscreenMode(props, isSmallScreen)) {
      setOpen(false);
    }
  });

  const getFormattedDate = useCallback(() => {
    if (inputValue && !inputValueEnd) {
      return parseDateString(inputValue, locale) ? `${inputValue} - ` : inputValue;
    }
    if (inputValue && inputValueEnd) {
      return `${inputValue} - ${inputValueEnd}`;
    }
    return '';
  }, [inputValue, inputValueEnd, locale]);

  return (
    <div ref={(ref || selfRef) as React.Ref<HTMLDivElement>}>
      <StyledInputText
        size={inputSize}
        label={label}
        disabled={disabled}
        id={INPUT_ID_RANGE(id)}
        data-testid="datepicker-input"
        placeholder={`${dateFormat.toLowerCase()} - ${dateFormat.toLowerCase()}`}
        value={getFormattedDate()}
        rightAddon={inputRightAddon}
        onChange={handleInputOnChange}
        onKeyDown={handleInputKeyDown}
        onFocus={handleInputOnFocus}
        onBlur={handleInputOnBlur}
        width={typeof width === 'string' ? width : `${theme.spacing.unit(width)}px`}
        autoComplete="off"
        error={invalidDate ? errorMessage : ''}
      />
      {open && !isFullscreenMode(props, isSmallScreen) && (
        <StyledDropdownBubbleWrapper data-testid="styled-dropdown-bubble-wrapper">
          <StyledDropdownBubble>
            <Box my={3} mx={2}>
              {datepicker}
            </Box>
          </StyledDropdownBubble>
        </StyledDropdownBubbleWrapper>
      )}
      {open && isFullscreenMode(props, isSmallScreen) && (
        <Modal
          title={props.fullscreenProps.title}
          open={open}
          onClose={onClose}
          fullScreenMobile
          footer={
            <>
              <Box py={5}>
                <Button
                  variant="neutral"
                  color={(p) => p.colorTokens.action.background_default}
                  onClick={clearDate}
                >
                  {props.fullscreenProps.clearButtonLabel}
                </Button>
              </Box>
              <Button onClick={onClose} size="l" fullWidth>
                {props.fullscreenProps.confirmButtonLabel}
              </Button>
            </>
          }
        >
          <>
            <Box pb={4}>
              <Flexbox container gutter={2} justifyContent="center">
                <Flexbox item flex="1">
                  <Input.Text
                    id="fromDate"
                    placeholder={inputValue}
                    label={props.fullscreenProps.fromLabel ?? ''}
                    width="100%"
                    readOnly
                  />
                </Flexbox>
                <Flexbox item flex="1">
                  <Input.Text
                    id="toDate"
                    placeholder={inputValueEnd}
                    label={props.fullscreenProps.toLabel ?? ''}
                    width="100%"
                    readOnly
                  />
                </Flexbox>
              </Flexbox>
            </Box>
            {datepicker}
          </>
        </Modal>
      )}
    </div>
  );
});

export default DateRangePicker;
