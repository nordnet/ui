import React, { ReactElement } from 'react';
import { Props as NumberProps } from '../Number/Number.types';

export type PartialNumberProps = Omit<NumberProps, 'value'>;

export type Props = {
  name: string | ReactElement;
  icon?: ReactElement;
  truncatedLabel: string;
  weight: number;
  children?: React.ReactNode;
  inTable?: boolean;
  maxWidthName?: string;
  delay?: number;
};
