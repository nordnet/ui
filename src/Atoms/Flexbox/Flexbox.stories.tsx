import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import styled from 'styled-components';

import { Flexbox, Typography } from '../..';

const Content = styled.div`
  box-sizing: border-box;
  border: 1px solid black;
  background-color: #eee;
  height: 100%;
`;

const meta: Meta<typeof Flexbox> = {
  component: Flexbox,
  title: 'Atoms / Flexbox',
};

export default meta;
type Story = StoryObj<typeof Flexbox>;

export const DefaultStory = {
  render: () => (
    <Flexbox container>
      <Flexbox item>
        <Content>Col 1</Content>
      </Flexbox>
      <Flexbox item>
        <Content>Col 2</Content>
      </Flexbox>
      <Flexbox item>
        <Content>Col 3</Content>
      </Flexbox>
    </Flexbox>
  ),

  name: 'Default',
};

export const ColumnSizedFlexboxes = () => (
  <Flexbox container>
    <Flexbox item size={3}>
      <Content>Col 1</Content>
    </Flexbox>
    <Flexbox item size={6}>
      <Content>Col 2</Content>
    </Flexbox>
    <Flexbox item size={3}>
      <Content>Col 3</Content>
    </Flexbox>
  </Flexbox>
);

const tenTimes = [...Array(10)].map((_, i) => {
  return i + 1;
});

export const WithCustomGap = () => (
  <>
    <Typography type="title3">With gap as unit</Typography>
    <Flexbox container gap={5}>
      {tenTimes.map((i) => (
        <Content key={`unit-${i}`} style={{ width: '200px' }}>
          {i}
        </Content>
      ))}
    </Flexbox>

    <Typography type="title3">With gap as string</Typography>
    <Flexbox container gap="10px 10vw" wrap="wrap">
      {tenTimes.map((i) => (
        <Content key={`string-${i}`} style={{ width: '200px' }}>
          {i}
        </Content>
      ))}
    </Flexbox>

    <Typography type="title3">With gap as object</Typography>

    <Flexbox container gap={{ column: 5, row: 10 }} wrap="wrap">
      {tenTimes.map((i) => (
        <Content key={`obj-${i}`} style={{ width: '200px' }}>
          {i}
        </Content>
      ))}
    </Flexbox>
  </>
);

export const WithDirectionColumn = () => (
  <Flexbox container direction="column">
    <Flexbox item order={2}>
      <Content>Col 1</Content>
    </Flexbox>
    <Flexbox item order={1}>
      <Content>Col 2</Content>
    </Flexbox>
    <Flexbox item order={3}>
      <Content>Col 3</Content>
    </Flexbox>
  </Flexbox>
);

export const WithConditionallyHiddenFlexItem = () => {
  const showFirstItem = false;
  return (
    <Flexbox container>
      {showFirstItem && (
        <Flexbox item order={2}>
          <Content>Col 1</Content>
        </Flexbox>
      )}
      <Flexbox item order={1}>
        <Content>Col 2</Content>
      </Flexbox>
    </Flexbox>
  );
};

export const WithConditionallyVisibleFlexItem = () => {
  const showFirstItem = true;
  return (
    <Flexbox container>
      {showFirstItem && (
        <Flexbox item order={2}>
          <Content>Col 1</Content>
        </Flexbox>
      )}
      <Flexbox item order={1}>
        <Content>Col 2</Content>
      </Flexbox>
    </Flexbox>
  );
};

export const WithContainerAndItemProps = () => {
  return (
    <Flexbox container gap={5}>
      <Flexbox container item direction="column" gap={5}>
        <Flexbox item>
          <Content>First element here</Content>
        </Flexbox>
        <Flexbox item>
          <Content>Second element here</Content>
        </Flexbox>
      </Flexbox>
      <Flexbox item>
        <Content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dapibus neque in venenatis
          faucibus. Fusce vitae maximus diam. Ut placerat lacus id porttitor tristique. Mauris in
          neque tempus, venenatis metus vitae, pellentesque massa. Etiam blandit lacus diam,
          dignissim posuere massa semper maximus. In pretium commodo nisl sed ultrices. Duis gravida
          diam ac nisl sodales mollis. Quisque iaculis semper mi, eu interdum elit molestie quis.
          Vivamus rutrum cursus interdum. Suspendisse vehicula quam mi, a efficitur ante egestas
          eget.
        </Content>
      </Flexbox>
    </Flexbox>
  );
};

export const WithBreakpointProps = () => {
  return (
    <Flexbox
      container
      gap={4}
      direction="column"
      sm={{ gap: 6 }}
      md={{ gap: 6, direction: 'row' }}
      lg={{ gap: 10, direction: 'row' }}
      xl={{ gap: 10, direction: 'row' }}
    >
      <Flexbox item>
        <Content>First element here</Content>
      </Flexbox>
      <Flexbox item>
        <Content>Second element here</Content>
      </Flexbox>
      <Flexbox item>
        <Content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dapibus neque in venenatis
          faucibus. Fusce vitae maximus diam. Ut placerat lacus id porttitor tristique. Mauris in
          neque tempus, venenatis metus vitae, pellentesque massa. Etiam blandit lacus diam,
          dignissim posuere massa semper maximus. In pretium commodo nisl sed ultrices. Duis gravida
          diam ac nisl sodales mollis. Quisque iaculis semper mi, eu interdum elit molestie quis.
          Vivamus rutrum cursus interdum. Suspendisse vehicula quam mi, a efficitur ante egestas
          eget.
        </Content>
      </Flexbox>
    </Flexbox>
  );
};

const GrowingDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid black;
  background-color: #eee;
`;

export const WidthAndHeightInNumbers: Story = {
  render: () => (
    <div style={{ height: '500px' }}>
      <Flexbox
        container
        width={100}
        height={100}
        alignItems="center"
        justifyContent="space-between"
        gap={5}
      >
        <Flexbox item height="100%">
          <GrowingDiv>One</GrowingDiv>
        </Flexbox>
        <Flexbox item height="100%">
          <GrowingDiv>Two</GrowingDiv>
        </Flexbox>
        <Flexbox item height="100%">
          <GrowingDiv>Three</GrowingDiv>
        </Flexbox>
      </Flexbox>
    </div>
  ),
};

export const WidthAndHeightInPercentage: Story = {
  render: () => (
    <div style={{ height: '500px' }}>
      <Flexbox
        container
        width="50%"
        height="50%"
        alignItems="center"
        justifyContent="space-between"
        gap={5}
      >
        <Flexbox item height="100%">
          <GrowingDiv>One</GrowingDiv>
        </Flexbox>
        <Flexbox item height="100%">
          <GrowingDiv>Two</GrowingDiv>
        </Flexbox>
        <Flexbox item height="100%">
          <GrowingDiv>Three</GrowingDiv>
        </Flexbox>
      </Flexbox>
    </div>
  ),
};

export const DifferentSizedItems: Story = {
  render: () => (
    <Flexbox
      container
      width={100}
      height={100}
      alignItems="center"
      justifyContent="space-between"
      gap={5}
    >
      <Flexbox item width="100%" height="100%">
        <GrowingDiv>One</GrowingDiv>
      </Flexbox>
      <Flexbox item width="66%" height="66%">
        <GrowingDiv>Two</GrowingDiv>
      </Flexbox>
      <Flexbox item width="33%" height="33%">
        <GrowingDiv>Three</GrowingDiv>
      </Flexbox>
    </Flexbox>
  ),
};
