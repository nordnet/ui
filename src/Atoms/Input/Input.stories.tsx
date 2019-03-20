import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, color, number } from '@storybook/addon-knobs';
import Input from '.';

const stories = storiesOf('Atoms/Input/Text', module);

stories.addDecorator(withKnobs);

stories.add('basic use', () => {
  const fontSize = number('Font size', 16);
  const inputColor = color('Color', '#000000');
  return <Input.Text fontSize={fontSize} color={inputColor} />;
});
