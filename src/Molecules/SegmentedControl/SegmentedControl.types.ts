import React, { ReactNode } from 'react';

export type MouseEventProps = ((e: React.MouseEvent, selected: number) => void) | undefined;

export type OverlayProps = {
  $count: number;
  $selected: number;
  disabled?: boolean;
};

export type ItemProps = {
  itemId: number;
  onItemClick?: MouseEventProps;
  className?: string;
  active?: boolean;
  children: ReactNode;
};

export type ContainerProps = {
  selectedInitially?: number;
  /**
   * Using this prop will enable controlled behaviour
   * https://reactjs.org/docs/forms.html#controlled-components
   */
  selected?: number;
  className?: string;
  onClick?: MouseEventProps;
  disabled?: boolean;
};

export type ItemComponent = React.FC<ItemProps>;
export type SegmentedControlComponent = React.FC<ContainerProps> & { Item: ItemComponent };
