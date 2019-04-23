import React from 'react';
import styled from 'styled-components';
import { Typography, Card } from '../..';
import { CardWithTitleComponent, Props } from './CardWithTitle.types';

const StyledTitle = styled.div<Props>`
  padding: ${({ theme }) => theme.spacing.unit(5)}px;
`;

export const CardWithTitle: CardWithTitleComponent = props =>
  props.title ? (
    <Card>
      <StyledTitle>
        <Typography type="title3">{props.title}</Typography>
      </StyledTitle>
      {props.children}
    </Card>
  ) : (
    <Card>{props.children}</Card>
  );
CardWithTitle.displayName = 'CardWithTitle';
