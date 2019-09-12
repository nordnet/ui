import React from 'react';
import { Box, Card, Flexbox, Media, PageWrapper, Separator, Typography } from '../..';
import { PageHeaderCardComponent } from './PageHeaderCard.types';
import { isElement } from '../../common/utils';

export const PageHeaderCard: PageHeaderCardComponent = ({ title, className, children }) => {
  const pageHeaderTitle = () => {
    if (isElement(title)) {
      return title;
    }
    return (
      <Typography type="title2" as="h1">
        {title}
      </Typography>
    );
  };

  return (
    <Card className={className}>
      <PageWrapper>
        <Flexbox
          container
          gutter={0}
          direction="column"
          sm={{ direction: 'row', justifyContent: 'space-between', alignItems: 'center' }}
        >
          <Flexbox item>
            <Box p={3} sm={{ px: 0, py: 2 }}>
              {pageHeaderTitle()}
            </Box>
          </Flexbox>
          {children && (
            <Media query={t => t.media.lessThan(t.breakpoints.sm)}>
              <Flexbox item>
                <Separator />
              </Flexbox>
            </Media>
          )}
          {children && (
            <Flexbox item>
              <Box px={3} sm={{ px: 0 }}>
                {children}
              </Box>
            </Flexbox>
          )}
        </Flexbox>
      </PageWrapper>
    </Card>
  );
};
