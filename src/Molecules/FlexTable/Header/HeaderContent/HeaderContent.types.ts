import React from 'react';
import { FontSize } from '../../shared/shared.types';

export type TextWrapperProps = {
  fontSize?: FontSize;
  sorted?: boolean;
};

export type TextWrapperComponent = React.FC<TextWrapperProps>;

export type SortOrder = 'ascending' | 'descending' | 'none' | null;

export type SortIconProps = {
  sortOrder: NonNullable<SortOrder>;
};

export type SortIconComponent = React.FC<SortIconProps>;

export type SortButtonProps = {
  onClick: () => void;
  children: React.ReactChild | React.ReactChild[];
};

export type SortButtonComponent = React.FC<SortButtonProps>;

type onSortClick = () => void;

export type UIProps = { onSortClick: onSortClick };

export type Props = { sortable: boolean; sortOrder: SortOrder; sorted: boolean };
