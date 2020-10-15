import React from 'react';
import { number, array, withKnobs } from '@storybook/addon-knobs';
import ProgressBar from '.';
import { Box, Flexbox } from '../..';

export default {
  title: 'Molecules | ProgressBar',
  parameters: {
    component: ProgressBar,
  },
  decorators: [withKnobs],
};

const getProps = ({ numberOfSteps = 3, currentStep = 1, stepLabels = ['foo', 'bar', 'baz'] }) => ({
  numberOfSteps: number('Number of steps', numberOfSteps),
  currentStep: number('Current step', currentStep),
  stepLabels: array('Step labels', stepLabels),
});

export const Default = () => {
  return (
    <Box px={10}>
      <ProgressBar {...getProps({ numberOfSteps: 3, currentStep: 2, stepLabels: [] })} />
    </Box>
  );
};

export const WithLabels = () => {
  const stepLabels: string[] = ['Lorem ipsum', 'Dolor sit amet', 'Foo bar'];
  return (
    <Box px={10}>
      <ProgressBar {...getProps({ numberOfSteps: 3, currentStep: 2, stepLabels })} />
    </Box>
  );
};

export const StepProgression = () => {
  const stepLabels = ['One', 'Two', 'Three'];
  return (
    <Box px={10}>
      <Flexbox container direction="column" gutter={2}>
        <ProgressBar numberOfSteps={3} currentStep={1} stepLabels={stepLabels} />
        <ProgressBar numberOfSteps={3} currentStep={2} stepLabels={stepLabels} />
        <ProgressBar numberOfSteps={3} currentStep={3} stepLabels={stepLabels} />
      </Flexbox>
    </Box>
  );
};

export const FailureStep = () => {
  const stepLabels = ['One', 'Two', 'Failed step', 'Four'];
  return (
    <Box px={10}>
      <Flexbox container direction="column" gutter={2}>
        <ProgressBar numberOfSteps={4} currentStep={3} stepLabels={stepLabels} failed />
      </Flexbox>
    </Box>
  );
};

export const LotsOfSteps = () => {
  const stepLabels = ['Lorem', 'Ipsum', 'Dolor', 'Sit', 'Amet', 'Ego', 'Sum'];
  return (
    <Box px={10}>
      <ProgressBar numberOfSteps={7} currentStep={4} stepLabels={stepLabels} />
    </Box>
  );
};

export const CustomColors = () => {
  const stepLabels = ['Done', 'Active', 'Next'];
  return (
    <Box px={10}>
      <ProgressBar
        numberOfSteps={3}
        currentStep={2}
        stepLabels={stepLabels}
        colorDone={(t) => t.color.menuAccent4}
        colorActive={(t) => t.color.menuAccent1}
        colorNext={(t) => t.color.menuAccent2}
        colorText={(t) => t.color.menuAccent5}
        colorLabel={(t) => t.color.cta}
      />
    </Box>
  );
};

export const CustomTitles = () => {
  const stepLabels = ['Huey', 'Dewey', 'Louie'];
  return (
    <Box px={10}>
      <ProgressBar
        numberOfSteps={3}
        currentStep={2}
        stepLabels={stepLabels}
        titleContainer="Donald's Nephews"
        titleDone="The red one"
        titleActive="The blue one"
        titleNext="The green one"
      />
    </Box>
  );
};
