import React from 'react';
import { Meta, Story } from '@storybook/react';
import styled from 'styled-components';

import { Flexbox } from '../..';
import { Height, Width } from './Flexbox.types';

const Content = styled.div`
  box-sizing: border-box;
  border: 1px solid black;
  background-color: #eee;
  height: 100%;
`;

export default {
  title: 'Atoms / Flexbox',
  component: Flexbox,
} as Meta;

export const defaultStory = () => (
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
);

defaultStory.storyName = 'Default';

export const columnSizedFlexboxes = () => (
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

export const withCustomGutter = () => (
  <Flexbox container gutter={5}>
    <Flexbox item size={6}>
      <Content>Col 1</Content>
    </Flexbox>
    <Flexbox item size={6}>
      <Content>Col 2</Content>
    </Flexbox>
  </Flexbox>
);

export const withDirectionColumn = () => (
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

export const withConditionallyHiddenFlexItem = () => {
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

export const withConditionallyVisibleFlexItem = () => {
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

export const withContainerAndItemProps = () => {
  return (
    <Flexbox container gutter={5}>
      <Flexbox container item direction="column" gutter={5}>
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

export const withBreakpointProps = () => {
  return (
    <Flexbox
      container
      gutter={4}
      direction="column"
      sm={{ gutter: 6 }}
      md={{ gutter: 6, direction: 'row' }}
      lg={{ gutter: 10, direction: 'row' }}
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

const HeightAndWidthTemplate: Story<{
  height: Height;
  width: Width;
}> = ({ height, width }) => (
  <div style={{ height: '500px' }}>
    <Flexbox
      container
      width={width}
      height={height}
      alignItems="center"
      justifyContent="space-between"
      gutter={5}
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
);

export const WidthAndHeightInNumbers = HeightAndWidthTemplate.bind({});
WidthAndHeightInNumbers.args = {
  height: 100,
  width: 100,
};

export const WidthAndHeightInPercentage = HeightAndWidthTemplate.bind({});
WidthAndHeightInPercentage.args = {
  height: '50%',
  width: '50%',
};

export const differentSizedItems = () => (
  <Flexbox
    container
    width={100}
    height={100}
    alignItems="center"
    justifyContent="space-between"
    gutter={5}
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
);
