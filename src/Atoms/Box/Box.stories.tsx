import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import { Box, Typography } from '../..';

const Outer = styled.div`
  background-color: ${p => p.theme.color.background};
  display: inline-block;
`;

const Inner = styled.div`
  background-color: ${p => p.theme.color.cta};
`;
const text = <Typography color={t => t.color.buttonText}>Some stuff here</Typography>;
storiesOf('Atoms | Box', module)
  .add('Margin', () => (
    <Outer>
      <Box m={4}>
        <Inner>{text}</Inner>
      </Box>
    </Outer>
  ))
  .add('Margin and different margin Y-axis', () => (
    <Outer>
      <Box m={4} my={2}>
        <Inner>{text}</Inner>
      </Box>
    </Outer>
  ))
  .add('Padding ', () => (
    <Outer>
      <Box p={4}>
        <Inner>{text}</Inner>
      </Box>
    </Outer>
  ))
  .add('Padding and different X-axis and left ', () => (
    <Outer>
      <Box p={4} px={2} pl={0}>
        <Inner>{text}</Inner>
      </Box>
    </Outer>
  ));
