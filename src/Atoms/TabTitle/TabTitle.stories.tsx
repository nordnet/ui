import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { TabTitle, Flexbox } from '../..';

const Container = styled.div`
  display: inline-flex;
`;

storiesOf('Atoms | TabTitle', module)
  .add('Default', () => (
    <Container>
      <TabTitle>This is tab title</TabTitle>
    </Container>
  ))
  .add('Active', () => (
    <Container>
      <TabTitle active>This is tab title</TabTitle>
    </Container>
  ))
  .add('With height modified', () => (
    <Container>
      <TabTitle height={11} active>
        This is tab title
      </TabTitle>
    </Container>
  ))
  .add('Integration: with Flexbox', () => (
    <Flexbox container direction="row">
      <Flexbox item>
        <Container>
          <TabTitle>TabTitle1</TabTitle>
        </Container>
      </Flexbox>
      <Flexbox item>
        <Container>
          <TabTitle active>TabTitle2</TabTitle>
        </Container>
      </Flexbox>
      <Flexbox item>
        <Container>
          <TabTitle>TabTitle3</TabTitle>
        </Container>
      </Flexbox>
    </Flexbox>
  ));
