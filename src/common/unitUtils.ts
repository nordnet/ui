import { Theme } from '../theme/theme.types';

export const units =
  (unit: number) =>
  ({ theme }: { theme: Theme }) => {
    return theme.spacing.unit(unit);
  };
