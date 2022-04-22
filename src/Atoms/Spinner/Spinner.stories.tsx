import React from 'react';
import { Display } from '../../common/Display';

import { Spinner, Typography } from '../..';

export default {
  title: 'Atoms / Spinner',
  parameters: {
    component: Spinner,
  },
};

export const spinnerDefault = () => <Spinner id="mySpinner" />;

spinnerDefault.story = {
  name: 'Spinner default',
};

export const spinnerBig = () => <Spinner size={16} id="mySpinner" />;

spinnerBig.story = {
  name: 'Spinner big',
};

export const spinnerWithoutDefaultDelay = () => <Spinner size={16} id="mySpinner" delay={false} />;

spinnerWithoutDefaultDelay.story = {
  name: 'Spinner without default delay',
};

export const spinnerWithCustom2SecDelay = () => <Spinner size={16} id="mySpinner" delay={2000} />;

spinnerWithCustom2SecDelay.story = {
  name: 'Spinner with custom 2 sec delay',
};

export const colors = () => (
  <Display
    items={[
      { title: 'Default', component: <Spinner id="defaultSpinner" /> },
      {
        title: 'Color: text',
        component: <Spinner color={(t) => t.color.text} id="defaultSpinnerText" />,
      },
      {
        title: 'Color: positive',
        component: <Spinner color={(t) => t.color.positive} id="defaultSpinnerPositive" />,
      },
      {
        title: 'Color: negative',
        component: <Spinner color={(t) => t.color.negative} id="defaultSpinnerNegative" />,
      },
      {
        title: 'Color: warning',
        component: <Spinner color={(t) => t.color.warning} id="defaultSpinnerWarning" />,
      },
      {
        title: 'Color: label',
        component: <Spinner color={(t) => t.color.label} id="defaultSpinnerLabel" />,
      },
    ]}
  />
);

export const regression2SpinnersWithSameColorAndSizeAffectsEachOtherInChrome = () => (
  <>
    <Typography type="primary">
      Only the one with green border should be shown. The bug before was that if two spinners had
      the same size and color, both were hidden.
    </Typography>
    <div style={{ display: 'none', border: '1px red solid' }}>
      <Spinner size={8} id="firstSpinner" />
    </div>
    <div style={{ border: '1px green solid' }}>
      <Spinner size={8} id="secondSpinner" />
    </div>
  </>
);

regression2SpinnersWithSameColorAndSizeAffectsEachOtherInChrome.story = {
  name: 'Regression: 2 spinners with same color and size affects each other in Chrome',
};
