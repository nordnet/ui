import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import FlexTable from './FlexTable';
import { Box, Typography } from '../..';
import docs from './FlexTable.mdx';
import { StyledBackground } from './storiesShared';

export default {
  title: 'Molecules | FlexTable / FlexTable with different size props',
  decorators: [withKnobs],
  parameters: {
    component: FlexTable,
    ...docs.parameters,
  },
};

export const TablesWithDifferentDensities = () => (
  <StyledBackground>
    <Typography type="title3">Tables With Different Densities</Typography>
    <Typography type="primary">Default (Medium)</Typography>
    <Box mb={10}>
      <FlexTable>
        <FlexTable.HeaderRow>
          <FlexTable.Header columnId="column1">Header 1</FlexTable.Header>
          <FlexTable.Header columnId="column2">Header 2</FlexTable.Header>
          <FlexTable.Header columnId="column3">Header 3</FlexTable.Header>
        </FlexTable.HeaderRow>
        <FlexTable.Row>
          <FlexTable.Cell columnId="column1">Cell 1-1</FlexTable.Cell>
          <FlexTable.Cell columnId="column2">Cell 1-2</FlexTable.Cell>
          <FlexTable.Cell columnId="column3">Cell 1-3</FlexTable.Cell>
        </FlexTable.Row>
        <FlexTable.Row>
          <FlexTable.Cell columnId="column1">Cell 2-1</FlexTable.Cell>
          <FlexTable.Cell columnId="column2">Cell 2-2</FlexTable.Cell>
          <FlexTable.Cell columnId="column3">Cell 2-3</FlexTable.Cell>
        </FlexTable.Row>
      </FlexTable>
    </Box>

    <Box mb={10}>
      <Typography type="primary">Small</Typography>
      <FlexTable density="s">
        <FlexTable.HeaderRow>
          <FlexTable.Header columnId="column1">Header 1</FlexTable.Header>
          <FlexTable.Header columnId="column2">Header 2</FlexTable.Header>
          <FlexTable.Header columnId="column3">Header 3</FlexTable.Header>
        </FlexTable.HeaderRow>
        <FlexTable.Row>
          <FlexTable.Cell columnId="column1">Cell 1-1</FlexTable.Cell>
          <FlexTable.Cell columnId="column2">Cell 1-2</FlexTable.Cell>
          <FlexTable.Cell columnId="column3">Cell 1-3</FlexTable.Cell>
        </FlexTable.Row>
        <FlexTable.Row>
          <FlexTable.Cell columnId="column1">Cell 2-1</FlexTable.Cell>
          <FlexTable.Cell columnId="column2">Cell 2-2</FlexTable.Cell>
          <FlexTable.Cell columnId="column3">Cell 2-3</FlexTable.Cell>
        </FlexTable.Row>
      </FlexTable>
    </Box>

    <Box mb={10}>
      <Typography type="primary">Medium</Typography>
      <FlexTable>
        <FlexTable.HeaderRow>
          <FlexTable.Header columnId="column1">Header 1</FlexTable.Header>
          <FlexTable.Header columnId="column2">Header 2</FlexTable.Header>
          <FlexTable.Header columnId="column3">Header 3</FlexTable.Header>
        </FlexTable.HeaderRow>
        <FlexTable.Row>
          <FlexTable.Cell columnId="column1">Cell 1-1</FlexTable.Cell>
          <FlexTable.Cell columnId="column2">Cell 1-2</FlexTable.Cell>
          <FlexTable.Cell columnId="column3">Cell 1-3</FlexTable.Cell>
        </FlexTable.Row>
        <FlexTable.Row>
          <FlexTable.Cell columnId="column1">Cell 2-1</FlexTable.Cell>
          <FlexTable.Cell columnId="column2">Cell 2-2</FlexTable.Cell>
          <FlexTable.Cell columnId="column3">Cell 2-3</FlexTable.Cell>
        </FlexTable.Row>
      </FlexTable>
    </Box>

    <Typography type="primary">Large</Typography>
    <FlexTable density="l">
      <FlexTable.HeaderRow>
        <FlexTable.Header columnId="column1">Header 1</FlexTable.Header>
        <FlexTable.Header columnId="column2">Header 2</FlexTable.Header>
        <FlexTable.Header columnId="column3">Header 3</FlexTable.Header>
      </FlexTable.HeaderRow>
      <FlexTable.Row>
        <FlexTable.Cell columnId="column1">Cell 1-1</FlexTable.Cell>
        <FlexTable.Cell columnId="column2">Cell 1-2</FlexTable.Cell>
        <FlexTable.Cell columnId="column3">Cell 1-3</FlexTable.Cell>
      </FlexTable.Row>
      <FlexTable.Row>
        <FlexTable.Cell columnId="column1">Cell 2-1</FlexTable.Cell>
        <FlexTable.Cell columnId="column2">Cell 2-2</FlexTable.Cell>
        <FlexTable.Cell columnId="column3">Cell 2-3</FlexTable.Cell>
      </FlexTable.Row>
    </FlexTable>
  </StyledBackground>
);

