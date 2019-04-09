import React from 'react';
import styled from 'styled-components';
import R from 'ramda';
import { Text, Card } from '../..';
import { CardWithTitleComponent, Props } from './CardWithTitle.types';

const StyledTitle = styled.div<Props>`
  margin: ${({ theme }) => theme.spacing.unit(5)}px;
`;

const omitProps = R.omit(['children', 'title']);

export const CardWithTitle: CardWithTitleComponent = props =>
  props.title ? (
    <Card {...omitProps(props)}>
      <StyledTitle>
        <Text.Title3>{props.title}</Text.Title3>
      </StyledTitle>
      {props.children}
    </Card>
  ) : (
    <Card {...omitProps(props)}>{props.children}</Card>
  );
CardWithTitle.displayName = 'CardWithTitle';
