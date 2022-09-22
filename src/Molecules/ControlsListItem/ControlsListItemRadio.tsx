import React from 'react';
import { Box, Input, Typography, CssGrid as Grid } from '../..';
import ControlsListItem from './ControlsListItem';
import { ControlsListItemRadio as Props } from './ControlsListItem.types';

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

const ControlsListItemRadio: React.FC<Props> = ({
  checked,
  description,
  Icon,
  label,
  name,
  onChange,
  value,
  addon,
  disabled,
}) => {
  const hasAddon = React.isValidElement(addon);
  return (
    <ControlsListItem>
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
          <Input.Radio
            name={name}
            value={value}
            label={label}
            checked={checked}
            onChange={onChange}
            hideLabel
            disabled={disabled}
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

export default ControlsListItemRadio;
