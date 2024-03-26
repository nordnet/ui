import React from 'react';
import { ColorFn } from '../../common/Types/sharedTypes';

export type ButtonProps = {
  label: string;
  onClick: () => void;
};

export type StepProps = {
  date?: Date | string;
  text: React.ReactNode;
  button?: ButtonProps;
  status?: 'SUCCESS' | 'FAILURE' | 'ACTIVE' | 'PENDING' | 'NEUTRAL' | 'WARNING';
  icon?: JSX.Element;
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
  colorFailure?: ColorFn;
  colorWarning?: ColorFn;
  hideSeparators?: boolean;
};

export type TimelineComponent = React.FC<Props>;
