import React from 'react';
import { Box, Button, Flexbox, PageHeaderCard, Typography } from '../..';

export default {
  title: 'Molecules / PageHeader',
  parameters: {
    component: PageHeaderCard,
  },
};

export const RegularPageHeader = {
  render: () => <PageHeaderCard title="Your darkest loaves" />,
  name: 'Regular page header',
};

export const PageHeaderWithChildren = {
  render: () => (
    <PageHeaderCard title="Your darkest loaves">
      <Box py={2} sm={{ py: 0 }}>
        <Flexbox container gap={2} alignItems="center" justifyContent="space-between">
          <Flexbox item>The eternal loremipsum, The portuguese friend</Flexbox>
          <Flexbox item>
            <Button>Click here to recruit carl</Button>
          </Flexbox>
        </Flexbox>
      </Box>
    </PageHeaderCard>
  ),
};

export const PageHeaderReactNodeTitle = {
  render: () => {
    return (
      <PageHeaderCard
        title={
          <Typography type="title2" as="h1">
            I am a ReactNode
          </Typography>
        }
      />
    );
  },

  name: 'Page header ReactNode title',
};
