export type PillButtonProps = {
  /** @default primary */
  variant?: 'primary' | 'secondary' | 'neutral' | 'negative' | 'tertiary';
  /**
   * @default m
   */
  size?: 's' | 'm' | 'l';
  as?: any;
  children: React.ReactNode;
  className?: string;
  /** @default true */
  delayLoadingSpinnerAnimation?: boolean | number;
  disabled?: boolean;
  external?: boolean;
  form?: string;
  fullServerRedirect?: boolean;
  fullWidth?: boolean;
  icon?: React.ReactNode;
  /** @default left */
  iconPlacement?: 'left' | 'right';
  id?: string;
  loading?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  ref?: React.Ref<HTMLAnchorElement> | React.Ref<HTMLButtonElement>;
  rel?: string;
  target?: '_blank' | '_self';
  to?: any;
} & Pick<React.DOMAttributes<HTMLButtonElement>, 'onMouseEnter' | 'onMouseLeave' | 'onMouseOver'>;

export type InnerProps = Omit<PillButtonProps, 'variant' | 'fullWidth'> & {
  $variant?: PillButtonProps['variant'];
  $fullWidth?: PillButtonProps['fullWidth'];
  $loading?: PillButtonProps['loading'];
};

export type PillButtonComponent = React.ForwardRefExoticComponent<
  React.PropsWithoutRef<PillButtonProps> &
    React.RefAttributes<HTMLAnchorElement | HTMLButtonElement>
>;
