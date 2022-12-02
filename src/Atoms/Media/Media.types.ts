import { Theme } from '../../theme/theme.types';

export type Props = {
  as?: keyof JSX.IntrinsicElements | React.ComponentType<{ className?: string }>;
  query: string | ((theme: Theme) => string);
  children?: React.ReactNode;
};
