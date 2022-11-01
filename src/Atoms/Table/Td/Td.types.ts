export type Props = {
  textAlign?: string;
  ellipsis?: boolean;
  className?: string;
  children: React.ReactNode;
};

export type TdComponent = React.FunctionComponent<Props>;
