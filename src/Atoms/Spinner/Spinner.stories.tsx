import React from 'react';
import { storiesOf } from '@storybook/react';
import { Display } from '../../common/Display';

import { Spinner } from '../..';

storiesOf('Atoms | Spinner', module)
  .add('Spinner default', () => <Spinner />)
  .add('Spinner big', () => <Spinner size={16} />)
  .add('Colors', () => (
    <Display
      items={[
        { title: 'Default', component: <Spinner /> },
        {
          title: 'Color: text',
          component: <Spinner color={t => t.color.text} />,
        },
        {
          title: 'Color: positive',
          component: <Spinner color={t => t.color.positive} />,
        },
        {
          title: 'Color: negative',
          component: <Spinner color={t => t.color.negative} />,
        },
        {
          title: 'Color: warning',
          component: <Spinner color={t => t.color.warning} />,
        },
        {
          title: 'Color: label',
          component: <Spinner color={t => t.color.label} />,
        },
      ]}
    />
  ));
