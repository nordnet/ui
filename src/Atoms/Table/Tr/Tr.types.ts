export type Props = {
  textAlign?: string;
  className?: string;
  onClick?: (e: React.MouseEvent) => void;
  children?: React.ReactNode;
};

export type TrComponent = React.FunctionComponent<Props>;
