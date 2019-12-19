export type Props = {
  className?: string;
  onClose?: Function;
  title?: React.ReactNode;
  open?: boolean;
};

export type TitleProps = {
  title: React.ReactNode;
  uid: string;
};

export type DrawerComponent = React.FC<Props>;
