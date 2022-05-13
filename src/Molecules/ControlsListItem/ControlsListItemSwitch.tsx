import React from 'react';
import { Switch, Flexbox, Typography } from '../..';

import { ControlsListItemSwitch as Props } from './ControlsListItem.types';
import ControlsListItem from './ControlsListItem';
import { isFunction } from '../../common/utils';

const ControlsListItemSwitch: React.FC<Props> = ({
  label,
  onChange: onChangeFromProps,
  Icon,
  checked,
}) => {
  const onChange = () => {
    if (isFunction(onChangeFromProps)) {
      onChangeFromProps();
    }
  };
  return (
    <ControlsListItem>
      <Flexbox container justifyContent="space-between">
        <Flexbox container item gutter={1} alignItems="center">
          {Icon}
          <Typography>{label}</Typography>
        </Flexbox>
        <Flexbox item>
          <Switch label={label} hiddenLabel onClick={(_) => onChange()} checked={checked} />
        </Flexbox>
      </Flexbox>
    </ControlsListItem>
  );
};

export default ControlsListItemSwitch;
