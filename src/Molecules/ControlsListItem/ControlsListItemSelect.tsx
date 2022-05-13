import React, { useMemo } from 'react';
import { Input, Flexbox, Typography } from '../..';

import { ControlsListItemSelect as Props } from './ControlsListItem.types';
import ControlsListItem from './ControlsListItem';
import ControlsListItemSelectButton from './ControlsListItemSelectButton';
import ControlsListItemSelectListItem from './ControlsListItemSelectListItem';

const ControlsListItemSelect: React.FC<Props> = ({
  label,
  Icon,
  options,
  onChange,
  selectedItem,
}) => {
  const customGraphTypeComponents = useMemo(
    () => ({
      SelectedValue: () => ControlsListItemSelectButton(selectedItem?.[0]?.label),
      ListItem: ({ index }: { index: number }) =>
        ControlsListItemSelectListItem({ index, selectedItem: selectedItem?.[0]?.label }),
    }),
    [selectedItem],
  );

  return (
    <ControlsListItem>
      <Flexbox container justifyContent="space-between">
        <Flexbox container item gutter={1} alignItems="center">
          {Icon}
          <Typography>{label}</Typography>
        </Flexbox>

        <Flexbox item>
          <Input.Select
            id="graph-typ-input"
            label="Line graph"
            components={customGraphTypeComponents}
            onChange={onChange}
            options={options}
            listPosition="left"
            fullWidth
            hideLabel
            noFormField
          />
        </Flexbox>
      </Flexbox>
    </ControlsListItem>
  );
};

export default ControlsListItemSelect;
