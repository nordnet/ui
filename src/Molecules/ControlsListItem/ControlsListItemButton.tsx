import React from 'react';
import styled from 'styled-components';
import { Button, Typography, CssGrid as Grid } from '../..';
import ControlsListItem from './ControlsListItem';
import { ControlsListItemButton as Props } from './ControlsListItem.types';

const StyledButton = styled(Button)`
  &:hover {
    color: ${(p) => p.theme.color.buttonHoverSecondary};
  }
`;

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

const ControlsListItemButton: React.FC<Props> = ({
  label,
  onClick,
  Icon,
  buttonText,
  description,
}) => {
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
          <StyledButton variant="neutral" color={(t) => t.color.cta} onClick={onClick}>
            {buttonText}
          </StyledButton>
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

export default ControlsListItemButton;
