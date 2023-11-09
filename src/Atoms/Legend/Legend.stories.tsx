import React from 'react';
import { Legend } from '../..';

export default {
  title: 'Atoms / Legend',
  parameters: {
    component: Legend,
  },
};

export const Docs = () => <p>The Legend component defines a caption for the Fieldset component.</p>;

export const DefaultStory = {
  render: () => <Legend>Caption text</Legend>,
  name: 'Default',
};

export const LookingLikeALabel = {
  render: () => <Legend styleType="label">Caption text</Legend>,
  name: 'Looking like a label',
};
