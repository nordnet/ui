import React from 'react';

type Props = {
  title: string | React.ReactNode;
  grow?: number;
  className?: string;
  children?: React.ReactNode;
};

export type PageHeaderCardComponent = React.FunctionComponent<Props>;
