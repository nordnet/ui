import React from 'react';
import styled from 'styled-components';
import { Button, Flexbox, Typography } from '../..';
import ControlsListItem from './ControlsListItem';
import { ControlsListItemButton as Props } from './ControlsListItem.types';

const StyledButton = styled(Button)`
  &:hover {
    border-bottom: 1px solid ${(p) => p.theme.color.cta};
  }
`;

const ControlsListItemButton: React.FC<Props> = ({
  label,
  onClick,
  Icon,
  buttonText,
  description,
}) => {
  return (
    <ControlsListItem description={description}>
      <Flexbox container justifyContent="space-between" alignItems="center">
        <Flexbox container item gutter={1} alignItems="center">
          {Icon}
          <Typography>{label}</Typography>
        </Flexbox>

        <Flexbox item>
          <StyledButton variant="neutral" color={(t) => t.color.cta} onClick={onClick}>
            {buttonText}
          </StyledButton>
        </Flexbox>
      </Flexbox>
    </ControlsListItem>
  );
};

export default ControlsListItemButton;
