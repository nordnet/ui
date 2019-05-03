import React from 'react';
import styled from 'styled-components';
import * as R from 'ramda';
import { Card } from '../..';
import { CardWithTitleComponent } from './CardWithTitle.types';

const StyledHeader = styled.header`
  padding: ${({ theme }) => theme.spacing.unit(5)}px;
`;

const omitProps = R.omit(['children', 'title']);

export const CardWithTitle: CardWithTitleComponent = props => {
  const { title, children } = props;

  return (
    <Card {...omitProps(props)}>
      <StyledHeader>{title}</StyledHeader>
      {children}
    </Card>
  );
};

CardWithTitle.displayName = 'CardWithTitle';
