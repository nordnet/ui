import { Theme } from '../../theme/theme.types';

/** @default general */
export type Variant = 'error' | 'success' | 'warning' | 'general';

export type InfoBarProps = {
  className?: string;
  /** @default general */
  variant?: Variant;
  onClose?: () => void;
};

export type InfoBarIconProps = {
  /** @default general */
  variant?: Variant;
};

export type FnHelper = {
  /** @default general */
  variant?: Variant;
  theme: Theme;
};
