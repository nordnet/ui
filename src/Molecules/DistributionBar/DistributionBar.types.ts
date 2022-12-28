import React, { ReactElement } from 'react';
import { Props as NumberProps } from '../Number/Number.types';

export type PartialNumberProps = Omit<NumberProps, 'value'>;

export type Props = {
  label: string | ReactElement;
  icon?: ReactElement;
  /**
   * @weight
    Should be number 0-100
   */
  weight: number;
  children?: React.ReactNode;
  delay?: number;
};
