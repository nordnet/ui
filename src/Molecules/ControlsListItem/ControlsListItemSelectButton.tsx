import React from 'react';
import { Flexbox, Icon } from '../..';
import { StyledTypography, SelectWrapper } from './ControlsListItemButton.styles';

const ControlsListItemSelectButton = (buttonText: string | React.ReactElement) => {
  return (
    <SelectWrapper>
      <Flexbox container alignItems="center" gutter={1}>
        <StyledTypography type="secondary" weight="bold" color={(t) => t.color.text}>
          {buttonText}
        </StyledTypography>
        <Icon.ChevronDown8 />
      </Flexbox>
    </SelectWrapper>
  );
};

export default ControlsListItemSelectButton;
