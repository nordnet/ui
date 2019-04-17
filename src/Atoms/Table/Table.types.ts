export type Props = {
  children: React.ReactNode;
  tableLayout?: string;
  width?: number | string;
  maxHeight?: number;
};

export type TableComponent = React.FunctionComponent<Props>;
