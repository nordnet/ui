export type AllocationBarProps = {
  allocations: Allocation[];
};

type Allocation = {
  label: string;
  weight: number;
  color: string;
};
