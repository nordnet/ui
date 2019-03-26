import React from 'react';
import CssGridCell from './CssGrid';
import FlexBoxCell from './Flexbox';
import { Props, CssGridItemProps, FlexboxItemProps } from './Item.types';

export const Item: React.FC<Props> = props => {
  const { area } = props as CssGridItemProps;

  return typeof area !== 'undefined' ? (
    <CssGridCell {...props as CssGridItemProps} />
  ) : (
    <FlexBoxCell {...props as FlexboxItemProps} />
  );
};
Item.displayName = 'Grid.Item';
