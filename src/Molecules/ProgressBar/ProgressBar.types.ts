import React from 'react';
import { ColorFn } from '../../common/Types/sharedTypes';

export type Props = {
  /** Total number of steps in the progress bar */
  numberOfSteps: number;
  /** The currently active step */
  currentStep: number;
  /** Marks active step as failed */
  failed?: boolean;
  /** Marks active step with a warning */
  warning?: boolean;
  /** Label that will be rendered together with each corresponding step bubble
   * The array must be same length as numberOfSteps
   * Labels will be hidden on smaller screen widths */
  stepLabels?: string[];
  /**
   * Color of completed steps and lines leading forward to active step
   * @default positive
   *  */
  colorDone?: ColorFn;
  /**
   * Color of the currently active step
   * @default cta
   *  */
  colorActive?: ColorFn;
  /**
   * Color of all steps not yet completed and lines leading back to active step
   * @default gray4
   *  */
  colorNext?: ColorFn;
  /**
   * Color of all failed steps and lines leading back to active step
   * @default red500
   *  */
  colorFailure?: ColorFn;
  /**
   * Color of the icon on completed steps and number on active and steps not yet completed
   * @default white
   *  */
  colorText?: ColorFn;
  /**
   * Color of the labels rendered next to each step
   * @default gray0
   *  */
  colorLabel?: ColorFn;
  /**
   * Title of entire progress bar component
   * @default 'progress bar'
   *  */
  titleContainer?: string;
  /**
   * Title for all completed steps
   * @default 'step done'
   *  */
  titleDone?: string;
  /**
   * Title for the active step
   * @default 'active step'
   *  */
  titleActive?: string;
  /**
   * Title for all steps not yet completed
   * @default 'step not done'
   *  */
  titleNext?: string;
  /**
   * Title for all failure steps
   * @default 'failure step'
   *  */
  titleFailure?: string;
};

export type ProgressBarComponent = React.FC<Props>;
