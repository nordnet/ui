import { ColorFn } from 'common/Types';

export type TooltipContentProps = {
  label: React.ReactNode;
  maxWidth?: number;
  backgroundColor: ColorFn;
  borderColor: ColorFn;
  ariaLabel?: string;
  bottomSheet: boolean;
};
