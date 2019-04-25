import React from 'react';
import { storiesOf } from '@storybook/react';

import { Development, Typography } from '../..';
import { Display } from '../../common/Display/index';
import { TYPOGRAPHY_TYPES } from '../../Atoms/Typography/Typography';

storiesOf('Molecules | Development', module)
  .add('Default', () => (
    <Display
      items={[
        { title: 'Positive value', component: <Development value={5.4} /> },
        { title: 'Zero value', component: <Development value={0} /> },
        { title: 'Negative value', component: <Development value={-2.1} /> },
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
  })
  .add('Invalid value', () => {
    return <Development value={null} />;
  })
