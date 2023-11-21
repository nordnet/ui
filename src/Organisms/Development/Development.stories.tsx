import React from 'react';
import MD from 'react-markdown';

import docs from './Development.md';
import { Development, Typography } from '../../index';
import { Display } from '../../common/Display';
import { TYPOGRAPHY_TYPES } from '../../Atoms/Typography/Typography';

export default {
  title: 'Organisms / Development',
};

export const Documentation = () => (
  <Typography>
    <MD>{docs}</MD>
    <div>
      <Development value={50} currency="SEK" />
    </div>
    <div>
      <Development value={0} percentage />
    </div>
    <div>
      <Development value={-2.3} percentage />
    </div>
  </Typography>
);

export const Default = {
  render: () => (
    <Display
      items={[
        { title: 'Positive value', component: <Development value={50} /> },
        { title: 'Zero value', component: <Development value={0} /> },
        { title: 'Negative value', component: <Development value={-200} /> },
      ]}
    />
  ),
};

export const WithIcon = {
  render: () => (
    <Display
      items={[
        { title: 'Positive value', component: <Development value={50} icon /> },
        { title: 'Zero value', component: <Development value={0} icon /> },
        { title: 'Negative value', component: <Development value={-200} icon /> },
      ]}
    />
  ),
};

export const AsPercentage = {
  render: () => (
    <Display
      items={[
        { title: 'Positive value', component: <Development value={5.4} percentage /> },
        { title: 'Zero value', component: <Development value={0} percentage /> },
        { title: 'Negative value', component: <Development value={-2.1} percentage /> },
      ]}
    />
  ),
};

export const AsCurrency = {
  render: () => (
    <Display
      items={[
        { title: 'Positive value', component: <Development value={50} currency="USD" /> },
        { title: 'Zero value', component: <Development value={0} currency="USD" /> },
        { title: 'Negative value', component: <Development value={-200} currency="USD" /> },
      ]}
    />
  ),
};

export const WithDifferentColors = {
  render: () => (
    <Display
      items={[
        {
          title: 'Positive value',
          component: <Development value={50} positiveColor={(c) => c.color.positive} />,
        },
        { title: 'Zero value', component: <Development value={0} /> },
        {
          title: 'Negative value',
          component: <Development value={-200} negativeColor={(c) => c.color.negative} />,
        },
      ]}
    />
  ),
};

export const RegressionInfinity = {
  render: () => (
    <Display
      items={[
        { title: '+Infinity', component: <Development value={Infinity} /> },
        { title: '-Infinity', component: <Development value={-Infinity} /> },
      ]}
    />
  ),

  name: 'Regression: infinity',
};

export const RegressionValueIsNonZeroButRoundedValueIs0 = {
  render: () => (
    <Display
      items={[
        {
          title: '`value = 0.3` and decimals = 0',
          component: <Development value={0.3} decimals={0} />,
        },
        {
          title: '`value = -0.3 and decimals = 0`',
          component: <Development value={-0.3} decimals={0} />,
        },
        {
          title: '`value = -1.3123 and decimals = 3`',
          component: <Development value={-1.3123} decimals={3} />,
        },
        {
          title: '`value = -0.3 and maximumDecimals = 0`',
          component: <Development value={-0.3} maximumDecimals={0} />,
        },
        {
          title: '`value = 0.3`',
          component: (
            <Development
              value={+0.3}
              ticks={[
                {
                  fromPrice: 0,
                  toPrice: 1000,
                  decimals: 0,
                  tick: 1,
                },
              ]}
            />
          ),
        },
      ]}
    />
  ),

  name: 'Regression: value is non-zero, but rounded value is 0',
};

export const IntegrationWithDifferentTypographies = {
  render: () => {
    const items = Object.values(TYPOGRAPHY_TYPES)?.map((type) => ({
      title: type,
      component: (
        <Typography type={type}>
          <Display
            items={[
              { title: 'Positive value', component: <Development value={5.4} /> },
              { title: 'Zero value', component: <Development value={0} /> },
              { title: 'Negative value', component: <Development value={-2.1} /> },
            ]}
          />
        </Typography>
      ),
    }));
    return <Display items={items} />;
  },

  name: 'Integration: with different typographies',
};
