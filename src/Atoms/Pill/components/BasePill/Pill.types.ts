import { ColorFn } from '../../../../common/Types/sharedTypes';

export type Props = {
  barColor?: ColorFn;
  noPadding?: boolean;
  children: React.ReactNode;
  className?: string;
};
