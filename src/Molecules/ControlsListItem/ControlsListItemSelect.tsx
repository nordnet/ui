import React, { useMemo } from 'react';
import { Input, CssGrid as Grid, Typography } from '../..';

import { ControlsListItemSelect as Props } from './ControlsListItem.types';
import ControlsListItem from './ControlsListItem';
import ControlsListItemSelectButton from './ControlsListItemSelectButton';
import ControlsListItemSelectListItem from './ControlsListItemSelectListItem';

// prettier-ignore
const GRID = {
  areas:[
    ['icon', 'label', 'button'],
    ['.', 'description', 'description'],
  ],
  templateColumns:['auto', '1fr', '1fr'],
  templateRows:['auto', '1fr'],
  gutter: {row: 1, col: 2}
}

const ControlsListItemSelect: React.FC<Props> = ({
  label,
  Icon,
  options,
  onChange,
  selectedItem,
  description,
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
      <Grid.Container {...GRID}>
        <Grid.Item area="icon" justify="start" align="center">
          <>{Icon}</>
        </Grid.Item>

        <Grid.Item area="label" justify="start" align="center">
          <Typography>{label}</Typography>
        </Grid.Item>

        <Grid.Item area="button" justify="end" align="center">
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
        </Grid.Item>

        <Grid.Item area="description">
          {description && (
            <Typography type="secondary" color={(t) => t.color.label}>
              {description}
            </Typography>
          )}
        </Grid.Item>
      </Grid.Container>
    </ControlsListItem>
  );
};

export default ControlsListItemSelect;
