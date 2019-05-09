// eslint-disable-next-line import/no-extraneous-dependencies
import initStoryshots, { multiSnapshotWithOptions } from '@storybook/addon-storyshots';
// eslint-disable-next-line import/no-extraneous-dependencies
import styleSheetSerializer from 'jest-styled-components/src/styleSheetSerializer';
// eslint-disable-next-line import/no-extraneous-dependencies
import { addSerializer } from 'jest-specific-snapshot';

addSerializer(styleSheetSerializer);

initStoryshots({
  test: multiSnapshotWithOptions({}),
  storyNameRegex: /^(?!(Documentation|Experimental)).*$/,
});
