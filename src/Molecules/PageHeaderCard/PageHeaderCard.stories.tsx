import React from 'react';
import { PageHeaderCard, Flexbox, Button, Box, Typography } from '../..';

export default {
  title: 'Molecules / PageHeader',
  parameters: {
    component: PageHeaderCard,
  },
};

export const regularPageHeader = () => <PageHeaderCard title="Your darkest loaves" />;

regularPageHeader.story = {
  name: 'Regular page header',
};

export const pageHeaderWithChildren = () => (
  <PageHeaderCard title="Your darkest loaves">
    <Box py={2} sm={{ py: 0 }}>
      <Flexbox container gutter={2} alignItems="center" justifyContent="space-between">
        <Flexbox item>The eternal techlead, The portugese friend</Flexbox>
        <Flexbox item>
          <Button>Click here to recruit carl</Button>
        </Flexbox>
      </Flexbox>
    </Box>
  </PageHeaderCard>
);

pageHeaderWithChildren.story = {
  name: 'Page header with children',
};

export const pageHeaderReactNodeTitle = () => {
  return (
    <PageHeaderCard
      title={
        <Typography type="title2" as="h1">
          I am a ReactNode
        </Typography>
      }
    />
  );
};

pageHeaderReactNodeTitle.story = {
  name: 'Page header ReactNode title',
};
