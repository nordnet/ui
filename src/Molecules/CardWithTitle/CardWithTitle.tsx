import React from 'react';
import styled from 'styled-components';
import { Card } from '../..';
import { CardWithTitleComponent } from './CardWithTitle.types';

const StyledHeader = styled.header`
  padding: ${({ theme }) => theme.spacing.unit(5)}px;
`;

const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  max-height: 100%;
`;

const components = { StyledHeader };

export const CardWithTitle: CardWithTitleComponent & {
  /**
   * This will allow you to customize
   * inner parts with styled-components
   * @example
   * const CustomCardWithTitle= styled(CardWithTitle)`
   *  ${CardWithTitle.components.StyledHeader} {
   *    color: pink;
   * }
   * `
   * */
  components: typeof components;
} = props => {
  const { title, children, ...rest } = props;

  return (
    <StyledCard {...rest}>
      <StyledHeader>{title}</StyledHeader>
      {children}
    </StyledCard>
  );
};

CardWithTitle.components = components;

CardWithTitle.displayName = 'CardWithTitle';
