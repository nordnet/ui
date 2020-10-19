import React from 'react';
import MD from 'react-markdown';

import docs from './Development.md';
import { Development, Typography } from '../../index';
import { Display } from '../../common/Display/index';
import { TYPOGRAPHY_TYPES } from '../../Atoms/Typography/Typography';

export default {
  title: 'Organisms / Development',
};

export const documentation = () => (
  <Typography>
    <MD source={docs} />
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

export const defaultStory = () => (
  <Display
    items={[
      { title: 'Positive value', component: <Development value={50} /> },
      { title: 'Zero value', component: <Development value={0} /> },
      { title: 'Negative value', component: <Development value={-200} /> },
    ]}
  />
);

defaultStory.story = {
  name: 'Default',
};

export const withIcon = () => (
  <Display
    items={[
      { title: 'Positive value', component: <Development value={50} icon /> },
      { title: 'Zero value', component: <Development value={0} icon /> },
      { title: 'Negative value', component: <Development value={-200} icon /> },
    ]}
  />
);

withIcon.story = {
  name: 'With icon',
};

export const asPercentage = () => (
  <Display
    items={[
      { title: 'Positive value', component: <Development value={5.4} percentage /> },
      { title: 'Zero value', component: <Development value={0} percentage /> },
      { title: 'Negative value', component: <Development value={-2.1} percentage /> },
    ]}
  />
);

asPercentage.story = {
  name: 'As percentage',
};

export const asCurrency = () => (
  <Display
    items={[
      { title: 'Positive value', component: <Development value={50} currency="USD" /> },
      { title: 'Zero value', component: <Development value={0} currency="USD" /> },
      { title: 'Negative value', component: <Development value={-200} currency="USD" /> },
    ]}
  />
);

asCurrency.story = {
  name: 'As currency',
};

export const withDifferentColors = () => (
  <Display
    items={[
      {
        title: 'Positive value',
        component: <Development value={50} positiveColor={(c) => c.colorA11y.positive} />,
      },
      { title: 'Zero value', component: <Development value={0} /> },
      {
        title: 'Negative value',
        component: <Development value={-200} negativeColor={(c) => c.colorA11y.negative} />,
      },
    ]}
  />
);

withDifferentColors.story = {
  name: 'With different colors',
};

export const regressionInfinity = () => (
  <Display
    items={[
      { title: '+Infinity', component: <Development value={Infinity} /> },
      { title: '-Infinity', component: <Development value={-Infinity} /> },
    ]}
  />
);

regressionInfinity.story = {
  name: 'Regression: infinity',
};

export const regressionValueIsNonZeroButRoundedValueIs0 = () => (
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
);

regressionValueIsNonZeroButRoundedValueIs0.story = {
  name: 'Regression: value is non-zero, but rounded value is 0',
};

export const integrationWithDifferentTypographies = () => {
  const items = Object.values(TYPOGRAPHY_TYPES).map((type) => ({
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
};

integrationWithDifferentTypographies.story = {
  name: 'Integration: with different typographies',
};
