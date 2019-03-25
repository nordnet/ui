import { storiesOf } from '@storybook/react';
import React from 'react';

import Media from '.';

const stories = storiesOf('Atoms/Media', module);

stories.add('Basic usage', () => {
  return (
    <>
      <Media query={t => t.media.lessThan(t.size.medium)}>
        I am only shown on screens smaller than medium size
      </Media>
      <Media query={t => t.media.between(t.size.medium, t.size.large)}>
        I am only shown between medium and large sizes
      </Media>
      <Media query={t => t.media.greaterThan(t.size.large)}>
        I am only shown on screens bigger than large size
      </Media>
    </>
  );
});
