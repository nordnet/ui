import React from 'react';
import { action } from '@storybook/addon-actions';
import { Route } from 'react-router';
import { Link, Typography } from '../..';
import { Provider } from '../../common/Links/ReactRouterLinkHelper';

export default {
  title: 'Molecules / Link',
  parameters: {
    component: Link,
  },
};

const View = ({ location }: any) => {
  return (
    <pre>
      <code>{JSON.stringify(location, null, 2)}</code>
    </pre>
  );
};

export const defaultUsage = () => (
  <Provider>
    <Typography type="secondary" weight="bold">
      <Link to="/route1" onClick={action('clicked')}>
        Link1
      </Link>
    </Typography>
    <Typography type="secondary" weight="bold">
      <Link to="/route2" onClick={action('clicked')}>
        Link2
      </Link>
    </Typography>
    <Route path="/:id" component={View} />
  </Provider>
);

defaultUsage.story = {
  name: 'Default usage',
};

export const withTypographyPrimaryAsType = () => (
  <Provider>
    <Typography type="primary" weight="bold">
      <Link to="/route1" onClick={action('clicked')}>
        Link1
      </Link>
    </Typography>
    <Typography type="primary" weight="bold">
      <Link to="/route2" onClick={action('clicked')}>
        Link2
      </Link>
    </Typography>
    <Route path="/:id" component={View} />
  </Provider>
);

withTypographyPrimaryAsType.story = {
  name: 'With typography primary as type',
};

export const externalLinkWithItsDefaultValues = () => (
  <Provider>
    <Typography type="secondary" weight="bold">
      <Link to="https://example.com" onClick={action('clicked')} external>
        Example
      </Link>
    </Typography>
  </Provider>
);

externalLinkWithItsDefaultValues.story = {
  name: 'External link with its default values',
};

export const cmsLinkWithItsDefaultValues = () => (
  <Provider>
    <Typography type="secondary" weight="bold">
      <Link to="https://example.com" onClick={action('clicked')} cms>
        Example CMS
      </Link>
    </Typography>
  </Provider>
);

cmsLinkWithItsDefaultValues.story = {
  name: 'Cms link with its default values',
};

export const externalLinkWithRelAndTargetOverriden = () => (
  <Provider>
    <Typography type="secondary" weight="bold">
      <Link
        to="https://example.com"
        onClick={action('clicked')}
        rel="nofollow"
        target="_self"
        external
      >
        Example CMS
      </Link>
    </Typography>
  </Provider>
);

externalLinkWithRelAndTargetOverriden.story = {
  name: 'External link with rel and target overriden',
};

export const withDisabledPropResultsInADisabledButtonLookingLikeALink = () => (
  <Provider>
    <Typography type="secondary" weight="bold">
      <Link onClick={action('clicked')} disabled>
        Link
      </Link>
    </Typography>
  </Provider>
);

withDisabledPropResultsInADisabledButtonLookingLikeALink.story = {
  name: 'With disabled prop results in a disabled button looking like a link',
};

export const withoutToPropResultsInAButtonLookingLikeALink = () => (
  <Provider>
    <Typography type="secondary" weight="bold">
      <Link onClick={action('clicked')}>Link</Link>
    </Typography>
  </Provider>
);

withoutToPropResultsInAButtonLookingLikeALink.story = {
  name: 'Without to prop results in a button looking like a link',
};

export const withBlackColor = () => (
  <Provider>
    <Typography type="primary">
      <Link color="black" to="https://example.com" external onClick={action('clicked')}>
        Link
      </Link>
    </Typography>
  </Provider>
);

withBlackColor.story = {
  name: 'With black color',
};

export const withInheritedColor = () => (
  <Provider>
    <Typography type="primary" color={(t) => t.color.generationSavingsTimelineColor2}>
      <Link color="inherit" to="https://example.com" external onClick={action('clicked')}>
        Link
      </Link>
    </Typography>
  </Provider>
);

withInheritedColor.story = {
  name: 'With inherited color',
};
