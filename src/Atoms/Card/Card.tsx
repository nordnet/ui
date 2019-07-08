import React from 'react';
import styled from 'styled-components';
import { Props } from './Card.types';

const StyledCard = styled.div<Props>`
  background: ${({ theme }) => theme.color.card};
  box-shadow: 0 2px 2px 0 ${({ theme }) => theme.color.shadowCard};
`;

export const Card: React.FC<Props> = ({ as, children, className }) => (
  <StyledCard className={className} as={as}>
    {children}
  </StyledCard>
);
Card.displayName = 'Card';
