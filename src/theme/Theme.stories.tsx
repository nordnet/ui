import React, { useState } from 'react';
import styled from 'styled-components';
import MD from 'react-markdown';
import copy from 'copy-to-clipboard';
import { propOr } from 'ramda';
import {
  Box,
  Button,
  createTheme,
  Flexbox,
  Icon,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  theme,
  Tooltip,
  Tr,
  Typography,
} from '..';
import defaultColors from './defaultColors';
import accessabilityColors from './accessabilityColors';
import colorDocs from './Colors.md';
import { flattenObject } from '../common/utils';

const Color = styled.div<{ $color: string }>`
  width: ${(p) => p.theme.spacing.unit(14)}px;
  height: ${(p) => p.theme.spacing.unit(14)}px;
  background-color: ${(p) => p.$color};
  border: 1px solid #eee;
`;

const TokenColor = styled.div<{ $color: string }>`
  width: 60%;
  height: ${(p) => p.theme.spacing.unit(16)}px;
  background-color: ${(p) => p.$color};
  border-radius: 6px;
  margin-left: ${(p) => p.theme.spacing.unit(5)}px;
`;

const ColorInArray = styled.div<{ $color: string }>`
  width: ${(p) => p.theme.spacing.unit(4)}px;
  height: ${(p) => p.theme.spacing.unit(4)}px;
  padding: 0;
  background-color: ${(p) => p.$color};
  border: 1px solid #eee;
`;

const StyledFlexbox = styled(Flexbox)`
  background: ${(p) => p.theme.colorTokens.accent.background_default};
  color: ${(p) => p.theme.colorTokens.neutral.text_strong};
  border-radius: 6px;
  max-width: fit-content;
  padding: ${(p) => p.theme.spacing.unit(1)}px ${(p) => p.theme.spacing.unit(2)}px;
`;

const StyledButton = styled(Button)`
  color: inherit;

  &:hover {
    color: ${(p) => p.theme.colorTokens.accent.background_strong};
  }
`;

const colorWithValue = (color: string | string[]) =>
  typeof color === 'string' ? (
    <>
      <Color $color={color} />
      <>{color}</>
    </>
  ) : (
    color?.map((c: string) => (
      <Flexbox key={c} container gap={1}>
        <ColorInArray $color={c} />
        <>{c}</>
      </Flexbox>
    ))
  );

const TokenName = ({ title }: { title: string }) => {
  const [label, setLabel] = useState('Copy to clipboard');

  const copyTokenName = (tokenName: string) => {
    copy(tokenName);
    setLabel('Copied!');
  };

  return (
    <StyledFlexbox container alignItems="center" gap={2}>
      {title}
      <Tooltip label={label} position="right" invertedColors>
        <StyledButton variant="neutral" onClick={() => copyTokenName(title)}>
          <Icon.Copy16 color="inherit" />
        </StyledButton>
      </Tooltip>
    </StyledFlexbox>
  );
};

export default {
  title: 'Others / Theme',
};

export const Documentation = () => <MD>{colorDocs}</MD>;

