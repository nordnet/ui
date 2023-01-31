import React, { useState, useId } from 'react';
import { Flexbox, Typography } from '../..';
import { isBoolean, isFunction } from '../../common/utils';
import { StyledDiv, StyledFlexbox } from './FilterChip.styled';
import { Props } from './FilterChip.types';

export const FilterChip: React.FC<Props> = ({
  label,
  onChange = () => {},
  value = '',
  icon = null,
  disabled = false,
  variant = 'default',
  selected: controlledSelected,
  selectedInitially = false,
  className,
}) => {
  const id = useId();
  const [selectedInternal, setSelectedInternal] = useState(selectedInitially);
  const isControlled = isBoolean(controlledSelected);
  const selected = Boolean(controlledSelected || selectedInternal);

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (isFunction(onChange)) onChange(event);
    if (!isControlled) setSelectedInternal(event?.target?.checked);
  };

  return (
    <label htmlFor={id}>
      <StyledDiv
        className={className}
        $disabled={disabled}
        variant={variant}
        $selected={selected}
        hasLabel={!!label}
        tabIndex={0}
      >
        <input
          id={id}
          checked={selected}
          disabled={disabled}
          onChange={changeHandler}
          type="checkbox"
          value={value}
          hidden
        />
        <Flexbox container direction="row" gap={1} alignItems="center">
          {icon && <StyledFlexbox item>{icon}</StyledFlexbox>}
          {label && (
            <Flexbox item container alignItems="center">
              <Typography color="inherit" type="secondary" weight="bold" lineHeight="inherit">
                {label}
              </Typography>
            </Flexbox>
          )}
        </Flexbox>
      </StyledDiv>
    </label>
  );
};
