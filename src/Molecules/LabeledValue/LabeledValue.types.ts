import React, { ReactNode } from 'react';

export type Props = {
  children: ReactNode;
  className?: string;
  label: string | React.ReactNode;
};

export type LabeledValueComponent = React.FunctionComponent<Props>;
