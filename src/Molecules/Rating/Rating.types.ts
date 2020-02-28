import React from 'react';
import { InjectedIntlProps } from 'react-intl';

export type Props = {
  /** Needs to be between 0 and 5 */
  rating: number;
};

export type RatingComponent = React.FunctionComponent<Props & InjectedIntlProps>;
