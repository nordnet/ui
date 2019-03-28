import React from 'react';
import { storiesOf } from '@storybook/react';
import Currency from './index';

const stories = storiesOf('Atoms/Currency', module);

stories.add('Primary default', () => <Currency.Primary value={234234} currency="SEK" />);
stories.add('Secondary default', () => <Currency.Secondary value={234234} currency="SEK" />);
stories.add('Tertiary default', () => <Currency.Tertiary value={234234} currency="SEK" />);
stories.add('Title1 default', () => <Currency.Title1 value={234234} currency="SEK" />);
stories.add('Title3 default', () => <Currency.Title3 value={234234} currency="SEK" />);
