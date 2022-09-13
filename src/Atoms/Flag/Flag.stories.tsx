import React from 'react';
import flags from './flags';
import { Box, Flag, Typography } from '../..';
import { Display } from '../../common/Display';

export default {
  title: 'Atoms / Flag',
  parameters: {
    component: Flag,
  },
};

export const defaultUse = () => <Flag country="SE" />;

defaultUse.story = {
  name: 'Default use',
};

export const inlineStory = () => (
  <>
    You can put the <Flag inline country="SE" /> directly in the text with inline prop!
  </>
);

inlineStory.story = {
  name: 'Inline',
};

export const differentSize = () => <Flag country="SE" height={10} />;

differentSize.story = {
  name: 'Different size ',
};

export const rendersNothingIfWrongCountryCode = () => <Flag country="WRONG" />;

rendersNothingIfWrongCountryCode.story = {
  name: 'Renders nothing if wrong country code',
};

export const availableFlags = () => (
  <Display
    items={Object.keys(flags)?.map((flagName: string) => ({
      title: flagName,
      component: <Flag country={flagName} />,
    }))}
  />
);

export const withBorder = () => (
  <>
    <Box p={4}>
      <Flag country="fi" />
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
