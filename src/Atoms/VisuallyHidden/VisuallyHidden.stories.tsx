/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { VisuallyHidden } from '../..';

export default {
  title: 'Atoms / VisuallyHidden',
  parameters: {
    component: VisuallyHidden,
  },
};
export const visuallyHiddenLabel = () => (
  <>
    There's text here that's only displayed for screenreaders:
    <VisuallyHidden>I'm only shown for screenreaders.</VisuallyHidden>
  </>
);

visuallyHiddenLabel.story = {
  name: 'Visually hidden label',
};
