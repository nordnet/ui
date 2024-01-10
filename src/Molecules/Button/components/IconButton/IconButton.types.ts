export type IconButtonProps = {
  /** @default primary */
  variant?: 'primary' | 'secondary' | 'neutral' | 'negative';
  /**
   * @default m
   * @deprecated s
   */
  size?: 's' | 'm' | 'l';
  as?: any;
  children: React.ReactChild | React.ReactChild[];
  className?: string;
  /** @default true */
  delayLoadingSpinnerAnimation?: boolean | number;
  disabled?: boolean;
  external?: boolean;
  form?: string;
  fullServerRedirect?: boolean;
  id?: string;
  loading?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  ref?: React.Ref<HTMLAnchorElement> | React.Ref<HTMLButtonElement>;
  rel?: string;
  target?: '_blank' | '_self';
  to?: any;
} & Pick<React.DOMAttributes<HTMLButtonElement>, 'onMouseEnter' | 'onMouseLeave' | 'onMouseOver'>;

export type InnerProps = Omit<IconButtonProps, 'variant'> & {
  $variant?: IconButtonProps['variant'];
  $loading?: IconButtonProps['loading'];
};

export type IconButtonComponent = React.ForwardRefExoticComponent<
  React.PropsWithoutRef<IconButtonProps> &
    React.RefAttributes<HTMLAnchorElement | HTMLButtonElement>
>;
