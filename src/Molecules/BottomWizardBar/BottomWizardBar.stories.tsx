import React from 'react';
import { action } from '@storybook/addon-actions';
import BottomWizardBar from './BottomWizardBar';

export default {
  title: 'Molecules / Bottom Wizard Bar',
  parameters: {
    component: BottomWizardBar,
  },
};

export const Default = () => (
  <BottomWizardBar
    isLastStep={false}
    isLoading={false}
    onCancel={action('cancel')}
    onNext={action('next')}
    onPrevious={action('previous')}
    onSubmit={action('submit')}
    titleText="Title"
    cancelText="Cancel"
    previousText="Previous"
    nextText="Next"
    submitText="Submit"
    cancelButtonLink="https://nordnet.se/cancel"
    previousButtonLink="https://nordnet.se/previous"
    submitButtonLink="https://nordnet.se/submit"
    nextButtonLink="https://nordnet.se/next"
  />
);

export const WebviewEmbedded = () => (
  <BottomWizardBar
    isLastStep={false}
    isLoading={false}
    isEmbedded
    onCancel={action('cancel')}
    onNext={action('next')}
    onPrevious={action('previous')}
    onSubmit={action('submit')}
    titleText="Title"
    cancelText="Cancel"
    previousText="Previous"
    nextText="Next"
    submitText="Submit"
  />
);

export const WebviewEmbeddedLastStepAndLoading = () => (
  <BottomWizardBar
    isLastStep
    isLoading
    isEmbedded
    onCancel={action('cancel')}
    onNext={action('next')}
    onPrevious={action('previous')}
    onSubmit={action('submit')}
    titleText="Title"
    cancelText="Cancel"
    previousText="Previous"
    nextText="Next"
    submitText="Submit"
  />
);

export const PreviousButtonHidden = () => (
  <BottomWizardBar
    isLastStep={false}
    isLoading={false}
    isEmbedded={false}
    onCancel={action('cancel')}
    onNext={action('next')}
    onPrevious={action('previous')}
    onSubmit={action('submit')}
    titleText="Title"
    cancelText="Cancel"
    previousText="Previous"
    nextText="Next"
    submitText="Submit"
    hidePreviousButton
  />
);

export const PreviousButtonHiddenEmbedded = () => (
  <BottomWizardBar
    isLastStep={false}
    isLoading={false}
    isEmbedded
    onCancel={action('cancel')}
    onNext={action('next')}
    onPrevious={action('previous')}
    onSubmit={action('submit')}
    titleText="Title"
    cancelText="Cancel"
    previousText="Previous"
    nextText="Next"
    submitText="Submit"
    hidePreviousButton
  />
);

export const LastStepAndLoading = () => (
  <BottomWizardBar
    isLastStep
    isLoading
    onCancel={action('cancel')}
    onNext={action('next')}
    onPrevious={action('previous')}
    onSubmit={action('submit')}
    titleText="Title"
    cancelText="Cancel"
    previousText="Previous"
    nextText="Next"
    submitText="Submit"
  />
);
