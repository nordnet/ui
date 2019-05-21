import React, { useState } from 'react';
import * as R from 'ramda';
import styled from 'styled-components';
import { VisuallyHidden, Icon, Typography } from '../..';
import { SelectComponent } from './Select.types';

const selectHeight = 8;
const arrowSpace = 7;

const StyledSelect = styled.select`
  width: 100%;
  height: ${p => p.theme.spacing.unit(selectHeight)}px;
  opacity: 0;
  border: 0;
  border-radius: 0;
`;

const Chevron = styled(Icon.ChevronDown)<{ focus: boolean }>`
  transform: translateY(-50%) ${p => (p.focus ? 'rotate(180deg)' : 'rotate(0)')};
  transform-origin: center center;
  transition: transform 0.16s ease-out;
  position: absolute;
  height: ${p => p.theme.spacing.unit(2)}px;
  top: 50%;
  right: ${p => p.theme.spacing.unit(1)}px;
  pointer-events: none;
`;

const SelectWrapper = styled.div<{ focus: boolean }>`
  position: relative;
  height: ${p => p.theme.spacing.unit(selectHeight)}px;
  box-sizing: border-box;
  border: 1px solid ${p => (p.focus ? p.theme.color.borderActive : p.theme.color.inputBorder)};

  &:hover {
    border-color: ${p => (p.focus ? p.theme.color.borderActive : p.theme.color.inputBorderHover)};
  }
`;

const SelectedValue = styled(Typography)`
  height: ${p => p.theme.spacing.unit(selectHeight)}px;
  width: 100%;
  line-height: ${p => p.theme.spacing.unit(selectHeight)}px;
  padding: 0 ${p => p.theme.spacing.unit(arrowSpace)}px 0 ${p => p.theme.spacing.unit(2)}px;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  pointer-events: none;
  white-space: nowrap;
  text-overflow: ellipsis;
  box-sizing: border-box;
`;

const Select: SelectComponent = ({
  options = [],
  disabled = false,
  hideLabel = false,
  placeholder,
  name,
  label,
  className,
  value: valueFromProps,
  onChange: onChangeFromProps,
  onBlur: onBlurFromProps,
  onFocus: onFocusFromProps,
}) => {
  const [focus, setFocus] = useState(false);
  const [value, setValue] = useState();

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (typeof onChangeFromProps === 'function') {
      onChangeFromProps(e);
    }

    setValue(e.target.value);
  };

  const onFocus = (e: React.FocusEvent<HTMLSelectElement>) => {
    if (typeof onFocusFromProps === 'function') {
      onFocusFromProps(e);
    }

    setFocus(true);
  };

  const onBlur = (e: React.FocusEvent<HTMLSelectElement>) => {
    if (typeof onBlurFromProps === 'function') {
      onBlurFromProps(e);
    }

    setFocus(false);
  };

  const selectValue = typeof valueFromProps !== 'undefined' ? valueFromProps : value;
  const selectedOption = R.find(opt => `${opt.value}` === `${selectValue}`, options);

  const Label = (
    <Typography type="secondary" color={t => t.color.label}>
      {label}
    </Typography>
  );

  return (
    /* eslint-disable jsx-a11y/label-has-associated-control, jsx-a11y/label-has-for */
    <label>
      {hideLabel ? <VisuallyHidden>{Label}</VisuallyHidden> : <>{Label}</>}
      <SelectWrapper focus={focus}>
        <StyledSelect
          disabled={disabled}
          value={selectValue}
          name={name}
          onChange={onChange}
          className={className}
          onFocus={onFocus}
          onBlur={onBlur}
        >
          {placeholder && (
            <option value="" selected disabled>
              {placeholder}
            </option>
          )}
          {options.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </StyledSelect>
        <SelectedValue type="secondary" aria-hidden>
          {typeof selectedOption !== 'undefined' ? selectedOption.label : placeholder}
        </SelectedValue>
        <Chevron focus={false} />
      </SelectWrapper>
    </label>
  );
};

export default Select;
