import React from 'react';
import MD from 'react-markdown';
import docs from './PageWrapper.md';

import { PageWrapper, Typography, Box } from '../..';

export default {
  title: 'Molecules / PageWrapper',
  parameters: {
    component: PageWrapper,
  },
};

export const documentation = () => (
  <Typography type="primary">
    <MD source={docs} />
  </Typography>
);

export const pageWrapper = () => (
  <PageWrapper>
    <Box py={4}>
      <Typography type="primary">Page contents inside the PageWrapper can be anything.</Typography>
    </Box>
  </PageWrapper>
);

pageWrapper.story = {
  name: 'PageWrapper',
};

export const pageWrapperWithACustomBackground = () => (
  <PageWrapper background={(t) => t.color.background}>
    <Box py={4}>
      <Typography type="primary">Page contents inside the PageWrapper can be anything.</Typography>
    </Box>
  </PageWrapper>
);

pageWrapperWithACustomBackground.story = {
  name: 'PageWrapper with a custom background',
};
