import React from 'react';
import CssGrid from './CssGrid';
import FlexBox from './Flexbox';

import { Props } from './Container.types';
import { Props as CssGridProps } from './CssGrid/CssGridContainer.types';
import { Props as FlexboxProps } from './Flexbox/FlexboxContainer.types';

export const Grid: React.FunctionComponent<Props> = props => {
  const { twoDimension } = props as CssGridProps;

  return twoDimension ? (
    <CssGrid {...props as CssGridProps} />
  ) : (
    <FlexBox {...props as FlexboxProps} />
  );
};

Grid.displayName = 'Grid.Container';
