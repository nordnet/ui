import React from 'react';

export type InternalProps = {
  height?: number;
};
export type Props = {
  height?: number;
  country: string;
};
export type FlagComponent = React.FunctionComponent<Props>;
