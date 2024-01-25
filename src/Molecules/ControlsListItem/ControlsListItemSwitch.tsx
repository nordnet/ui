import React from 'react';
import { Box, Typography, CssGrid as Grid, Toggle } from '../..';
import ControlsListItem from './ControlsListItem';
import { ControlsListItemSwitch as Props } from './ControlsListItem.types';

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

const ControlsListItemSwitch: React.FC<Props> = ({
  checked,
  description,
  Icon,
  label,
  onChange,
  addon,
  disabled,
  size = 'l',
}) => {
  const hasAddon = React.isValidElement(addon);
  return (
    <ControlsListItem disabled={disabled}>
      <Grid.Container {...GRID}>
        <Grid.Item area="icon" justify="start" align="center">
          <>{Icon}</>
        </Grid.Item>

        <Grid.Item area="label" justify="start" align="center">
          <Typography type="secondary" weight="bold">
            {label}
          </Typography>
        </Grid.Item>

        <Grid.Item area="button" justify="end" align="center">
          <Toggle
            label={label}
            hiddenLabel
            onClick={(_) => onChange()}
            checked={checked}
            disabled={disabled}
            size={size}
          />
        </Grid.Item>

        <Grid.Item area="description">
          {description && (
            <Typography type="secondary" color={(t) => t.color.label}>
              {description}
            </Typography>
          )}
          {hasAddon && <Box pt={2}>{addon}</Box>}
        </Grid.Item>
      </Grid.Container>
    </ControlsListItem>
  );
};

export default ControlsListItemSwitch;
