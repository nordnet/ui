import React from 'react';
import styled from 'styled-components';
import { Props } from './Card.types';

import { Card, Typography } from '../..';
import { Display } from '../../common/Display';

const StyledContent = styled.div`
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content: React.FC<Props> = ({ children }) => <StyledContent>{children}</StyledContent>;

export default {
  title: 'Atoms / Card',

  parameters: {
    component: Card,
  },
};

export const BasicCard = () => (
  <Card>
    <Content>
      <Typography>A Card as a div containing content</Typography>
    </Content>
  </Card>
);

export const CardRenderedWithDifferentHtmlTags = {
  render: () => (
    <Display
      items={[
        {
          title: 'Section',
          component: (
            <Card as="section">
              <Content>
                <Typography>A Card as a section containing content</Typography>
              </Content>
            </Card>
          ),
        },
        {
          title: 'Article',
          component: (
            <Card as="article">
              <Content>
                <Typography>A Card as a article containing content</Typography>
              </Content>
            </Card>
          ),
        },
      ]}
    />
  ),

  name: 'Card rendered with different html tags',
};

export const CardWithBar = {
  render: () => (
    <Card barColor={(t) => t.color.shareville}>
      <Content>
        <Typography>A Card as a div containing content</Typography>
      </Content>
    </Card>
  ),

  name: 'Card with colored top bar',
};
