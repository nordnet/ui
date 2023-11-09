import React from 'react';

import { Media } from '../..';

export default {
  title: 'Atoms / Media',
  parameters: {
    component: Media,
  },
};

export const BasicUsage = {
  render: () => {
    return (
      <>
        <Media query={(t) => t.media.lessThan(t.breakpoints.md)}>
          I am only shown on screens smaller than medium size
        </Media>
        <Media query={(t) => t.media.between(t.breakpoints.md, t.breakpoints.lg)}>
          I am only shown between medium and large sizes
        </Media>
        <Media query={(t) => t.media.greaterThan(t.breakpoints.lg)}>
          I am only shown on screens bigger than large size
        </Media>
      </>
    );
  },

  name: 'Basic usage',
};

export const WithSizeKey = {
  render: () => {
    return (
      <>
        <Media query={(t) => t.media.lessThan(t.breakpoints.md.size)}>
          I am only shown on screens smaller than medium size
        </Media>
        <Media query={(t) => t.media.between(t.breakpoints.md.size, t.breakpoints.lg.size)}>
          I am only shown between medium and large sizes
        </Media>
        <Media query={(t) => t.media.greaterThan(t.breakpoints.lg.size)}>
          I am only shown on screens bigger than large size
        </Media>
      </>
    );
  },

  name: 'With size key',
};
