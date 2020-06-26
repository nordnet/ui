import React from 'react';
import styled from 'styled-components';
import { IconBase } from '../IconBase';
import { BaseProps } from '../IconBase.types';

type Direction = {
  direction: 'up' | 'right' | 'down' | 'left';
};

const DIRECTION = {
  up: 180,
  down: 0,
};

const StyledIconBase = styled(IconBase)<Direction>`
  transform: ${p => `rotate(${DIRECTION[p.direction]}deg`});
`;

export const ThinChevron = ({ direction = 'down', ...props }: BaseProps & Direction) => {
  return (
    <StyledIconBase direction={direction} {...props} viewBox="0 0 16 16">
      <polygon points="14.620 3.580, 16.000 5.020, 8.000 12.730, 0.000 5.030, 1.400 3.580, 8.000 9.96" />
    </StyledIconBase>
  );
};

ThinChevron.displayName = 'Icon.ThinChevron';
