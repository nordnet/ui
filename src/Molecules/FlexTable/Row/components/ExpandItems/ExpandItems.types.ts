import React, { ReactNode } from 'react';
import { FontSize } from '../../../shared/shared.types';

type RenderPropArguments = { fontSize: FontSize };
export type RenderFunc = (props: RenderPropArguments) => ReactNode;

export type ExpandItemProps = {
  label: ReactNode | RenderFunc;
  value: ReactNode | RenderFunc;
  hidden?: boolean;
};

export type ExpandItems = Array<ExpandItemProps>;

type Items = {
  TextWrapperLabel: React.FC<{ fontSize: FontSize }>;
  TextWrapperValue: React.FC<{ fontSize: FontSize }>;
};

export type ExpandItemComponent = React.FC<{ item: ExpandItemProps }> & Items;

export type ExpandItemsComponent = React.FC<{ items: ExpandItems }>;

export type TextWrapperComponent = React.FC<{ fontSize: FontSize; truncate?: boolean }>;
