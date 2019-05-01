import React from 'react';
import { storiesOf } from '@storybook/react';

import { PageWrapper } from '../..';

storiesOf('Molecules | PageWrapper', module)
  .add('PageWrapper', () => (
    <PageWrapper>Page contents inside the PageWrapper can be anything.</PageWrapper>
  ))
  .add('PageWrapper with a custom background', () => (
    <PageWrapper background={t => t.color.background}>
      Page contents inside the PageWrapper can be anything.
    </PageWrapper>
  ));
