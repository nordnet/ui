import React from 'react';

type Props = {
  title: string | React.ReactNode;
  className?: string;
  children?: React.ReactNode;
};

export type PageHeaderCardComponent = React.FunctionComponent<Props>;
