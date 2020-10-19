import React from 'react';
import { Legend } from '../..';

export default {
  title: 'Atoms / Legend',
  parameters: {
    component: Legend,
  },
};

export const docs = () => <p>The Legend component defines a caption for the Fieldset component.</p>;
export const defaultStory = () => <Legend>Caption text</Legend>;

defaultStory.story = {
  name: 'Default',
};

export const lookingLikeALabel = () => <Legend styleType="label">Caption text</Legend>;

lookingLikeALabel.story = {
  name: 'Looking like a label',
};
