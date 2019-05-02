import { storiesOf } from '@storybook/react';
import React from 'react';
import styled from 'styled-components';
import MD from 'react-markdown';
import theme from '.';
import { rawColor } from './theme';
import colorDocs from './Colors.md';
import { Display } from '../common/Display';

const Color = styled.div`
  width: ${p => p.theme.spacing.unit(14)}px;
  height: ${p => p.theme.spacing.unit(14)}px;
  background-color: ${p => p.color};
  border: 1px solid #eee;
`;
storiesOf('Theme', module)
  .add('Documentation', () => <MD source={colorDocs} />)
  .add('Colors (semantic)', () => (
    <Display
      items={Object.entries(theme.color).map(([title, color]) => ({
        title,
        component: (
          <>
            <Color color={color} />
            <div>{color}</div>
          </>
        ),
      }))}
    />
  ))
  .add('Colors (palette)', () => {
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
  })
  .add('Screen sizes', () => (
    <Display
      items={Object.entries(theme.size).map(([title, size]) => ({
        title,
        component: <pre>{size}</pre>,
      }))}
    />
  ));
