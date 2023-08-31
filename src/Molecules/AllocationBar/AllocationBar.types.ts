import { ColorFn } from 'common/Types';

export type AllocationBarProps = {
  allocations: Allocation[];
  height?: number;
};

export type StyledBarItemProps = {
  $color: ColorFn;
  $isFirst: boolean;
  $isLast: boolean;
};

type Allocation = {
  label: string;
  weight: number;
  color: ColorFn;
};
