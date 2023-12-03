import React, { ReactNode } from 'react';
import { MediaRelatedProps } from '../../../shared/shared.types';

export type RenderFunc = () => ReactNode;

export type TextWrapperProps = {
  className?: string;
  /**
   * Truncate the text inside and a tooltip on hover when truncated
   * @default true
   */
  truncate?: boolean;
  /**
   * Sets text color to ´label´ when true
   * @default false
   */
  isLabel?: boolean;
  children?: React.ReactNode;
};

export type ItemProps = {
  label: ReactNode | RenderFunc;
  value: ReactNode | RenderFunc;
  hidden?: boolean;
} & MediaRelatedProps<{ hidden?: boolean }>;

export type ExpandItems = Array<ItemProps>;

export type ExpandItemProps = { item: ItemProps; mobileItem?: boolean };

export type ExpandItemsProps = { items: ExpandItems };

export type ExpandItemMediaProps = {
  xs: { hidden?: boolean };
} & MediaRelatedProps<{ hidden?: boolean }>;
