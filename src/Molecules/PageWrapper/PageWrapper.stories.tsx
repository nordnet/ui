import React from 'react';
import MD from 'react-markdown';
import docs from './PageWrapper.md';

import { Box, PageWrapper, Typography } from '../..';

export default {
  title: 'Molecules / PageWrapper',
  parameters: {
    component: PageWrapper,
  },
};

export const documentation = () => (
  <Typography type="primary">
    <MD>{docs}</MD>
  </Typography>
);

export const pageWrapper = {
  render: () => (
    <PageWrapper>
      <Box py={4}>
        <Typography type="primary">
          Page contents inside the PageWrapper can be anything.
        </Typography>
      </Box>
    </PageWrapper>
  ),

  name: 'PageWrapper',
};

export const pageWrapperWithACustomBackground = {
  render: () => (
    <PageWrapper background={(t) => t.color.background}>
      <Box py={4}>
        <Typography type="primary">
          Page contents inside the PageWrapper can be anything.
        </Typography>
      </Box>
    </PageWrapper>
  ),

  name: 'PageWrapper with a custom background',
};
