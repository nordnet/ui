import React from 'react';
import ReactDOM from 'react-dom';

// eslint-disable-next-line import/no-extraneous-dependencies
import initStoryshots, { multiSnapshotWithOptions } from '@storybook/addon-storyshots';
import 'jest-styled-components';
// eslint-disable-next-line import/no-extraneous-dependencies
import { styleSheetSerializer } from 'jest-styled-components/serializer';
// eslint-disable-next-line import/no-extraneous-dependencies
import { addSerializer } from 'jest-specific-snapshot';

addSerializer(styleSheetSerializer);

// Workaround for https://github.com/facebook/react/issues/11565#issuecomment-3688771492
// @ts-ignore
ReactDOM.createPortal = node => React.createElement('portal-dummy', null, node);

Math.random = () => 0.421;

/* eslint-disable */
// @ts-ignore
global.IntersectionObserver = class IntersectionObserver {
  observe() {
    return null;
  }

  unobserve() {
    return null;
  }
};
/* eslint-enable */

initStoryshots({
  test: multiSnapshotWithOptions({}),
  storyNameRegex: /^(?!(Documentation|Experimental)).*$/,
});
