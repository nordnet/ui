import React from 'react';
import styled from 'styled-components';
import { IconBase } from '../IconBase';
import { BaseProps } from '../IconBase.types';

type Direction = {
  direction: 'up' | 'right' | 'down' | 'left';
};

const DIRECTION = {
  up: 90,
  right: 180,
  down: 270,
  left: 0,
};

const StyledIconBase = styled(IconBase)<Direction>`
  transform: ${p => `rotate(${DIRECTION[p.direction]}deg`});
`;

export const ThinArrow = (props: BaseProps & Direction) => {
  return (
    <StyledIconBase {...props} viewBox="0 0 15 16">
      <path d="M9.179 1l-6.21 6.222h12.873v1.556L2.97 8.777 9.18 15H6.984L0 8l6.984-7h2.195z" />
    </StyledIconBase>
  );
};

ThinArrow.displayName = 'Icon.ThinArrow';
