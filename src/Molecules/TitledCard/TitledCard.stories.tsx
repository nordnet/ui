import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import { Props } from './TitledCard.types';

import { TitledCard } from '../..';

const StyledContent = styled.div`
  padding: 0 20px;
`;

const Content: React.FC<Props> = ({ children }) => <StyledContent>{children}</StyledContent>;

storiesOf('Molecules | TitledCard', module)
  .add('Basic TitledCard', () => (
    <TitledCard title="Konton">A TitledCard containing content</TitledCard>
  ))
  .add('TitledCard with padded content', () => (
    <TitledCard title="Konton">
      <Content>A TitledCard containing padded content</Content>
    </TitledCard>
  ))
  .add('TitledCard with no title', () => (
    <TitledCard>
      <Content>A TitledCard without title</Content>
    </TitledCard>
  ))
  .add('TitledCard as article', () => (
    <TitledCard as="article">
      <Content>A TitledCard as a article containing content</Content>
    </TitledCard>
  ));
