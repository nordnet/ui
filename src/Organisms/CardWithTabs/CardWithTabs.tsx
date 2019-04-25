import React from 'react';

import { Tabs, CardWithTitle } from '../..';
import { Component } from './CardWithTabs.types';

export const CardWithTabs: Component = ({ title, children }) => (
  <CardWithTitle title={title}>
    <Tabs>{children}</Tabs>
  </CardWithTitle>
);

CardWithTabs.Tab = Tabs.Tab;
