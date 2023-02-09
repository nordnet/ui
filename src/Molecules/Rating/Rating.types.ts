import React, { ReactElement } from 'react';

export type IconSizeProp = 's' | 'm' | 'l' | 'xl' | number;

type NoneOrBothIcons =
  | {
      activeIcon?: never;
      inactiveIcon?: never;
      /** @default m
       *  unit based or string size  */
      size?: IconSizeProp;
    }
  | {
      activeIcon: ReactElement;
      inactiveIcon: ReactElement;
      size?: never;
    };

export type Props = {
  /** Needs to be between 0 and 5 */
  rating: number;
  outOf?: number;
  height?: string;
} & NoneOrBothIcons;

export type RatingComponent = React.FunctionComponent<Props>;