export const ColorsSemantic = {
  render: () => {
    const a11yTheme = createTheme({ a11yColors: true });
    const darkTheme = createTheme({ darkColors: true });
    return (
      <Table>
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Default</Th>
            <Th>A11y</Th>
            <Th>Dark</Th>
          </Tr>
        </Thead>
        <Tbody>
          {Object.keys(theme.color)?.map((title) => (
            <Tr key={`theme-${title}`}>
              <Td>{title}</Td>
              <Td>{colorWithValue(theme.color[title])}</Td>
              <Td>{colorWithValue(a11yTheme.color[title])}</Td>
              <Td>{colorWithValue(darkTheme.color[title])}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    );
  },

  name: 'Colors (semantic) deprecated',
};

export const DesignTokensLightColors = () => {
  const { colorTokens } = createTheme();
  const flattenedColorTokens = flattenObject(colorTokens);

  return (
    <Table>
      <Thead>
        <Tr>
          <Th>
            <Box ml={5}>Color</Box>
          </Th>
          <Th>Token name</Th>
          <Th>Value</Th>
        </Tr>
      </Thead>
      <Tbody>
        {Object.keys(flattenedColorTokens)?.map((title) => (
          <Tr key={title}>
            <Td>
              <TokenColor $color={flattenedColorTokens[title]} />
            </Td>
            <Td>
              <TokenName title={title} />
            </Td>
            <Td>{flattenedColorTokens[title]}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export const DesignTokensA11yColors = {
  render: () => {
    const { colorTokens } = createTheme({ tokensTheme: 'a11y' });
    const flattenedColorTokens = flattenObject(colorTokens);

    return (
      <Table>
        <Thead>
          <Tr>
            <Th>
              <Box ml={5}>Color</Box>
            </Th>
            <Th>Token name</Th>
            <Th>Value</Th>
          </Tr>
        </Thead>
        <Tbody>
          {Object.keys(flattenedColorTokens)?.map((title) => (
            <Tr key={title}>
              <Td>
                <TokenColor $color={flattenedColorTokens[title]} />
              </Td>
              <Td>
                <TokenName title={title} />
              </Td>
              <Td>{flattenedColorTokens[title]}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    );
  },

  name: 'Design Tokens a11y Colors',
};

export const DesignTokensDarkColors = () => {
  const { colorTokens } = createTheme({ tokensTheme: 'dark' });
  const flattenedColorTokens = flattenObject(colorTokens);

  return (
    <Table>
      <Thead>
        <Tr>
          <Th>
            <Box ml={5}>Color</Box>
          </Th>
          <Th>Token name</Th>
          <Th>Value</Th>
        </Tr>
      </Thead>
      <Tbody>
        {Object.keys(flattenedColorTokens)?.map((title) => (
          <Tr key={title}>
            <Td>
              <TokenColor $color={flattenedColorTokens[title]} />
            </Td>
            <Td>
              <TokenName title={title} />
            </Td>
            <Td>{flattenedColorTokens[title]}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export const LightColors = () => {
  const a11yTheme = createTheme({ a11yColors: true });
  return (
    <>
      <Box py={4}>
        <Typography type="title1" as="h1">
          Light Colors
        </Typography>

        <Typography type="primary">
          Do not use this unless you have very specific needs for this. For example when you do not
          want the color to change on dark mode. For instance text on background image. <br />
          Use like <pre>theme.lightColor.text</pre>
        </Typography>
      </Box>

      <Table>
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Default</Th>
            <Th>A11y</Th>
          </Tr>
        </Thead>
        <Tbody>
          {Object.keys(theme.lightColor)?.map((title) => (
            <Tr key={`theme-${title}`}>
              <Td>{title}</Td>
              <Td>{colorWithValue(theme.lightColor[title])}</Td>
              <Td>{colorWithValue(a11yTheme.lightColor[title])}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </>
  );
};

export const DarkColors = () => {
  const a11yTheme = createTheme({ a11yColors: true });
  return (
    <>
      <Box py={4}>
        <Typography type="title1" as="h1">
          Dark Colors
        </Typography>

        <Typography type="primary">
          Do not use this unless you have very specific needs for this. For example when you do not
          want the color to change on light mode. For instance text on background image. <br />
          Use like <pre>theme.darkColor.text</pre>
        </Typography>
      </Box>

      <Table>
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Default</Th>
            <Th>A11y</Th>
          </Tr>
        </Thead>
        <Tbody>
          {Object.keys(theme.darkColor)?.map((title) => (
            <Tr key={`theme-${title}`}>
              <Td>{title}</Td>
              <Td>{colorWithValue(theme.darkColor[title])}</Td>
              <Td>{colorWithValue(a11yTheme.darkColor[title])}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </>
  );
};

export const ColorsPalette = {
  render: () => {
    return (
      <>
        {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
        <h1>⚠️ Internal object, use colors (semantic)</h1>(
        <Table>
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Default</Th>
              <Th>A11y</Th>
              <Th>Dark</Th>
            </Tr>
          </Thead>
          <Tbody>
            {Object.keys(defaultColors)
              ?.filter((title) => title !== 'palettes')
              ?.map((title) => (
                <Tr key={`theme-${title}`}>
                  <Td>{title}</Td>
                  <Td>{colorWithValue(defaultColors[title])}</Td>
                  <Td>{colorWithValue(accessabilityColors[title])}</Td>
                </Tr>
              ))}
          </Tbody>
        </Table>
        );
      </>
    );
  },

  name: 'Colors (palette)',
};

export const ScreenSizes = {
  render: () => (
    <Table>
      <Thead>
        <Tr>
          <Th>Name</Th>
          <Th>Size</Th>
          <Th>Offset</Th>
        </Tr>
      </Thead>
      <Tbody>
        {Object.entries(theme.breakpoints)?.map(([title, breakpoint]) => (
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
  ),

  name: 'Screen sizes',
};
