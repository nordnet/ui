import React from 'react';
import Color from 'color';
import styled from 'styled-components';
import { Box, Typography } from '../..';

const Outer = styled.div`
  display: inline-block;
  ${(p) => {
    const stripes = p.theme.color.warning;
    const stripesDark = Color(stripes).lighten(0.5);

    return `
      background: repeating-linear-gradient(
        -45deg,
        ${stripes},
        ${stripes} ${p.theme.spacing.unit(2)}px,
        ${stripesDark} ${p.theme.spacing.unit(2)}px,
        ${stripesDark} ${p.theme.spacing.unit(4)}px
      );
    `;
  }}
`;

const StyledBox = styled(Box)`
  background-color: ${(p) => p.theme.color.background};
`;

const withOuter = (storyFn: () => JSX.Element) => <Outer>{storyFn()}</Outer>;
const text = (
  <StyledBox p={2}>
    <Typography color={(t) => t.color.text}>Some random content here</Typography>
  </StyledBox>
);

export default {
  title: 'Atoms / Box',
  decorators: [withOuter],

  parameters: {
    component: Box,
  },
};

export const margin = () => <Box m={4}>{text}</Box>;

export const marginAndDifferentMarginYAxis = {
  render: () => (
    <Box m={8} my={4}>
      {text}
    </Box>
  ),

  name: 'Margin and different margin Y-axis',
};

export const padding = {
  render: () => (
    <Outer>
      <Box p={8}>{text}</Box>
    </Outer>
  ),

  name: 'Padding ',
};

export const paddingAndDifferentXAxisAndLeft = {
  render: () => (
    <Outer>
      <Box p={8} px={4} pl={0}>
        {text}
      </Box>
    </Outer>
  ),

  name: 'Padding and different X-axis and left ',
};

export const differentPaddingForDifferentScreenSizes = {
  render: () => (
    <Outer>
      <Box p={0} sm={{ p: 4 }}>
        {text}
      </Box>
    </Outer>
  ),

  name: 'Different padding for different screen sizes ',
};

export const withBackgroundColor = {
  render: () => (
    <Outer>
      <Box p={0} sm={{ p: 4 }} backgroundColor={(t) => t.color.cta}>
        <Typography type="primary" color={(t) => t.color.textLight}>
          Lorem ipsum dolor sit amet.
        </Typography>
      </Box>
    </Outer>
  ),

  name: 'With background color',
};
