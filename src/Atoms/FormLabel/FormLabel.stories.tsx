import React from 'react';

import { FormLabel } from '../..';

export default {
  title: 'Atoms / FormLabel',
  parameters: {
    component: FormLabel,
  },
};

export const defaultStory = () => (
  <>
    <FormLabel forId="unique-id">Username</FormLabel>
    <input type="text" id="unique-id" />
  </>
);

defaultStory.story = {
  name: 'Default',
};

export const withHiddenLabel = () => (
  <>
    <FormLabel forId="unique-id-2" hideLabel>
      Username
    </FormLabel>
    <input type="text" id="unique-id-2" />
  </>
);

withHiddenLabel.story = {
  name: 'With hidden label',
};

export const asAWrapper = () => (
  <FormLabel>
    Username
    <input type="text" />
  </FormLabel>
);

asAWrapper.story = {
  name: 'As a wrapper',
};
