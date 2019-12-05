import React from 'react';
import styled from 'styled-components';
import { Props } from './Card.types';

import { Card } from '../..';
import { Display } from '../../common/Display';

const StyledContent = styled.div`
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content: React.FC<Props> = ({ children }) => <StyledContent>{children}</StyledContent>;

export default {
  title: 'Atoms | Card',

  parameters: {
    component: Card,
  },
};

export const basicCard = () => (
  <Card>
    <Content>A Card as a div containing content</Content>
  </Card>
);

export const cardRenderedWithDifferentHtmlTags = () => (
  <Display
    items={[
      {
        title: 'Section',
        component: (
          <Card as="section">
            <Content>A Card as a section containing content</Content>
          </Card>
        ),
      },
      {
        title: 'Article',
        component: (
          <Card as="article">
            <Content>A Card as a article containing content</Content>
          </Card>
        ),
      },
    ]}
  />
);

cardRenderedWithDifferentHtmlTags.story = {
  name: 'Card rendered with different html tags',
};

export const cardWithBar = () => (
  <Card barColor={t => t.color.shareville}>
    <Content>A Card as a div containing content</Content>
  </Card>
);

cardWithBar.story = {
  name: 'Card with colored top bar',
};
