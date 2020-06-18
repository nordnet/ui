export type InnerProps = {
  className?: string;
  closeTitle?: string;
  onClose?: Function;
  title?: React.ReactNode;
  footer?: React.ReactNode;
  hideClose?: boolean;
  /** @default false */
  closeOnBackdropClick?: boolean;
};

export type BackdropProps = {
  onClick: (e: React.ChangeEvent<HTMLElement>) => void;
};

export type DialogProps = {
  show: boolean;
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
};

export type Props = {
  open?: boolean;
  /** @default false */
  autoFocus?: boolean;
} & InnerProps;
