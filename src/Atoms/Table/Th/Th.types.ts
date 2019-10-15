export type Props = {
  textAlign?: string;
  width?: string;
  className?: string;
  ellipsis?: boolean;
  scope?: 'col' | 'row' | 'colgroup' | 'rowgroup';
};

export type ThComponent = React.FunctionComponent<Props>;
