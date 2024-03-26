import { ColorFn } from '../../common/Types/sharedTypes';

export type Props = {
  children: React.ReactNode;
  background?: ColorFn;
  className?: string;
};

export type OuterProps = {
  background?: string;
  className?: string;
};
