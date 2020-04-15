import React from 'react';
import styled from 'styled-components';
import { Tabs, CardWithTitle } from '../..';
import { Component } from './CardWithTabs.types';

const StyledTabs = styled(Tabs)`
  padding: 0 ${({ theme }) => theme.spacing.unit(5)}px;
`;

const CustomCardWithTitle = styled(CardWithTitle)`
  ${CardWithTitle.components.StyledHeader} {
    padding-bottom: ${({ theme }) => theme.spacing.unit(2)}px;
  }
`;

const CardWithTabs: Component = ({
  children,
  initialActiveTabIndex,
  activeTabIndex,
  title,
  ...rest
}) => {
  if (!title) {
    return null;
  }

  return (
    <CustomCardWithTitle {...rest}>
      <StyledTabs activeTabIndex={activeTabIndex} initialActiveTabIndex={initialActiveTabIndex}>
        {children}
      </StyledTabs>
    </CustomCardWithTitle>
  );
};

CardWithTabs.Tab = Tabs.Tab;

export { CardWithTabs };
