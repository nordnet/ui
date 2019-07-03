import { storiesOf } from '@storybook/react';
import React from 'react';

import { Media } from '../..';

storiesOf('Atoms | Media', module)
  .add('Basic usage', () => {
    return (
      <>
        <Media query={t => t.media.lessThan(t.breakpoints.md)}>
          I am only shown on screens smaller than medium size
        </Media>
        <Media query={t => t.media.between(t.breakpoints.md, t.breakpoints.lg)}>
          I am only shown between medium and large sizes
        </Media>
        <Media query={t => t.media.greaterThan(t.breakpoints.lg)}>
          I am only shown on screens bigger than large size
        </Media>
      </>
    );
  })
  .add('With size key', () => {
    return (
      <>
        <Media query={t => t.media.lessThan(t.breakpoints.md.size)}>
          I am only shown on screens smaller than medium size
        </Media>
        <Media query={t => t.media.between(t.breakpoints.md.size, t.breakpoints.lg.size)}>
          I am only shown between medium and large sizes
        </Media>
        <Media query={t => t.media.greaterThan(t.breakpoints.lg.size)}>
          I am only shown on screens bigger than large size
        </Media>
      </>
    );
  });
