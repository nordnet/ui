import React from 'react';
import { Theme } from '../../theme/theme.types';

type Values<ObjectType> = ObjectType extends Record<any, infer K> ? K : never; // c

type ColorFn = (t: Theme) => Values<Theme['color']>;

export type ButtonProps = {
  label: string;
  onClick: () => void;
};

export type StepProps = {
  date: Date | string;
  text: React.ReactNode;
  button?: ButtonProps;
  status?: 'SUCCESS' | 'FAILURE' | 'ACTIVE' | 'PENDING' | 'NEUTRAL';
};

export type Props = {
  steps: StepProps[];
  /**
   * Color of successful line
   * @default positive
   *  */
  colorSuccess?: ColorFn;
  /**
   * Color of line for failure and active step
   * @default gray4
   *  */
  colorNext?: ColorFn;
  hideSeparators?: boolean;
};

export type TimelineComponent = React.FC<Props>;
