import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import { Props } from './CardWithTitle.types';

import { CardWithTitle } from '../..';

const StyledContent = styled.div`
  padding: 0 20px;
`;

const Content: React.FC<Props> = ({ children }) => <StyledContent>{children}</StyledContent>;

storiesOf('Molecules | CardWithTitle', module)
  .add('Basic CardWithTitle', () => (
    <CardWithTitle title="Konton">A CardWithTitle containing content</CardWithTitle>
  ))
  .add('CardWithTitle with padded content', () => (
    <CardWithTitle title="Konton">
      <Content>A CardWithTitle containing padded content</Content>
    </CardWithTitle>
  ))
  .add('CardWithTitle with no title', () => (
    <CardWithTitle>
      <Content>A CardWithTitle without title</Content>
    </CardWithTitle>
  ))
  .add('CardWithTitle as article', () => (
    <CardWithTitle as="article">
      <Content>A CardWithTitle as a article containing content</Content>
    </CardWithTitle>
  ));
