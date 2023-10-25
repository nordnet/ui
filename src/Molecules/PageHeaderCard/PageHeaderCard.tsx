import React from 'react';
import styled from 'styled-components';
import { Box, Card, Flexbox, Media, PageWrapper, Separator, Typography } from '../..';
import { PageHeaderCardComponent } from './PageHeaderCard.types';
import { isElement } from '../../common/utils';

const StyledCard = styled(Card)`
  background: ${(p) => p.theme.color.pageHeaderBackground};
  border-bottom: 1px solid ${(p) => p.theme.color.headerCardBorder};
  border-radius: 0;
`;

export const PageHeaderCard: PageHeaderCardComponent = ({ title, className, children, grow }) => {
  const pageHeaderTitle = () => {
    if (isElement(title)) {
      return title;
    }
    return (
      <Typography type="title1" as="h1">
        {title}
      </Typography>
    );
  };

  return (
    <StyledCard className={className} grow={grow}>
      <PageWrapper>
        <Flexbox
          container
          gap={0}
          direction="column"
          sm={{ direction: 'row', justifyContent: 'space-between', alignItems: 'center' }}
        >
          <Flexbox item>
            <Box p={3} sm={{ px: 0, py: 2 }}>
              {pageHeaderTitle()}
            </Box>
          </Flexbox>
          {children && (
            <Media query={(t) => t.media.lessThan(t.breakpoints.sm)}>
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
    </StyledCard>
  );
};
