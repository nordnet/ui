import React from 'react';
import { storiesOf } from '@storybook/react';

import { Text } from '../..';

const stories = storiesOf('Atoms/Text', module);

stories.add('Primary', () => (
  <>
    <div>
      <Text.Primary>Primary text</Text.Primary>
    </div>
    <div>
      <Text.Primary weight="bold">Primary bold</Text.Primary>
    </div>
    <div>
      <Text.Primary weight="extrabold">Primary text</Text.Primary>
    </div>
  </>
));

stories.add('Secondary', () => (
  <>
    <div>
      <Text.Secondary>Secondary text</Text.Secondary>
    </div>
    <div>
      <Text.Secondary weight="bold">Secondary bold</Text.Secondary>
    </div>
    <div>
      <Text.Secondary weight="extrabold">Secondary text</Text.Secondary>
    </div>
  </>
));

stories.add('Tertiary', () => (
  <>
    <div>
      <Text.Tertiary>Tertiary text</Text.Tertiary>
    </div>
    <div>
      <Text.Tertiary weight="bold">Tertiary bold</Text.Tertiary>
    </div>
    <div>
      <Text.Tertiary weight="extrabold">Tertiary text</Text.Tertiary>
    </div>
  </>
));

stories.add('Title1', () => <Text.Title1>Title1 text</Text.Title1>);
stories.add('Title3', () => <Text.Title3>Title3 text</Text.Title3>);

stories.add('Colors', () => (
  <>
    <div>
      <Text.Primary>Default</Text.Primary>
    </div>
    <div>
      <Text.Primary color={t => t.color.text}>Text</Text.Primary>
    </div>
    <div>
      <Text.Primary color={t => t.color.positive}>Positive</Text.Primary>
    </div>
    <div>
      <Text.Primary color={t => t.color.negative}>Negative</Text.Primary>
    </div>
    <div>
      <Text.Primary color={t => t.color.warning}>Warning</Text.Primary>
    </div>
    <div>
      <Text.Primary color={t => t.color.cta}>CTA</Text.Primary>
    </div>
    <div>
      <Text.Primary color={t => t.color.label}>Label</Text.Primary>
    </div>
  </>
));
