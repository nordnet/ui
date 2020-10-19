import React from 'react';
import { HashRouter } from 'react-router-dom';

import { FeedbackBanner, Spinner } from '../..';
import { Display } from '../../common/Display';

export default {
  title: 'Molecules / FeedbackBanner',
  parameters: {
    component: FeedbackBanner,
  },
};

export const defaultUsage = () => (
  <FeedbackBanner title="Feedback banner">
    Feedback banner should be used within modules to display information that needs attention.
    Content is flexible, it can contain links and plain text.
  </FeedbackBanner>
);

defaultUsage.story = {
  name: 'Default usage',
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

displayingTitle.story = {
  name: 'Displaying title',
};

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

differentVariant.story = {
  name: 'Different variant',
};

export const complexChildren = () => (
  <HashRouter>
    <FeedbackBanner title="Warning, complex child" variant="warning">
      <div>
        <div>The message can also be stuctured as a more complex item than just a string</div>
        <div>
          For example, you can provide a Spinner <Spinner id="defaultSpinner" /> if you want to
        </div>
      </div>
    </FeedbackBanner>
  </HashRouter>
);

complexChildren.story = {
  name: 'Complex children',
};
