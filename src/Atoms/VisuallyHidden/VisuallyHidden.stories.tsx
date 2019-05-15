import React from 'react';
import { storiesOf } from '@storybook/react';
import { VisuallyHidden } from '../..';

/* eslint-disable react/no-unescaped-entities */
storiesOf('Atoms | VisuallyHidden', module).add('Visually hidden label', () => (
  <>
    There's text here that's only displayed for screenreaders:
    <VisuallyHidden>I'm only shown for screenreaders.</VisuallyHidden>
  </>
));
