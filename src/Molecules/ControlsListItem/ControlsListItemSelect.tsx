import React, { useMemo } from 'react';
import styled from 'styled-components';
import { Flexbox, Input, CssGrid as Grid, Typography } from '../..';

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

const StyledDiv = styled.div`
  li + li {
    border-top: none;
  }
`;

const ControlsListItemSelect: React.FC<Props> = ({
  label,
  Icon,
  options,
  onChange,
  selectedItem,
  description,
  asAddon,
  showCheckmark,
  justifyContent,
  listWidth,
  disabled,
  placement,
}) => {
  const customComponents = useMemo(
    () => ({
      SelectedValue: () => ControlsListItemSelectButton(selectedItem?.[0]?.label),
      ListItem: ({ index }: { index: number }) =>
        ControlsListItemSelectListItem({ index, selectedItem, showCheckmark, justifyContent }),
    }),
    [selectedItem, showCheckmark, justifyContent],
  );

  if (asAddon) {
    return (
      <Flexbox container justifyContent="space-between" alignItems="center">
        <Typography type="secondary" color={(t) => t.color.label}>
          {label}
        </Typography>
        <StyledDiv>
          <Input.Select
            id="control-list-item-select"
            label={label}
            components={customComponents}
            onChange={onChange}
            options={options}
            listPosition="left"
            fullWidth
            hideLabel
            noFormField
            listWidth={listWidth}
            disabled={disabled}
            preventScroll
            placement={placement}
          />
        </StyledDiv>
      </Flexbox>
    );
  }

  return (
    <ControlsListItem cursor="default" disabled={disabled}>
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
          <StyledDiv>
            <Input.Select
              id="control-list-item-select"
              label={label}
              components={customComponents}
              onChange={onChange}
              options={options}
              listPosition="left"
              fullWidth
              hideLabel
              noFormField
              listWidth={listWidth}
              disabled={disabled}
              preventScroll
              placement={placement}
            />
          </StyledDiv>
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
