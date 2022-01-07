import React from 'react';
import { HashRouter } from 'react-router-dom';
import { Meta, Story } from '@storybook/react';

import { FeedbackBanner, Spinner } from '../..';
import { Display } from '../../common/Display';
import { FeedbackBannerProps as Props } from './FeedbackBanner.types';

export default {
  title: 'Molecules / FeedbackBanner',
  component: FeedbackBanner,
} as Meta;

const Template: Story<Props & { children: React.ReactNode }> = (args) => (
  <FeedbackBanner {...args} />
);

export const DefaultUsage = Template.bind({});
DefaultUsage.args = {
  title: 'Feedback banner',
  children:
    'Feedback banner should be used within modules to display information that needs attention. Content is flexible, it can contain links and plain text.',
};

export const displayingTitle = () => (
  <Display
    items={[
      {
        title: 'With title',
        component: (
          <FeedbackBanner title="This is a title">This message has a title</FeedbackBanner>
        ),
      },
      {
        title: 'Without title',
        component: <FeedbackBanner>This message does not have a title</FeedbackBanner>,
      },
    ]}
  />
);

export const differentVariant = () => (
  <Display
    items={[
      {
        title: 'info',
        component: (
          <FeedbackBanner title="Info" variant="info">
            This is an information message
          </FeedbackBanner>
        ),
      },
      {
        title: 'error',
        component: (
          <FeedbackBanner title="Error" variant="error">
            This is an error message
          </FeedbackBanner>
        ),
      },
      {
        title: 'warning',
        component: (
          <FeedbackBanner title="Warning" variant="warning">
            This is a warning message
          </FeedbackBanner>
        ),
      },
      {
        title: 'success',
        component: (
          <FeedbackBanner title="Success" variant="success">
            This is a success message
          </FeedbackBanner>
        ),
      },
    ]}
  />
);

export const complexChildren = () => (
  <HashRouter>
    <FeedbackBanner title="Warning, complex child" variant="warning">
      <>
        <p>The message can also be structured as a more complex item than just a string</p>
        <p>
          For example, you can provide a Spinner <Spinner id="defaultSpinner" /> if you want to
        </p>
      </>
    </FeedbackBanner>
  </HashRouter>
);
