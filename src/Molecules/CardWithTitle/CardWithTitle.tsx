import React from 'react';
import styled from 'styled-components';
import { Card, Typography } from '../..';
import { CardWithTitleComponent } from './CardWithTitle.types';
import { Box } from '../../Atoms/Box/Box';
import { isElement } from '../../common/utils';

const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  max-height: 100%;
`;

export const CardWithTitle: CardWithTitleComponent = props => {
  const { title, children, ...rest } = props;

  return (
    <StyledCard {...rest}>
      <Box pt={3} px={3} pb={2} sm={{ pt: 4, px: 5 }} as="header">
        {isElement(title) ? (
          title
        ) : (
          <Typography type="title3" weight="extrabold">
            {title}
          </Typography>
        )}
      </Box>
      <Box px={3} pb={5} sm={{ px: 5 }}>
        {children}
      </Box>
    </StyledCard>
  );
};

CardWithTitle.displayName = 'CardWithTitle';
