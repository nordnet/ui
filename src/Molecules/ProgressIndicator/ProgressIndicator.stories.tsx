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

export const NoBackButton = () => {
  const [currentStep, setCurrentStep] = useState(2);
  return (
    <>
      <ProgressIndicator
        numberOfSteps={3}
        currentStep={currentStep}
        closeCallback={() => alert('back callback')}
        infoCallback={() => alert('info callback')}
      />
      <Flexbox container justifyContent="space-around">
        <Button onClick={() => setCurrentStep(1)}>1</Button>
        <Button onClick={() => setCurrentStep(2)}>2</Button>
        <Button onClick={() => setCurrentStep(3)}>3</Button>
      </Flexbox>
    </>
  );
};

export const NoBackNoHelpButton = () => {
  const [currentStep, setCurrentStep] = useState(2);
  return (
    <>
      <ProgressIndicator
        numberOfSteps={3}
        currentStep={currentStep}
        closeCallback={() => alert('back callback')}
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

export const NoTitle = () => {
  const [currentStep, setCurrentStep] = useState(2);
  return (
    <>
      <ProgressIndicator numberOfSteps={3} currentStep={currentStep} />
      <Flexbox container justifyContent="space-around">
        <Button onClick={() => setCurrentStep(1)}>1</Button>
        <Button onClick={() => setCurrentStep(2)}>2</Button>
        <Button onClick={() => setCurrentStep(3)}>3</Button>
      </Flexbox>
    </>
  );
};

export const WithTwoCompletionBar = () => {
  const [experienceStep, setExperienceStep] = useState(0);
  const [knowledgeStep, setKnowledgeStep] = useState(0);

  return (
    <>
      <ProgressIndicator
        infoCallback={() => alert('info callback')}
        closeCallback={() => alert('close callback')}
        backCallback={() => alert('back callback')}
        title="Progress flow title"
        numberOfSteps={[3, 5]}
        currentStep={[experienceStep, knowledgeStep]}
      />

      <Flexbox container direction="column">
        <Flexbox item>First Steps</Flexbox>
        <Flexbox item container justifyContent="flex-start">
          <Button onClick={() => setExperienceStep(1)}>1</Button>
          <Button onClick={() => setExperienceStep(2)}>2</Button>
          <Button onClick={() => setExperienceStep(3)}>3</Button>
        </Flexbox>
      </Flexbox>

      <Flexbox container direction="column">
        <Flexbox item>Second Steps</Flexbox>
        <Flexbox item container justifyContent="flex-start">
          <Button onClick={() => setKnowledgeStep(1)}>1</Button>
          <Button onClick={() => setKnowledgeStep(2)}>2</Button>
          <Button onClick={() => setKnowledgeStep(3)}>3</Button>
          <Button onClick={() => setKnowledgeStep(4)}>4</Button>
          <Button onClick={() => setKnowledgeStep(5)}>5</Button>
        </Flexbox>
      </Flexbox>
    </>
  );
};
