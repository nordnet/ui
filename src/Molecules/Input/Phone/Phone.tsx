import React, { useState, useMemo, useCallback, useRef, useEffect } from 'react';
import * as R from 'ramda';
import { Props } from './Phone.types';
import { Box, Flag, Flexbox, FormField, OldIcon, Typography } from '../../..';
import { useSelectMachineFromContext } from '../Select/lib/context';
import { OptionItem } from '../Select/Select.types';
import { CountryCodeLabel } from './CountryCodeLabel';
import {
  StyledSelect,
  StyledCountryCode,
  StyledInput,
  StyledWrapper,
  StyledBox,
  StyledTypography,
} from './Phone.styled';

const hasError = (error?: Props['error']) => error && error !== '';

const components = {
  StyledInput,
};

const getAriaProps = R.pickBy((val, key) => key.startsWith('aria-'));
const getDataProps = R.pickBy((val, key) => key.startsWith('data-'));
const doNothing = () => {};

const PhoneComponent = React.forwardRef<HTMLInputElement, Props>((props, ref) => {
  const {
    autoComplete,
    autoFocus,
    defaultValue,
    disabled,
    error,
    id,
    maxLength,
    name,
    onBlur = doNothing,
    onChange = doNothing,
    onClick,
    onFocus = doNothing,
    onMouseLeave,
    onKeyDown,
    onKeyPress,
    onKeyUp,
    placeholder,
    required,
    variant = 'normal',
    size,
    success,
    visuallyEmphasiseRequired,
    type,
    sortByCountry,
    disableSearchComponent = true,
  } = props;

  const options = useMemo(
    () => [
      {
        label: <CountryCodeLabel countryCode="dk" prefixCode="+45" />,
        value: '45',
        country: 'dk',
        flag: <Flag country="dk" height={3} />,
      },
      {
        label: <CountryCodeLabel countryCode="se" prefixCode="+46" />,
        value: '46',
        country: 'se',
        flag: <Flag country="se" height={3} />,
      },
      {
        label: <CountryCodeLabel countryCode="no" prefixCode="+47" />,
        value: '47',
        country: 'no',
        flag: <Flag country="no" height={3} />,
      },
      {
        label: <CountryCodeLabel countryCode="fi" prefixCode="+358" />,
        value: '358',
        country: 'fi',
        flag: <Flag country="fi" height={3} />,
      },
      {
        label: (
          <Flexbox container alignItems="center" gutter={3}>
            <Flexbox item>
              <OldIcon.Globe size={3} />
            </Flexbox>
            <Flexbox item>
              <Typography type="secondary">+</Typography>
            </Flexbox>
          </Flexbox>
        ),
        value: '',
        country: 'other',
        flag: <OldIcon.Globe size={3} />,
      },
    ],
    [],
  );

  const byCountry = useCallback(
    (a, b) => {
      if (a.country === sortByCountry) {
        return -1;
      }
      if (b.country === sortByCountry) {
        return 1;
      }
      return 0;
    },
    [sortByCountry],
  );

  const sortedOptions = useMemo(() => options.sort(byCountry), [options, byCountry]);
  const getInitialCountryCodeValue = useCallback(() => {
    if (defaultValue?.countryCode) {
      return options.filter((opt) => opt.value === defaultValue.countryCode.replace('+', ''));
    }

    return sortByCountry ? [sortedOptions[0]] : [options[0]];
  }, [defaultValue, options, sortByCountry, sortedOptions]);

  // @ts-ignore
  const CountryCodeListItem = ({ index }) => {
    const [state] = useSelectMachineFromContext();
    const option = state.context.options[index];
    const isKeyboardNavigation = state.matches('interaction.enabled.active.navigation.keyboard');
    const focused = isKeyboardNavigation && state.context.itemFocusIdx === index;

    return (
      <StyledBox px={2} py={1} focused={focused} isKeyboardNavigation={isKeyboardNavigation}>
        <Flexbox container width="100%">
          {option.label}
        </Flexbox>
      </StyledBox>
    );
  };

  const CountryCodeValue = () => {
    const [state] = useSelectMachineFromContext();

    const selectedOption =
      state.context.selectedItems.length === 0 ? null : state.context.selectedItems[0];

    return (
      selectedOption && (
        <Flexbox container alignItems="center" justifyContent="center">
          <Box pl={2}>{selectedOption.flag}</Box>
        </Flexbox>
      )
    );
  };

  const [countryCode, setCountryCode] = useState<OptionItem[]>(getInitialCountryCodeValue());
  const [phoneNumber, setPhoneNumber] = useState<string>(defaultValue?.phoneNumber ?? '');
  const [focused, setFocused] = useState(false);

  const changeCountryCode = (vals: OptionItem[]) => {
    const { value: newValue } = vals[0];
    setCountryCode(vals);
    onChange(`+${newValue}${phoneNumber}`, newValue, phoneNumber);
  };

  const changePhoneNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value: newValue } = e.target;
    setPhoneNumber(newValue);
    onChange(`+${countryCode[0].value}${newValue}`, countryCode[0].value, newValue);
  };

  const fieldRef = useRef(null);

  const handleClickOutside = useCallback(
    (e: any) => {
      const field: any = R.propOr(null, 'current', fieldRef);
      if (focused && field && !field.contains(e.target)) {
        onBlur(e);
        setFocused(false);
      }
    },
    [fieldRef, onBlur, focused],
  );

  const handleFocus = useCallback(
    (e: any) => {
      if (focused) {
        return;
      }

      setFocused(true);
      onFocus(e);
    },
    [onFocus, focused],
  );

  // onBlur is called when a new countrycode is selected, hence the special treatment
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [handleClickOutside]);

  return (
    <FormField
      {...R.pick(
        [
          'error',
          'extraInfo',
          'hideLabel',
          'label',
          'labelTooltip',
          'labelTooltipPosition',
          'className',
          'width',
          'disabled',
        ],
        props,
      )}
      required={visuallyEmphasiseRequired}
      ref={fieldRef}
    >
      <StyledWrapper
        container
        size={size}
        alignItems="center"
        focused={focused}
        {...R.pick(['error', 'success', 'disabled', 'variant'], props)}
      >
        <StyledSelect
          label="country code"
          hideLabel
          /**
           * NOTE: Custom heights to accomdate the Select within another FormField
           * Needs to be the standard height -2px to fit within the border of the container
           * Converted to 4x units: 10 -> 9.5 for default, 8 -> 7.5 for size 's'
           */
          height={size === 's' ? 7.5 : 9.5}
          disabled={disabled}
          options={sortByCountry ? sortedOptions : options}
          components={{
            ListItem: CountryCodeListItem,
            SelectedValue: CountryCodeValue,
          }}
          value={countryCode}
          onChange={changeCountryCode}
          listWidth="80px"
          id="phone-input-country-code-selector"
          onFocus={handleFocus}
          disableSearchComponent={disableSearchComponent}
        />
        <StyledCountryCode container alignItems="center" disabled={disabled}>
          <Typography type="secondary" color={(t) => t.color[disabled ? 'label' : 'text']}>
            +{countryCode[0].value}
          </Typography>
        </StyledCountryCode>
        <Flexbox container alignItems="center" width="100%">
          <StyledTypography type="secondary">
            <StyledInput
              onChange={changePhoneNumber}
              defaultValue={defaultValue?.phoneNumber}
              {...{
                autoComplete,
                autoFocus,
                disabled,
                error,
                id,
                maxLength,
                name,
                onClick,
                onMouseLeave,
                onKeyDown,
                onKeyPress,
                onKeyUp,
                placeholder,
                required,
                variant,
                size,
                success,
                type,
                ref,
              }}
              {...getAriaProps(props)}
              {...getDataProps(props)}
              {...(hasError(error) ? { 'aria-invalid': true } : {})}
              onFocus={handleFocus}
            />
          </StyledTypography>
        </Flexbox>
      </StyledWrapper>
    </FormField>
  );
});

export const Phone: typeof PhoneComponent & {
  components?: typeof components;
} = PhoneComponent;
Phone.components = components;
