import React, { ReactNode } from 'react';

export type ExpandItemProps = {
  label: ReactNode;
  value: ReactNode;
};

export type ExpandItems = Array<ExpandItemProps>;

type Items = {
  TextWrapperLabel: React.FC;
  TextWrapperValue: React.FC;
};

export type ExpandItemComponent = React.FC<{ item: ExpandItemProps }> & Items;

export type ExpandItemsComponent = React.FC<{ items: ExpandItems }>;
