import React from 'react';
import styled from 'styled-components';
import MD from 'react-markdown';
import { propOr } from 'ramda';
import { theme, createTheme, Table, Thead, Tbody, Th, Tr, Td, Flexbox } from '..';
import { rawColor } from './theme';
import colorDocs from './Colors.md';
import { Display } from '../common/Display';

const Color = styled.div`
  width: ${(p) => p.theme.spacing.unit(14)}px;
  height: ${(p) => p.theme.spacing.unit(14)}px;
  background-color: ${(p) => p.color};
  border: 1px solid #eee;
  display: ;
`;

const ColorInArray = styled.div`
  width: ${(p) => p.theme.spacing.unit(4)}px;
  height: ${(p) => p.theme.spacing.unit(4)}px;
  padding: 0;
  background-color: ${(p) => p.color};
  border: 1px solid #eee;
  display: ;
`;

const colorWithValue = (color: string | string[]) =>
  typeof color === 'string' ? (
    <>
      <Color color={color} />
      <div>{color}</div>
    </>
  ) : (
    color.map((c: string) => (
      <Flexbox container gutter={1}>
        <ColorInArray color={c} />
        <div>{c}</div>
      </Flexbox>
    ))
  );

export default {
  title: 'Theme',
};

export const documentation = () => <MD source={colorDocs} />;

export const colorsSemantic = () => {
  const a11yTheme = createTheme({ a11yColors: true });
  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Name</Th>
          <Th>Default</Th>
          <Th>A11y</Th>
        </Tr>
      </Thead>
      <Tbody>
        {Object.keys(theme.color).map((title) => (
          <Tr key={`theme-${title}`}>
            <Td>{title}</Td>
            <Td>{colorWithValue(theme.color[title])}</Td>
            <Td>{colorWithValue(a11yTheme.color[title])}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

colorsSemantic.story = {
  name: 'Colors (semantic)',
};

export const colorsPalette = () => {
  return (
    <>
      {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
      <h1>⚠️ Internal object, use colors (semantic)</h1>
      <Display
        items={Object.entries(rawColor).map(([title, color]) => ({
          title,
          component: (
            <>
              <Color color={color} />
              <div>{color}</div>
            </>
          ),
        }))}
      />
    </>
  );
};

colorsPalette.story = {
  name: 'Colors (palette)',
};

export const screenSizes = () => (
  <Table>
    <Thead>
      <Tr>
        <Th>Name</Th>
        <Th>Size</Th>
        <Th>Offset</Th>
      </Tr>
    </Thead>
    <Tbody>
      {Object.entries(theme.breakpoints).map(([title, breakpoint]) => (
        <Tr key={`breakpoints-${title}`}>
          <Td>{title}</Td>
          <Td>
            <pre>{propOr('', 'size', breakpoint)}</pre>
          </Td>
          <Td>
            <pre>{propOr(0, 'offset', breakpoint)} units</pre>
          </Td>
        </Tr>
      ))}
    </Tbody>
  </Table>
);

screenSizes.story = {
  name: 'Screen sizes',
};
