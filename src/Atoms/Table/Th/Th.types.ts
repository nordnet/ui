export type Props = {
  textAlign?: string;
  width?: string;
  className?: string;
  ellipsis?: boolean;
  scope?: 'col' | 'row' | 'colgroup' | 'rowgroup';
  children?: React.ReactNode;
};

export type ThComponent = React.FunctionComponent<Props>;