export const TablesWithDifferentFontSizes = () => {
  const TablesWithDifferentFontSizesExample = () => (
    <StyledBackground>
      <Box mb={10}>
        <Typography type="primary">Default (Medium)</Typography>
        <FlexTable>
          <FlexTable.HeaderRow>
            <FlexTable.Header columnId="column1">Header 1</FlexTable.Header>
            <FlexTable.Header columnId="column2">Header 2</FlexTable.Header>
            <FlexTable.Header columnId="column3">Header 3</FlexTable.Header>
          </FlexTable.HeaderRow>
          <FlexTable.Row>
            <FlexTable.Cell columnId="column1">Cell 1-1</FlexTable.Cell>
            <FlexTable.Cell columnId="column2">Cell 1-2</FlexTable.Cell>
            <FlexTable.Cell columnId="column3">Cell 1-3</FlexTable.Cell>
          </FlexTable.Row>
          <FlexTable.Row>
            <FlexTable.Cell columnId="column1">Cell 2-1</FlexTable.Cell>
            <FlexTable.Cell columnId="column2">Cell 2-2</FlexTable.Cell>
            <FlexTable.Cell columnId="column3">Cell 2-3</FlexTable.Cell>
          </FlexTable.Row>
        </FlexTable>
      </Box>

      <Box mb={10}>
        <Typography type="primary">Small</Typography>
        <FlexTable fontSize="s">
          <FlexTable.HeaderRow>
            <FlexTable.Header columnId="column1">Header 1</FlexTable.Header>
            <FlexTable.Header columnId="column2">Header 2</FlexTable.Header>
            <FlexTable.Header columnId="column3">Header 3</FlexTable.Header>
          </FlexTable.HeaderRow>
          <FlexTable.Row>
            <FlexTable.Cell columnId="column1">Cell 1-1</FlexTable.Cell>
            <FlexTable.Cell columnId="column2">Cell 1-2</FlexTable.Cell>
            <FlexTable.Cell columnId="column3">Cell 1-3</FlexTable.Cell>
          </FlexTable.Row>
          <FlexTable.Row>
            <FlexTable.Cell columnId="column1">Cell 2-1</FlexTable.Cell>
            <FlexTable.Cell columnId="column2">Cell 2-2</FlexTable.Cell>
            <FlexTable.Cell columnId="column3">Cell 2-3</FlexTable.Cell>
          </FlexTable.Row>
        </FlexTable>
      </Box>

      <Typography type="primary">Medium</Typography>
      <FlexTable fontSize="m">
        <FlexTable.HeaderRow>
          <FlexTable.Header columnId="column1">Header 1</FlexTable.Header>
          <FlexTable.Header columnId="column2">Header 2</FlexTable.Header>
          <FlexTable.Header columnId="column3">Header 3</FlexTable.Header>
        </FlexTable.HeaderRow>
        <FlexTable.Row>
          <FlexTable.Cell columnId="column1">Cell 1-1</FlexTable.Cell>
          <FlexTable.Cell columnId="column2">Cell 1-2</FlexTable.Cell>
          <FlexTable.Cell columnId="column3">Cell 1-3</FlexTable.Cell>
        </FlexTable.Row>
        <FlexTable.Row>
          <FlexTable.Cell columnId="column1">Cell 2-1</FlexTable.Cell>
          <FlexTable.Cell columnId="column2">Cell 2-2</FlexTable.Cell>
          <FlexTable.Cell columnId="column3">Cell 2-3</FlexTable.Cell>
        </FlexTable.Row>
      </FlexTable>
    </StyledBackground>
  );

  return (
    <StyledBackground>
      <Typography type="title3">Tables With Different Font Sizes</Typography>
      <TablesWithDifferentFontSizesExample />
    </StyledBackground>
  );
};

