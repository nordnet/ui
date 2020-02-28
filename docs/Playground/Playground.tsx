import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import React from 'react';
import { IntlProvider } from 'react-intl';
import styled from 'styled-components';
import theme from 'prism-react-renderer/themes/vsDark';
import * as UI from '../../src';

const Wrapper = styled(UI.Card)`
  margin-bottom: ${p => p.theme.spacing.unit(5)}px;
`;

export const Playground = ({ code }) => (
  <LiveProvider scope={UI} code={code} theme={theme as any}>
    <Wrapper>
      <IntlProvider>
        <LivePreview />
      </IntlProvider>
    </Wrapper>
    <LiveEditor />
    <LiveError />
  </LiveProvider>
);
