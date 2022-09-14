import { Theme } from '../theme/theme.types';

type Breakpoint = keyof Theme['breakpoints'];

export const above =
  (breakpoint: Breakpoint) =>
  ({ theme }: { theme: Theme }) => {
    return theme.media.greaterThan(theme.breakpoints[breakpoint]);
  };

export const below =
  (breakpoint: Breakpoint) =>
  ({ theme }: { theme: Theme }) => {
    return theme.media.lessThan(theme.breakpoints[breakpoint]);
  };

export const between =
  (firstBreakpoint: Breakpoint, secondBreakpoint: Breakpoint) =>
  ({ theme }: { theme: Theme }) => {
    return theme.media.between(
      theme.breakpoints[firstBreakpoint],
      theme.breakpoints[secondBreakpoint],
    );
  };
