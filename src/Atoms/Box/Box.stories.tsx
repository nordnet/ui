import React from 'react';
import { storiesOf, RenderFunction } from '@storybook/react';
import styled from 'styled-components';
import { Box, Typography } from '../..';

const Outer = styled.div`
  background-color: ${p => p.theme.color.cta};
  display: inline-block;
`;

const Inner = styled.div`
  background-color: ${p => p.theme.color.background};
`;

const withOuter = (storyFn: RenderFunction) => <Outer>{storyFn()}</Outer>;
const text = (
  <Inner>
    <Typography color={t => t.color.background}>Some stuff here</Typography>
  </Inner>
);

storiesOf('Atoms | Box', module)
  .addDecorator(withOuter)
  .add('Margin', () => <Box m={4}>{text}</Box>)
  .add('Margin and different margin Y-axis', () => (
    <Box m={4} my={2}>
      {text}
    </Box>
  ))
  .add('Padding ', () => (
    <Outer>
      <Box p={4}>{text}</Box>
    </Outer>
  ))
  .add('Padding and different X-axis and left ', () => (
    <Outer>
      <Box p={4} px={2} pl={0}>
        {text}
      </Box>
    </Outer>
  ))
  .add('Different padding for different screen sizes ', () => (
    <Outer>
      <Box p={0} sm={{ p: 4 }}>
        {text}
      </Box>
    </Outer>
  ));
