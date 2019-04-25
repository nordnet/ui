import React from 'react';
import styled from 'styled-components';
import R from 'ramda';
import { Card, Flexbox, Typography } from '../..';
import { CardWithTitleComponent, Props } from './CardWithTitle.types';

const StyledHeader = styled.header<Props>`
  padding: ${({ theme }) => theme.spacing.unit(5)}px;
`;

const omitProps = R.omit(['children', 'title']);

export const CardWithTitle: CardWithTitleComponent = props => {
  const { title, titleAddition, children } = props;

  return (
    <Card {...omitProps(props)}>
      <StyledHeader>
        {titleAddition ? (
          <Flexbox.Container justifyContent="space-between" alignItems="center" direction="row">
            <Flexbox.Item>
              <Typography type="title3" as="h2">
                {props.title}
              </Typography>
            </Flexbox.Item>
            <Flexbox.Item>{props.titleAddition}</Flexbox.Item>
          </Flexbox.Container>
        ) : (
          <Typography type="title3" as="h2">
            {title}
          </Typography>
        )}
      </StyledHeader>
      {children}
    </Card>
  );
};

CardWithTitle.displayName = 'CardWithTitle';
