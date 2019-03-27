import React from 'react';
import { TextComponent } from './Text.types';

const Dummy = (props: any) => <div {...props} />;

export const Text: TextComponent = {
  Primary: Dummy,
  Secondary: Dummy,
  Tertiary: Dummy,
  Title1: Dummy,
  Title3: Dummy,
};
