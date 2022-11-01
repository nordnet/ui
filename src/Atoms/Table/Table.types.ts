export type Props = {
  tableLayout?: string;
  width?: string;
  maxHeight?: number;
  children: React.ReactNode;
};

export type TableComponent = React.FunctionComponent<Props>;
