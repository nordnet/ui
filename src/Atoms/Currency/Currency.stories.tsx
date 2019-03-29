import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number, select } from '@storybook/addon-knobs';
import Currency from './index';

const stories = storiesOf('Atoms/Currency', module);

stories.addDecorator(withKnobs);

const inputs = (): [number, string] => {
  const value = number('value', 234234);
  const currency = select('currency', {
    'SEK': 'SEK',
    'NOK': 'NOK',
    'DKK': 'DKK',
    'USD': 'USD'
  }, 'SEK');
  return [value, currency];
}

stories.add('Primary default', () => {
  const [value, currency] = inputs();
  return <Currency.Primary value={value} currency={currency} />;
});
stories.add('Secondary default', () => {
  const [value, currency] = inputs();
  return <Currency.Secondary value={value} currency={currency} />;
});
stories.add('Tertiary default', () => {
  const [value, currency] = inputs();
  return <Currency.Tertiary value={value} currency={currency} />;
});
stories.add('Title1 default', () => {
  const [value, currency] = inputs();
  return <Currency.Title1 value={value} currency={currency} />;
});
stories.add('Title3 default', () => {
  const [value, currency] = inputs();
  return <Currency.Title3 value={value} currency={currency} />;
});
