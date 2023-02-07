import { ColorFn } from 'common/Types';
import React from 'react';

export type IconSizeProp = 's' | 'm' | 'l' | 'xl' | number;

export type Props = {
  /** Needs to be between 0 and 5 */
  rating: number;
  /** @default m
   *  unit based or string size  */
  size?: IconSizeProp;
  outOf?: number;
  height?: string;
  colorOn?: ColorFn;
  colorOff?: ColorFn;
};

export type RatingComponent = React.FunctionComponent<Props>;
