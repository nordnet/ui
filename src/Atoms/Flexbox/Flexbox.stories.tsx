import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';

import { Flexbox } from '../..';

const StyledContent = styled.div`
  box-sizing: border-box;
  border: 1px solid black;
  background-color: #eee;
  height: 100%;
`;
const Content = ({ children }: any) => <StyledContent>{children}</StyledContent>;

storiesOf('Atoms | Flexbox', module)
  .add('Flexbox default', () => (
    <Flexbox.Container>
      <Flexbox.Item size={3}>
        <Content>Col 1</Content>
      </Flexbox.Item>
      <Flexbox.Item size={6}>
        <Content>Col 2</Content>
      </Flexbox.Item>
      <Flexbox.Item size={3}>
        <Content>Col 3</Content>
      </Flexbox.Item>
    </Flexbox.Container>
  ))
  .add('Flexbox with custom gutter', () => (
    <Flexbox.Container gutter={2}>
      <Flexbox.Item size={6}>
        <Content>Col 1</Content>
      </Flexbox.Item>
      <Flexbox.Item size={6}>
        <Content>Col 2</Content>
      </Flexbox.Item>
    </Flexbox.Container>
  ))
  .add('Flexbox with direction: column', () => (
    <Flexbox.Container direction="column">
      <Flexbox.Item order={2}>
        <Content>Col 1</Content>
      </Flexbox.Item>
      <Flexbox.Item order={1}>
        <Content>Col 2</Content>
      </Flexbox.Item>
      <Flexbox.Item order={3}>
        <Content>Col 3</Content>
      </Flexbox.Item>
    </Flexbox.Container>
  ))
  .add('Flexbox with conditionally hidden flex item', () => {
    const showFirstItem = false;
    return (
      <Flexbox.Container>
        {showFirstItem && (
          <Flexbox.Item order={2}>
            <Content>Col 1</Content>
          </Flexbox.Item>
        )}
        <Flexbox.Item order={1}>
          <Content>Col 2</Content>
        </Flexbox.Item>
      </Flexbox.Container>
    );
  })
  .add('Flexbox with conditionally visible flex item', () => {
    const showFirstItem = true;
    return (
      <Flexbox.Container>
        {showFirstItem && (
          <Flexbox.Item order={2}>
            <Content>Col 1</Content>
          </Flexbox.Item>
        )}
        <Flexbox.Item order={1}>
          <Content>Col 2</Content>
        </Flexbox.Item>
      </Flexbox.Container>
    );
  });
