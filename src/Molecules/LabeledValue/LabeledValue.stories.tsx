import React from 'react';
import { storiesOf } from '@storybook/react';
import LabeledValue from './index';
import Currency from '../../Atoms/Currency';

const stories = storiesOf('Molecules/LabeledValue', module);

stories.add('LabeledValue secondary currency', () => (
  <LabeledValue label="Marknadsvärde">
    <Currency.Secondary value={4672198} currency="SEK" weight={'bold'} />
  </LabeledValue>
));
