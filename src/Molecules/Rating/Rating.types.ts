import React from 'react';

export type Props = {
  /** Needs to be between 0 and 5 */
  rating: number;
  /** @default 5
   *  unit based */
  size?: number;
};

export type RatingComponent = React.FunctionComponent<Props>;
