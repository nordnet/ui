export type InnerProps = {
  className?: string;
  onClose?: Function;
  title?: string;
};

export type DialogProps = {
  show: boolean;
};

export type Props = {
  open?: boolean;
} & InnerProps;
