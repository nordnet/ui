import React from 'react';

type Props = {
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
  children?: React.ReactNode;
};

export type VisuallyHiddenComponent = React.FunctionComponent<Props>;
