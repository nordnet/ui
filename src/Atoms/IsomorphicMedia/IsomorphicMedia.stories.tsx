import React from 'react';

import { IsomorphicMedia } from './IsomorphicMedia';

export default {
  title: 'Atoms / IsomorphicMedia',
  parameters: {
    component: IsomorphicMedia,
  },
};

export const basicUsage = () => {
  return (
    <>
      <IsomorphicMedia query={(t) => t.media.lessThan(t.breakpoints.md)}>
        I am only shown on screens smaller than medium size
      </IsomorphicMedia>
      <IsomorphicMedia query={(t) => t.media.between(t.breakpoints.md, t.breakpoints.lg)}>
        I am only shown between medium and large sizes
      </IsomorphicMedia>
      <IsomorphicMedia query={(t) => t.media.greaterThan(t.breakpoints.lg)}>
        I am only shown on screens bigger than large size
      </IsomorphicMedia>
    </>
  );
};

basicUsage.story = {
  name: 'Basic usage',
};

export const withSizeKey = () => {
  return (
    <>
      <IsomorphicMedia query={(t) => t.media.lessThan(t.breakpoints.md.size)}>
        I am only shown on screens smaller than medium size
      </IsomorphicMedia>
      <IsomorphicMedia query={(t) => t.media.between(t.breakpoints.md.size, t.breakpoints.lg.size)}>
        I am only shown between medium and large sizes
      </IsomorphicMedia>
      <IsomorphicMedia query={(t) => t.media.greaterThan(t.breakpoints.lg.size)}>
        I am only shown on screens bigger than large size
      </IsomorphicMedia>
    </>
  );
};

withSizeKey.story = {
  name: 'With size key',
};
