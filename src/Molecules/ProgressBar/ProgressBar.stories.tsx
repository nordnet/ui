import React from 'react';
import { Meta, Story } from '@storybook/react';

import ProgressBar from '.';
import { Box, Flexbox } from '../..';
import { Props } from './ProgressBar.types';

export default {
  title: 'Molecules / ProgressBar',
  component: ProgressBar,
} as Meta;

const Template: Story<Props> = (args) => <ProgressBar {...args} />;

export const DefaultStory = Template.bind({});
DefaultStory.args = {
  currentStep: 2,
  numberOfSteps: 3,
  stepLabels: [],
};
DefaultStory.storyName = 'Default';

export const WithLabels = Template.bind({});
WithLabels.args = {
  ...DefaultStory.args,
  stepLabels: ['Lorem ipsum', 'Dolor sit amet', 'Foo bar'],
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

export const WarningStep = () => {
  const stepLabels = ['One', 'Two', 'Step with warning', 'Four'];
  return (
    <Box px={10}>
      <Flexbox container direction="column" gutter={2}>
        <ProgressBar numberOfSteps={4} currentStep={3} stepLabels={stepLabels} warning />
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
