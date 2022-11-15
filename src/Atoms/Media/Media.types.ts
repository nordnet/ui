import { Theme } from '../../theme/theme.types';

export type Props = {
  as?: any;
  query: string | ((theme: Theme) => string);
  children?: React.ReactNode;
};
