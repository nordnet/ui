import React from 'react';
import { storiesOf } from '@storybook/react';
import LabeledValue from './index';
import { Typography, Development, Number, Flexbox } from '../..';

storiesOf('Molecules | LabeledValue', module)
  .add('Default', () => <LabeledValue label="Label">Value</LabeledValue>)
  .add('Integration: LabeledValue secondary currency', () => (
    <LabeledValue label="Market value">
      <Typography type="secondary" weight="bold">
        <Number value={4672198} currency="SEK" />
      </Typography>
    </LabeledValue>
  ))
  .add('Integration: LabeledValue title1', () => (
    <LabeledValue label="Holdings (SEK)">
      <Typography type="title1">
        <Number value={4713119} />
      </Typography>
    </LabeledValue>
  ))
  .add('Integration: LabeledValue with positive development and currency', () => (
    <LabeledValue label="Development this year">
      <Flexbox container direction="row" gutter={2}>
        <Flexbox item>
          <Typography type="secondary" weight="bold">
            <Development value={9.2} icon percentage />
          </Typography>
        </Flexbox>
        <Flexbox item>
          <Typography type="secondary" weight="bold">
            <Number sign value={4672198} currency="SEK" />
          </Typography>
        </Flexbox>
      </Flexbox>
    </LabeledValue>
  ))
  .add('Integration: LabeledValue with negative development and currency', () => (
    <LabeledValue label="Development this year">
      <Flexbox container direction="row" gutter={2}>
        <Flexbox item>
          <Typography type="secondary">
            <Development value={-9.2} icon percentage />
          </Typography>
        </Flexbox>
        <Flexbox item>
          <Typography type="secondary" weight="bold">
            <Number sign value={-4672198} currency="SEK" />
          </Typography>
        </Flexbox>
      </Flexbox>
    </LabeledValue>
  ));
