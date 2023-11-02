import React from 'react';
import { Legend } from '../..';

export default {
  title: 'Atoms / Legend',
  parameters: {
    component: Legend,
  },
};

export const docs = () => <p>The Legend component defines a caption for the Fieldset component.</p>;

export const defaultStory = {
  render: () => <Legend>Caption text</Legend>,
  name: 'Default',
};

export const lookingLikeALabel = {
  render: () => <Legend styleType="label">Caption text</Legend>,
  name: 'Looking like a label',
};
