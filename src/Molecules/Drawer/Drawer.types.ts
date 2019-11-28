export type Props = {
  className?: string;
  onClose?: Function;
  title?: string;
  open?: boolean;
};

export type DrawerComponent = React.FC<Props>;
