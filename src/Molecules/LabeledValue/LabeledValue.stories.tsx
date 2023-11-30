import React from 'react';
import { IntlProvider } from 'react-intl';
import LabeledValue from './index';
import { Development, Flexbox, Number, Typography } from '../..';

export default {
  title: 'Molecules / LabeledValue',
};

export const DefaultStory = {
  render: () => <LabeledValue label="Label">Value</LabeledValue>,
  name: 'Default',

  parameters: {
    component: LabeledValue,
  },
};

export const IntegrationLabeledValueSecondaryCurrency = {
  render: () => (
    <IntlProvider locale="en">
      <LabeledValue label="Market value">
        <Typography type="secondary" weight="bold">
          <Number value={4672198} currency="SEK" />
        </Typography>
      </LabeledValue>
    </IntlProvider>
  ),

  name: 'Integration: LabeledValue secondary currency',
};

export const IntegrationLabeledValueTitle1 = {
  render: () => (
    <IntlProvider locale="en">
      <LabeledValue label="Holdings (SEK)">
        <Typography type="title1">
          <Number value={4713119} />
        </Typography>
      </LabeledValue>
    </IntlProvider>
  ),

  name: 'Integration: LabeledValue title1',
};

export const IntegrationLabeledValueWithPositiveDevelopmentAndCurrency = {
  render: () => (
    <IntlProvider locale="en">
      <LabeledValue label="Development this year">
        <Flexbox container direction="row" gap={2}>
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
    </IntlProvider>
  ),

  name: 'Integration: LabeledValue with positive development and currency',
};

export const IntegrationLabeledValueWithNegativeDevelopmentAndCurrency = {
  render: () => (
    <IntlProvider locale="en">
      <LabeledValue label="Development this year">
        <Flexbox container direction="row" gap={2}>
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
    </IntlProvider>
  ),

  name: 'Integration: LabeledValue with negative development and currency',
};

export const IntegrationLabeledValueWithCustomTitle = {
  render: () => (
    <LabeledValue label={<Typography type="tertiary">Foo</Typography>}>
      <Typography type="tertiary" weight="bold">
        Bar
      </Typography>
    </LabeledValue>
  ),

  name: 'Integration: LabeledValue with custom title',
};
