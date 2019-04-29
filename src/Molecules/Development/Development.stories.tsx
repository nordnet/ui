import React from 'react';
import { storiesOf } from '@storybook/react';

import { Development, Typography } from '../..';
import { Display } from '../../common/Display/index';
import { TYPOGRAPHY_TYPES } from '../../Atoms/Typography/Typography';

storiesOf('Molecules | Development', module)
  .add('Default', () => (
    <Display
      items={[
        { title: 'Positive value', component: <Development value={50} /> },
        { title: 'Zero value', component: <Development value={0} /> },
        { title: 'Negative value', component: <Development value={-200} /> },
      ]}
    />
  ))
  .add('With icon', () => (
    <Display
      items={[
        { title: 'Positive value', component: <Development value={50} icon /> },
        { title: 'Zero value', component: <Development value={0} icon /> },
        { title: 'Negative value', component: <Development value={-200} icon /> },
      ]}
    />
  ))
  .add('As percentage', () => (
    <Display
      items={[
        { title: 'Positive value', component: <Development value={5.4} percentage /> },
        { title: 'Zero value', component: <Development value={0} percentage /> },
        { title: 'Negative value', component: <Development value={-2.1} percentage /> },
      ]}
    />
  ))
  .add('As currency', () => (
    <Display
      items={[
        { title: 'Positive value', component: <Development value={50} currency="USD" /> },
        { title: 'Zero value', component: <Development value={0} currency="USD" /> },
        { title: 'Negative value', component: <Development value={-200} currency="USD" /> },
      ]}
    />
  ))
  .add('Integration: with different typographies', () => {
    const items = Object.values(TYPOGRAPHY_TYPES).map(type => ({
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
  });
