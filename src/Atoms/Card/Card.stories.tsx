import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import Card from '.';
import { Props } from './Card.types';

const stories = storiesOf('Atoms/Card', module);

const StyledContent = styled.div`
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content: React.FC<Props> = ({ children }) => <StyledContent>{children}</StyledContent>;

stories.add('Basic Card', () => {
  return (
    <Card>
      <Content>A Card as a div containing content</Content>
    </Card>
  );
});

stories.add('Card as section', () => {
  return (
    <Card as="section">
      <Content>A Card as a section containing content</Content>
    </Card>
  );
});

stories.add('Card as article', () => {
  return (
    <Card as="article">
      <Content>A Card as a article containing content</Content>
    </Card>
  );
});
