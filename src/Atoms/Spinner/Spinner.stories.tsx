import React from 'react';
import MD from 'react-markdown';
import { storiesOf } from '@storybook/react';
import { Display } from '../../common/Display';

import docs from './Spinner.md';
import { Spinner, Typography } from '../..';

storiesOf('Atoms | Spinner', module)
  .add('Documentation', () => (
    <Typography>
      <MD source={docs} />
      <div>
        <Spinner id="defaultSpinner" />
      </div>
      <div>
        <Spinner size={8} id="largerSpinner" />
      </div>
    </Typography>
  ))
  .add('Spinner default', () => <Spinner id="mySpinner" />)
  .add('Spinner big', () => <Spinner size={16} id="mySpinner" />)
  .add('Colors', () => (
    <Display
      items={[
        { title: 'Default', component: <Spinner id="defaultSpinner" /> },
        {
          title: 'Color: text',
          component: <Spinner color={t => t.color.text} id="defaultSpinnerText" />,
        },
        {
          title: 'Color: positive',
          component: <Spinner color={t => t.color.positive} id="defaultSpinnerPositive" />,
        },
        {
          title: 'Color: negative',
          component: <Spinner color={t => t.color.negative} id="defaultSpinnerNegative" />,
        },
        {
          title: 'Color: warning',
          component: <Spinner color={t => t.color.warning} id="defaultSpinnerWarning" />,
        },
        {
          title: 'Color: label',
          component: <Spinner color={t => t.color.label} id="defaultSpinnerLabel" />,
        },
      ]}
    />
  ))
  .add('Regression: 2 spinners with same color and size affects each other in Chrome', () => (
    <div>
      <div>
        <Typography type="primary">
          Only the one with green border should be shown. The bug before was that if two spinners
          had the same size and color, both were hidden.
        </Typography>
      </div>{' '}
      <div style={{ display: 'none', border: '1px red solid' }}>
        {' '}
        <Spinner size={8} id="firstSpinner" />{' '}
      </div>{' '}
      <div style={{ border: '1px green solid' }}>
        {' '}
        <Spinner size={8} id="secondSpinner" />{' '}
      </div>{' '}
    </div>
  ));
