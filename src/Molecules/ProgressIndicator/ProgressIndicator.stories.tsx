/* eslint-disable no-alert */
import React, { useState } from 'react';
import { Meta } from '@storybook/react';

import ProgressIndicator from '.';
import { Button, Flexbox } from '../..';

export default {
  title: 'Molecules / ProgressIndicator',
  component: ProgressIndicator,
} as Meta;

export const Default = () => {
  const [currentStep, setCurrentStep] = useState(2);

  return (
    <>
      <ProgressIndicator
        infoCallback={() => alert('info callback')}
        closeCallback={() => alert('close callback')}
        backCallback={() => alert('back callback')}
        title="Progress flow title"
        numberOfSteps={3}
        currentStep={currentStep}
      />

      <Flexbox container justifyContent="space-around">
        <Button onClick={() => setCurrentStep(1)}>1</Button>
        <Button onClick={() => setCurrentStep(2)}>2</Button>
        <Button onClick={() => setCurrentStep(3)}>3</Button>
      </Flexbox>
    </>
  );
};

export const NoHelpButton = () => {
  const [currentStep, setCurrentStep] = useState(2);

  return (
    <>
      <ProgressIndicator
        closeCallback={() => alert('close callback')}
        backCallback={() => alert('back callback')}
        title="Progress flow title"
        numberOfSteps={3}
        currentStep={currentStep}
      />

      <Flexbox container justifyContent="space-around">
        <Button onClick={() => setCurrentStep(1)}>1</Button>
        <Button onClick={() => setCurrentStep(2)}>2</Button>
        <Button onClick={() => setCurrentStep(3)}>3</Button>
      </Flexbox>
    </>
  );
};

export const NoCloseButton = () => {
  const [currentStep, setCurrentStep] = useState(2);

  return (
    <>
      <ProgressIndicator
        backCallback={() => alert('back callback')}
        infoCallback={() => alert('info callback')}
        title="Progress flow title"
        numberOfSteps={3}
        currentStep={currentStep}
      />

      <Flexbox container justifyContent="space-around">
        <Button onClick={() => setCurrentStep(1)}>1</Button>
        <Button onClick={() => setCurrentStep(2)}>2</Button>
        <Button onClick={() => setCurrentStep(3)}>3</Button>
      </Flexbox>
    </>
  );
};

export const NoButtons = () => {
  const [currentStep, setCurrentStep] = useState(2);
  return (
    <>
      <ProgressIndicator title="Progress flow title" numberOfSteps={3} currentStep={currentStep} />
      <Flexbox container justifyContent="space-around">
        <Button onClick={() => setCurrentStep(1)}>1</Button>
        <Button onClick={() => setCurrentStep(2)}>2</Button>
        <Button onClick={() => setCurrentStep(3)}>3</Button>
      </Flexbox>
    </>
  );
};
