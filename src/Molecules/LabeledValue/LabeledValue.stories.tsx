import React from 'react';
import LabeledValue from './index';
import { Typography, Development, Number, Flexbox } from '../..';

export default {
  title: 'Molecules / LabeledValue',
};

export const defaultStory = () => <LabeledValue label="Label">Value</LabeledValue>;

defaultStory.story = {
  name: 'Default',
  parameters: {
    component: LabeledValue,
  },
};

export const integrationLabeledValueSecondaryCurrency = () => (
  <LabeledValue label="Market value">
    <Typography type="secondary" weight="bold">
      <Number value={4672198} currency="SEK" />
    </Typography>
  </LabeledValue>
);

integrationLabeledValueSecondaryCurrency.story = {
  name: 'Integration: LabeledValue secondary currency',
};

export const integrationLabeledValueTitle1 = () => (
  <LabeledValue label="Holdings (SEK)">
    <Typography type="title1">
      <Number value={4713119} />
    </Typography>
  </LabeledValue>
);

integrationLabeledValueTitle1.story = {
  name: 'Integration: LabeledValue title1',
};

export const integrationLabeledValueWithPositiveDevelopmentAndCurrency = () => (
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
);

integrationLabeledValueWithPositiveDevelopmentAndCurrency.story = {
  name: 'Integration: LabeledValue with positive development and currency',
};

export const integrationLabeledValueWithNegativeDevelopmentAndCurrency = () => (
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
);

integrationLabeledValueWithNegativeDevelopmentAndCurrency.story = {
  name: 'Integration: LabeledValue with negative development and currency',
};

export const integrationLabeledValueWithCustomTitle = () => (
  <LabeledValue label={<Typography type="tertiary">Foo</Typography>}>
    <Typography type="tertiary" weight="bold">
      Bar
    </Typography>
  </LabeledValue>
);

integrationLabeledValueWithCustomTitle.story = {
  name: 'Integration: LabeledValue with custom title',
};
