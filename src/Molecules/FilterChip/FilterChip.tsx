import React, { useState } from 'react';
import { Flexbox, Typography } from '../..';
import { isBoolean, isFunction } from '../../common/utils';
import { ContainerLabel, StyledFlexbox } from './FilterChip.styled';
import { Props } from './FilterChip.types';

export const FilterChip: React.FC<Props> = ({
  label,
  onChange,
  className,
  value = '',
  icon = null,
  disabled = false,
  variant = 'default',
  selected: controlledSelected,
  selectedInitially = false,
}) => {
  const [selectedInternal, setSelectedInternal] = useState(selectedInitially);
  const isControlled = isBoolean(controlledSelected);
  const selected = Boolean(isControlled ? controlledSelected : selectedInternal);

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (isFunction(onChange)) onChange(event);
    if (!isControlled) setSelectedInternal(event?.target?.checked);
  };

  return (
    <ContainerLabel
      className={className}
      $disabled={disabled}
      variant={variant}
      $selected={selected}
      hasLabel={!!label}
      tabIndex={0}
    >
      <input
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
          <Typography color="inherit" type="secondary" weight="bold" lineHeight="inherit">
            {label}
          </Typography>
        )}
      </Flexbox>
    </ContainerLabel>
  );
};
