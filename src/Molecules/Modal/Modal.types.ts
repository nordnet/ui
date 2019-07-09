export type Props = {
  className?: string;
  onClose?: Function;
  title?: string;
};

export type DialogProps = {
  show: boolean;
};

export type WrapperProps = {
  open?: boolean;
} & Props;
