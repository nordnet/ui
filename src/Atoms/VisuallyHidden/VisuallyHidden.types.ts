import React from 'react';

type Props = {
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
};

export type VisuallyHiddenComponent = React.FunctionComponent<Props>;
