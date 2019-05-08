import React from 'react';

export type InternalProps = {
  height?: number;
  inline?: boolean;
};
export type Props = {
  height?: number;
  country: string;
  inline?: boolean;
};
export type FlagComponent = React.FunctionComponent<Props>;
