/* eslint-disable no-alert */
import React, { useState } from 'react';
import { Meta } from '@storybook/react';

import ProgressIndicator from '.';
import { Button, Card, Flexbox, Icon, Media } from '../..';

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
        closeCallback={() => alert('close callback')}
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
        closeCallback={() => alert('close callback')}
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

export const WithButtonInfoAndExitCallback = () => {
  const [currentStep, setCurrentStep] = useState(2);
  return (
    <>
      <ProgressIndicator
        buttonCallback
        title="Very long Progress flow title text Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer condimentum ipsum eget neque venenatis"
        numberOfSteps={3}
        currentStep={currentStep}
        infoCallback={() => alert('info callback')}
        closeCallback={() => alert('close callback')}
        exitText="Save & exit text"
        infoText="info button text"
        infoIcon="help"
      />
      <Flexbox container justifyContent="space-around">
        <Button onClick={() => setCurrentStep(1)}>1</Button>
        <Button onClick={() => setCurrentStep(2)}>2</Button>
        <Button onClick={() => setCurrentStep(3)}>3</Button>
      </Flexbox>
    </>
  );
};

export const WithButtonCallbackNoInfo = () => {
  const [currentStep, setCurrentStep] = useState(2);
  return (
    <>
      <ProgressIndicator
        buttonCallback
        title="Progress flow title"
        numberOfSteps={3}
        currentStep={currentStep}
        closeCallback={() => alert('close callback')}
        exitText="Exit"
      />
      <Flexbox container justifyContent="space-around">
        <Button onClick={() => setCurrentStep(1)}>1</Button>
        <Button onClick={() => setCurrentStep(2)}>2</Button>
        <Button onClick={() => setCurrentStep(3)}>3</Button>
      </Flexbox>
    </>
  );
};

export const WithButtonInfoNoCallbackNoBackCallback = () => {
  const [currentStep, setCurrentStep] = useState(2);

  return (
    <>
      <ProgressIndicator
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

export const WithCustomInfoCallbackElement = () => {
  const [currentStep, setCurrentStep] = useState(2);
  return (
    <>
      <ProgressIndicator
        buttonCallback
        infoCallback={
          <>
            <Media query={(t) => t.media.lessThan(t.breakpoints.sm)}>
              <Button.Icon onClick={() => alert('info custom button')}>
                <Icon.More16 color="currentColor" />
              </Button.Icon>
            </Media>
            <Media query={(t) => t.media.greaterThan(t.breakpoints.sm)}>
              <Button.Pill onClick={() => alert('info custom button')}>
                custom read more button
              </Button.Pill>
            </Media>
          </>
        }
        title="Progress flow title"
        numberOfSteps={3}
        currentStep={currentStep}
        closeCallback={() => alert('close callback')}
        exitText="Exit"
      />
      <Card>
        <Flexbox container justifyContent="space-around">
          <Button onClick={() => setCurrentStep(1)}>1</Button>
          <Button onClick={() => setCurrentStep(2)}>2</Button>
          <Button onClick={() => setCurrentStep(3)}>3</Button>
        </Flexbox>
      </Card>
    </>
  );
};
