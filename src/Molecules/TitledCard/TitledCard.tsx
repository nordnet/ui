import React from 'react';
import styled from 'styled-components';
import { Text, Card } from '../..';
import { TitledCardComponent, Props } from './TitledCard.types';

const StyledTitle = styled.div<Props>`
  margin: ${({ theme }) => theme.spacing.unit(5)}px;
`;

export const TitledCard: TitledCardComponent = props =>
  props.title ? (
    <Card>
      <StyledTitle>
        <Text.Title3>{props.title}</Text.Title3>
      </StyledTitle>
      {props.children}
    </Card>
  ) : (
    <Card>{props.children}</Card>
  );
TitledCard.displayName = 'TitledCard';
