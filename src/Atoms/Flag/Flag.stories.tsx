import React from 'react';
import flags from './components/flags';
import { Box, Typography } from '../../index';
import { Display } from '../../common/Display';
import { Flag } from './Flag';

export default {
  title: 'Atoms / Flag',
  parameters: {
    component: Flag,
  },
};

export const defaultUse = () => <Flag size="m" country="SE" />;

defaultUse.story = {
  name: 'Default use',
};

export const inlineStory = () => (
  <>
    You can put the <Flag size="m" inline country="SE" /> directly in the text with inline prop!
  </>
);

inlineStory.story = {
  name: 'Inline',
};

export const rendersNothingIfWrongCountryCode = () => <Flag size="l" country="WRONG" />;

rendersNothingIfWrongCountryCode.story = {
  name: 'Renders nothing if wrong country code',
};

export const availableFlags = () => (
  <Display
    items={[
      {
        title: 'Sizes',
        component: (
          <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
            <div>s (12px)</div>
            <div>m (16px)</div>
            <div>l (24px)</div>
          </div>
        ),
      },
      ...Object.keys(flags)?.map((flagName) => ({
        title: flagName,
        component: (
          <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
            <Flag size="s" country={flagName} />
            <Flag size="m" country={flagName} />
            <Flag size="l" country={flagName} />
          </div>
        ),
      })),
    ]}
  />
);

export const withBorder = () => (
  <>
    <Box p={4}>
      <Flag size="m" country="fi" />
      <Typography type="secondary">Notice flag does not have border on dark mode</Typography>
    </Box>
  </>
);

withBorder.story = {
  name: 'Only Border On Light Mode',
};

availableFlags.story = {
  name: 'Available flags',
};
