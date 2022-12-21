import React, { ReactElement } from 'react';
import { Props as NumberProps } from '../Number/Number.types';

export type PartialNumberProps = Omit<NumberProps, 'value'>;

export type Props = {
  label: string | ReactElement;
  icon?: ReactElement;
  truncatedLabel?: string;
  /**
   * @weight
    Should be number 0-100
   */
  weight: number;
  children?: React.ReactNode;
  /**
   * @maxWidthLabel
    Maximum space the label are allowed to use
   */
  maxWidthLabel?: string;
  delay?: number;
};
