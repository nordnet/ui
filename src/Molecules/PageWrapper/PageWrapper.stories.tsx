import React from 'react';
import { storiesOf } from '@storybook/react';
import MD from 'react-markdown';
import docs from './PageWrapper.md';

import { PageWrapper, Typography, Box } from '../..';

storiesOf('Molecules | PageWrapper', module)
  .add('Documentation', () => (
    <Typography type="primary">
      <MD source={docs} />
    </Typography>
  ))
  .add('PageWrapper', () => (
    <PageWrapper>
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
