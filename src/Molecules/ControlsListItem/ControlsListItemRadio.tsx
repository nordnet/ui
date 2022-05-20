import React from 'react';
import { Flexbox, Typography, Input } from '../..';

import { ControlsListItemRadio as Props } from './ControlsListItem.types';
import ControlsListItem from './ControlsListItem';

const ControlsListItemRadio: React.FC<Props> = ({
  name,
  label,
  value,
  Icon,
  checked,
  onChange,
  description,
}) => {
  return (
    <ControlsListItem>
      <>
        <Flexbox container justifyContent="space-between">
          <Flexbox container item gutter={1} alignItems="center">
            {Icon}
            <Typography>{label}</Typography>
          </Flexbox>

          <Flexbox item>
            <Input.Radio
              name={name}
              value={value}
              label={label}
              checked={checked}
              onChange={onChange}
              hideLabel
            />
          </Flexbox>
        </Flexbox>
        {description && (
          <Flexbox container>
            <Typography type="secondary" color={(t) => t.color.label}>
              {description}
            </Typography>
          </Flexbox>
        )}
      </>
    </ControlsListItem>
  );
};

export default ControlsListItemRadio;
