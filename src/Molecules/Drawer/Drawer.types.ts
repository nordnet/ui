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
  closeButtonTitle?: string;
  open?: boolean;
  ref?: React.Ref<HTMLDivElement>;
  as?: any;
  onExitAnimationComplete?: () => void;
  onAnimationComplete?: () => void;
  disableInitialAnimation?: boolean;
  preventOnClickOutsideDataAttributes?: string[];
  children?: React.ReactNode;
} & Omit<HtmlDivProps, 'title'>;

export type TitleProps = {
  title: React.ReactNode;
  uid: string;
};
