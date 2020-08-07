import React from 'react';
import { action } from '@storybook/addon-actions';
import docs from './MultiStepProgress.mdx';
import { MultiStepProgress } from './MultiStepProgress';

const mockedSteps = [
  { current: false, done: true, label: 'Investment objective', name: 'investment_objective' },
  {
    current: true,
    done: false,
    label: 'Time and risk',
    name: 'time_and_risk',
    steps: [
      { current: false, done: true, label: 'Investment period', name: 'investment_period' },
      { current: true, done: false, label: 'Frequency', name: 'frequency' },
      { current: false, done: false, label: 'Amount', name: 'amount' },
    ],
  },
  { current: false, done: false, label: 'Allocations', name: 'allocations' },
];

const mockedStepsNotStarted = [
  { current: false, done: false, label: 'Investment objective', name: 'investment_objective' },
  {
    current: true,
    done: false,
    label: 'Time and risk',
    name: 'time_and_risk',
    steps: [
      { current: false, done: false, label: 'Investment period', name: 'investment_period' },
      { current: false, done: false, label: 'Frequency', name: 'frequency' },
      { current: false, done: false, label: 'Amount', name: 'amount' },
    ],
  },
  { current: false, done: false, label: 'Allocations', name: 'allocations' },
];

export default {
  title: 'Molecules | Multi Step Progress',

  parameters: {
    ...docs.parameters,
    component: MultiStepProgress,
  },
};

export const basicMultiStepProgress = () => (
  <MultiStepProgress
    steps={mockedSteps}
    onStepClick={action(`step click`)}
    onSubStepClick={action(`sub step click`)}
  />
);

basicMultiStepProgress.story = {
  name: 'Basic Multi Step Progress',
};

export const notStartedMultiStepProgress = () => (
  <MultiStepProgress
    steps={mockedStepsNotStarted}
    onStepClick={action(`step click`)}
    onSubStepClick={action(`sub step click`)}
  />
);

notStartedMultiStepProgress.story = {
  name: 'Not Started Multi Step Progress',
};
