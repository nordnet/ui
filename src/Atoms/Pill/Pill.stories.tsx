import React from 'react';
import { IntlProvider } from 'react-intl';

import { Pill } from './Pill';
import docs from './Pill.mdx';
import { Button, Flexbox, OldIcon, Typography } from '../..';

export default {
  title: 'Atoms / Pill',

  parameters: {
    docs: {
      page: docs,
    },
    component: Pill,
  },
};

export const BasicPill = {
  render: () => (
    <Pill>
      <Typography type="tertiary" weight="bold">
        OMXS30
      </Typography>{' '}
      <Typography type="tertiary">1567</Typography>
    </Pill>
  ),
};

export const RoundedPill = {
  render: () => (
    <IntlProvider locale="en">
      <Pill.Rounded
        label="OMXS30"
        color={(t) => t.color.cta}
        development={20.455}
        onClose={() => {}}
      />
    </IntlProvider>
  ),
};

export const PillWithBar = {
  render: () => (
    <Pill barColor={(t) => t.color.cta}>
      <Flexbox container gap={1} alignItems="center">
        <Flexbox item>
          <Button type="button" variant="neutral">
            <Typography type="tertiary" weight="bold">
              Bollinger
            </Typography>{' '}
            <Typography type="tertiary">1234</Typography>
          </Button>
        </Flexbox>
        <Flexbox item>
          <Button type="button" variant="neutral">
            <OldIcon.CrossThin size={2} />
          </Button>
        </Flexbox>
      </Flexbox>
    </Pill>
  ),

  name: 'Pill with colored bar',
};

export const PillWithNoPadding = {
  render: () => (
    <Pill barColor={(t) => t.color.background} noPadding>
      <Typography type="tertiary" weight="bold">
        OMXS30
      </Typography>{' '}
      <Typography type="tertiary">1567</Typography>
    </Pill>
  ),

  name: 'Pill with no padding',
};
