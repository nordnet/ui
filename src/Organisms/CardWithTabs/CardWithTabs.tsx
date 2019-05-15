import React from 'react';
import styled from 'styled-components';
import { Tabs, CardWithTitle } from '../..';
import { Component } from './CardWithTabs.types';

const StyledTabs = styled(Tabs)`
  padding: 0 ${({ theme }) => theme.spacing.unit(5)}px;
`;

const CardWithTabs: Component = ({ children, initialActiveTabIndex, activeTabIndex, ...rest }) => (
  <CardWithTitle {...rest}>
    <StyledTabs activeTabIndex={activeTabIndex} initialActiveTabIndex={initialActiveTabIndex}>
      {children}
    </StyledTabs>
  </CardWithTitle>
);

CardWithTabs.Tab = Tabs.Tab;

export { CardWithTabs };