export const TablesWithDifferentSizesInMobile = () => (
  <StyledBackground>
    <Typography type="title3">Tables With Different Sizes on mobile</Typography>
    <Typography type="primary">Small density and font on desktop, large on mobile</Typography>
    <FlexTable density="l" fontSize="m" md={{ density: 's', fontSize: 's' }}>
      <FlexTable.HeaderRow>
        <FlexTable.Header columnId="column1">Header 1</FlexTable.Header>
        <FlexTable.Header columnId="column2">Header 2</FlexTable.Header>
        <FlexTable.Header columnId="column3">Header 3</FlexTable.Header>
      </FlexTable.HeaderRow>
      <FlexTable.Row>
        <FlexTable.Cell columnId="column1">Cell 1-1</FlexTable.Cell>
        <FlexTable.Cell columnId="column2">Cell 1-2</FlexTable.Cell>
        <FlexTable.Cell columnId="column3">Cell 1-3</FlexTable.Cell>
      </FlexTable.Row>
      <FlexTable.Row>
        <FlexTable.Cell columnId="column1">Cell 2-1</FlexTable.Cell>
        <FlexTable.Cell columnId="column2">Cell 2-2</FlexTable.Cell>
        <FlexTable.Cell columnId="column3">Cell 2-3</FlexTable.Cell>
      </FlexTable.Row>
      <FlexTable.FooterRow>
        <FlexTable.Footer columnId="column1">Footer 1</FlexTable.Footer>
        <FlexTable.Footer columnId="column2">Footer 2</FlexTable.Footer>
        <FlexTable.Footer columnId="column3">Footer 3</FlexTable.Footer>
      </FlexTable.FooterRow>
    </FlexTable>
  </StyledBackground>
);

export const TablesWithDifferentColumnDistanceOnMobile = () => (
  <StyledBackground>
    <Typography type="title3">Tables With Different Column Distance on mobile</Typography>
    <FlexTable columnDistance={2} sm={{ columnDistance: 10 }}>
      <FlexTable.HeaderRow>
        <FlexTable.Header columnId="column1">Header 1</FlexTable.Header>
        <FlexTable.Header columnId="column2" justifyContent="flex-end">
          Header 2
        </FlexTable.Header>
        <FlexTable.Header columnId="column3">Header 3</FlexTable.Header>
      </FlexTable.HeaderRow>
      <FlexTable.Row>
        <FlexTable.Cell columnId="column1">Cell 1-1</FlexTable.Cell>
        <FlexTable.Cell columnId="column2" justifyContent="flex-end">
          Cell 1-2
        </FlexTable.Cell>
        <FlexTable.Cell columnId="column3">Cell 1-3</FlexTable.Cell>
      </FlexTable.Row>
      <FlexTable.Row>
        <FlexTable.Cell columnId="column1">Cell 2-1</FlexTable.Cell>
        <FlexTable.Cell columnId="column2" justifyContent="flex-end">
          Cell 2-2
        </FlexTable.Cell>
        <FlexTable.Cell columnId="column3">Cell 2-3</FlexTable.Cell>
      </FlexTable.Row>
    </FlexTable>
  </StyledBackground>
);
