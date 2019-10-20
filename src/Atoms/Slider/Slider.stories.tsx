import React from 'react';
import Slider from '.';

export default {
  title: 'Atoms | Slider',
  parameters: {
    component: Slider,
  },
};

export const slider = () => {
  return <Slider onChange={() => {}} initialValue={20000} min="20000" max="500000" step="2000" />;
};

slider.story = {
  name: 'Slider',
};
