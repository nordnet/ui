import React from 'react';
import styled from 'styled-components';
import R from 'ramda';
import { Typography, Card } from '../..';
import { CardWithTitleComponent, Props } from './CardWithTitle.types';

const StyledCard = styled(Card)`
  padding: ${({ theme }) => theme.spacing.unit(5)}px;
`;
const StyledTitle = styled.div<Props>`
  padding-bottom: ${({ theme }) => theme.spacing.unit(5)}px;
`;

const omitProps = R.omit(['children', 'title']);

export const CardWithTitle: CardWithTitleComponent = props =>
  props.title ? (
    <StyledCard {...omitProps(props)}>
      <StyledTitle>
        <Typography type="title3">{props.title}</Typography>
      </StyledTitle>
      {props.children}
    </StyledCard>
  ) : (
    <StyledCard {...omitProps(props)}>{props.children}</StyledCard>
  );
CardWithTitle.displayName = 'CardWithTitle';
