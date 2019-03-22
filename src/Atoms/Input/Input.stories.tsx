import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number, select } from '@storybook/addon-knobs';
import Input from '.';
import theme from '../../theme';

const stories = storiesOf('Atoms/Input/Text', module);

stories.addDecorator(withKnobs);

stories.add('basic use', () => {
  const fontSize = number('Font size', 16);
  const textColor = select('Select color', theme.rawColor, theme.rawColor.gray0);
  return <Input.Text fontSize={fontSize} color={textColor} />;
});
