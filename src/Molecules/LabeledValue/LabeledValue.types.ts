import React, { ReactNode } from 'react';

export type Props = {
  label: string | React.ReactNode;
  children: ReactNode;
};

export type LabeledValueComponent = React.FunctionComponent<Props>;
