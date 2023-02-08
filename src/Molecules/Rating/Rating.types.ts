import React, { ReactElement } from 'react';

export type IconSizeProp = 's' | 'm' | 'l' | 'xl' | number;

type NoneOrBoth =
  | {
      activeIcon?: never;
      inactiveIcon?: never;
    }
  | {
      activeIcon: ReactElement;
      inactiveIcon: ReactElement;
    };

export type Props = {
  /** Needs to be between 0 and 5 */
  rating: number;
  /** @default m
   *  unit based or string size  */
  size?: IconSizeProp;
  outOf?: number;
  height?: string;
};

export type RatingComponent = React.FunctionComponent<Props & NoneOrBoth>;
