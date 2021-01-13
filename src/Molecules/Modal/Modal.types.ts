export type InnerProps = {
  className?: string;
  closeTitle?: string;
  onClose?: Function;
  title?: React.ReactNode;
  footer?: React.ReactNode;
  hideClose?: boolean;
  /** @default true */
  fullScreenMobile?: boolean;
  /** @default false */
  closeOnBackdropClick?: boolean;
  isStatusModal?: boolean;
  onAnimationComplete?: () => void;
};

export type BackdropProps = {
  onClick: (e: React.ChangeEvent<HTMLElement>) => void;
  fullScreenMobile?: boolean;
};

export type DialogProps = {
  show: boolean;
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
  fullScreenMobile?: boolean;
  isStatusModal?: boolean;
};

export type Props = {
  open?: boolean;
  /** @default false */
  autoFocus?: boolean;
} & InnerProps;
