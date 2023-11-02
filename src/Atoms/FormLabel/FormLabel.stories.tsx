import React from 'react';

import { FormLabel } from '../..';

export default {
  title: 'Atoms / FormLabel',
  parameters: {
    component: FormLabel,
  },
};

export const DefaultStory = {
  render: () => (
    <>
      <FormLabel forId="unique-id">Username</FormLabel>
      <input type="text" id="unique-id" />
    </>
  ),

  name: 'Default',
};

export const WithHiddenLabel = {
  render: () => (
    <>
      <FormLabel forId="unique-id-2" hideLabel>
        Username
      </FormLabel>
      <input type="text" id="unique-id-2" />
    </>
  ),

  name: 'With hidden label',
};

export const AsAWrapper = {
  render: () => (
    <FormLabel>
      Username
      <input type="text" />
    </FormLabel>
  ),

  name: 'As a wrapper',
};

export const Disabled = () => (
  <>
    <FormLabel forId="unique-id" disabled>
      This is disabled
    </FormLabel>
    <input type="text" id="unique-id" disabled />
  </>
);
