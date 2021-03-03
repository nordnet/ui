type HtmlDivProps = React.HTMLAttributes<HTMLDivElement>;

export type Props = {
  className?: string;
  /** @default true */
  closeOnClickOutside?: boolean;
  /** Useful when integrating with FadedScroll component */
  disableContentStyle?: boolean;
  footer?: React.ReactNode;
  onClose?: Function;
  title?: React.ReactNode;
  open?: boolean;
  ref?: React.Ref<HTMLDivElement>;
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
  onExitAnimationComplete?: () => void;
  onAnimationComplete?: () => void;
  disableInitialAnimation?: boolean;
} & Omit<HtmlDivProps, 'title'>;

export type TitleProps = {
  title: React.ReactNode;
  uid: string;
};
