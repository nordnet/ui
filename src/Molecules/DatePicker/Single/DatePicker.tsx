import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useTheme } from 'styled-components';
import { useIntl } from 'react-intl';
import {
  Props as SingleDatePickerProps,
  PropsWithFullscreen,
  PropsWithoutFullscreen,
} from './DatePicker.types';

/**
 * Imported separately because when imported in src/index.ts, Input will not have been imported yet and an error will be thrown
 */
import { Box, Button, Icon, Input, Modal, useMedia, Flexbox } from '../../..';
import { assert, isUndefined } from '../../../common/utils';
import { useOnClickOutside } from '../../../common/Hooks';
import { getDateFormat } from '../shared/dateUtils';
import Header from './Header';
import Calendar from './Calendar';
import { DEFAULT_INPUT_WIDTH } from '../shared/constants';
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

const DatePicker = React.forwardRef<HTMLDivElement, SingleDatePickerProps>((props, ref) => {
  const {
    ariaLabelPrevious,
    ariaLabelNext,
    allowDateUpdateOnType = false,
    onChange,
    onBlur,
    label,
    disabled,
    disableDate,
    enableDate,
    id,
    open: openProp = false,
    selectedDate: selectedDateProp,
    width = DEFAULT_INPUT_WIDTH,
    yearSelectLength,
    inputSize,
    fullscreenOnMobile,
    selectMonthLabel,
    selectYearLabel,
    errorMessage,
    clearDateButton,
  } = props;

  assert(Boolean(props.id), `DatePicker: "id" is required.`);

  if (disableDate) {
    assert(
      isUndefined(enableDate),
      `DatePicker: "enableDate" cannot be used at the same time as "disableDate".`,
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
    inputValue,
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
    enableDate,
    disableDate,
    onChange,
    onBlur,
    allowDateUpdateOnType,
  });

  const fullscreenMode = isFullscreenMode(props, isSmallScreen);

  const handleInputOnFocus = useCallback(() => setOpen(true), [setOpen]);
  const handleClick = useCallback(
    (date: Date) => {
      onDateClick(date);
      if (!fullscreenMode) onClose();
    },
    [onDateClick, onClose, fullscreenMode],
  );

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
        fullscreenMode={fullscreenMode}
        selectMonthLabel={selectMonthLabel}
        selectYearLabel={selectYearLabel}
      />
      <Calendar
        disableDate={disableDate}
        enableDate={enableDate}
        viewedDate={viewedDate}
        onMonthChange={onMonthChange}
        locale={locale}
        onClick={handleClick}
        selectedDate={selectedDate as Date}
        fullscreenMode={fullscreenMode}
      />
    </>
  );

  const inputRightAddon = <Icon.Calendar24 />;

  const selfRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(selfRef, () => {
    if (!fullscreenMode) {
      setOpen(false);
    }
  });

  const clearClickHandler = () => {
    clearDate();
    if (clearDateButton?.onClearDate) {
      clearDateButton.onClearDate();
    }
  };

  return (
    <div ref={(ref || selfRef) as React.Ref<HTMLDivElement>}>
      <StyledInputText
        size={inputSize}
        label={label}
        disabled={disabled}
        id={id}
        data-testid="datepicker-input"
        placeholder={dateFormat.toLowerCase()}
        value={inputValue}
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
          <StyledDropdownBubble borderRadius={8}>
            <Box my={3} mx={2}>
              {datepicker}
              {clearDateButton ? (
                <Box pt={5}>
                  <Button
                    variant="neutral"
                    color={(p) => p.colorTokens.action.background_default}
                    onClick={clearClickHandler}
                  >
                    {clearDateButton.clearButtonLabel}
                  </Button>
                </Box>
              ) : null}
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
                  onClick={() => {
                    clearDate();
                    if (props?.fullscreenProps?.onClearDate) {
                      props.fullscreenProps.onClearDate();
                    }
                  }}
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
                    label={props.fullscreenProps.dateLabel ?? props.fullscreenProps.title}
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

export default DatePicker;
