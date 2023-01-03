import { ColorFn } from 'common/Types';

export type AllocationBarProps = {
  allocations: Allocation[];
  height?: number;
};

type Allocation = {
  label: string;
  weight: number;
  color: ColorFn;
};
