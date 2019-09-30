import React from 'react';
import styled from 'styled-components';
import * as R from 'ramda';
import { Card } from '../..';
import { CardWithTitleComponent } from './CardWithTitle.types';

const StyledHeader = styled.header`
  padding: ${({ theme }) => theme.spacing.unit(5)}px;
`;

const omitProps = R.omit(['children', 'title']);

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
  const { title, children } = props;

  return (
    <Card {...omitProps(props)}>
      <StyledHeader>{title}</StyledHeader>
      {children}
    </Card>
  );
};

CardWithTitle.components = components;

CardWithTitle.displayName = 'CardWithTitle';
