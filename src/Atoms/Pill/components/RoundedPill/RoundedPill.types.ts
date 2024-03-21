import { ColorFn } from '../../../../common/Types/sharedTypes';

export type Props = {
  className?: string;
  label?: string;
  color?: ColorFn;
  development?: number;
  onClose?: () => void;
};

export type CircleProps = {
  $color?: string | ColorFn;
};
