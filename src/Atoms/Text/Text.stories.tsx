import React from 'react';
import { storiesOf } from '@storybook/react';
import Text from './index';

const stories = storiesOf('Atoms/Text', module);

stories.add('Primary default', () => <Text.Primary>Primary text</Text.Primary>);
stories.add('Secondary default', () => <Text.Secondary>Secondary text</Text.Secondary>);
stories.add('Tertiary default', () => <Text.Tertiary>Tertiary text</Text.Tertiary>);
stories.add('Title1 default', () => <Text.Title1>Title1 text</Text.Title1>);
stories.add('Title3 default', () => <Text.Title3>Title3 text</Text.Title3>);
