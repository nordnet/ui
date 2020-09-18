import React from 'react';
import { Datepicker } from './Datepicker';

export default {
  title: 'Molecules | Datepicker',
  parameters: {
    component: Datepicker,
  },
};

export const defaultStory = () => {
  return <Datepicker label="Label" />;
};

defaultStory.story = {
  name: 'Default',
};
