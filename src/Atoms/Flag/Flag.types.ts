import React from 'react';

export type Props = {
  height?: number;
  width?: number;
};
export type InternalProps = {
  height?: number;
  width?: number;
  country: string;
};

export type FlagComponent = React.FunctionComponent<InternalProps>;
