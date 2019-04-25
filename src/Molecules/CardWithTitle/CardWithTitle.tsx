import React from 'react';
import styled from 'styled-components';
import R from 'ramda';
import { Card, Typography } from '../..';
import { CardWithTitleComponent } from './CardWithTitle.types';

const StyledHeader = styled.header`
  padding: ${({ theme }) => theme.spacing.unit(5)}px;
`;

const isString = (x: any): x is string => typeof x === 'string' || x instanceof String;

const omitProps = R.omit(['children', 'title']);

export const CardWithTitle: CardWithTitleComponent = props => {
  const { title, children } = props;

  if (isString(title)) {
    return (
      <Card {...omitProps(props)}>
        <StyledHeader>
          <Typography type="title3" as="h2">
            {title}
          </Typography>
        </StyledHeader>
        {children}
      </Card>
    );
  }

  return (
    <Card {...omitProps(props)}>
      <StyledHeader>{title}</StyledHeader>
      {children}
    </Card>
  );
};

CardWithTitle.displayName = 'CardWithTitle';
