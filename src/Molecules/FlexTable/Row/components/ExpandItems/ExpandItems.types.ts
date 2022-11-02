import React, { ReactNode } from 'react';
import { MediaRelatedProps } from '../../../shared/shared.types';

export type RenderFunc = () => ReactNode;

type TextWrapperProps = {
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

export type TextWrapperComponent = React.FC<TextWrapperProps>;

export type ExpandItemProps = {
  label: ReactNode | RenderFunc;
  value: ReactNode | RenderFunc;
  hidden?: boolean;
} & MediaRelatedProps<{ hidden?: boolean }>;

export type ExpandItems = Array<ExpandItemProps>;

type Items = {
  TextWrapper: TextWrapperComponent;
};

export type ExpandItemComponent = React.FC<{ item: ExpandItemProps; mobileItem?: boolean }> & Items;

export type ExpandItemsComponent = React.FC<{ items: ExpandItems }>;

export type ExpandItemMediaProps = {
  xs: { hidden?: boolean };
} & MediaRelatedProps<{ hidden?: boolean }>;
