import React from 'react';
import { storiesOf } from '@storybook/react';

import { PageWrapper, Typography, Box } from '../..';

storiesOf('Molecules | PageWrapper', module)
  .add('PageWrapper', () => (
    <PageWrapper background={t => t.color.background}>
      <Box py={4}>
        <Typography type="primary">
          Page contents inside the PageWrapper can be anything.
        </Typography>
      </Box>
    </PageWrapper>
  ))
  .add('PageWrapper with a custom background', () => (
    <PageWrapper background={t => t.color.background}>
      <Box py={4}>
        <Typography type="primary">
          Page contents inside the PageWrapper can be anything.
        </Typography>
      </Box>
    </PageWrapper>
  ));
