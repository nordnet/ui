import React from 'react';
import styled from 'styled-components';

import InfoBar from '.';
import { Variant } from './InfoBar.types';

export default {
  title: 'Molecules / InfoBar',
  parameters: {
    component: InfoBar,
  },
};

const StyledBg = styled.div`
  background: #f5f5f5;
`;

export const defaultUsage = () => (
  <StyledBg>
    <InfoBar>
      InfoBar should be used on top of the pages to show Marketing or Customer Support communication
      messages. Content of the InfoBar is just rendered <code>children</code>
    </InfoBar>
  </StyledBg>
);

defaultUsage.story = {
  name: 'Default usage',
};
/* eslint-disable no-alert */
export const onCloseProp = () => (
  <StyledBg>
    <InfoBar>Without onClose prop InfoBar cannot be dismissed</InfoBar>
    <br />
    <br />
    <br />
    <InfoBar onClose={() => alert('close')}>
      With onClose prop InfoBar can be dismissed, but ParentComponent is in charge to react and
      actually hide the InfoBar.
    </InfoBar>
  </StyledBg>
);
/* eslint-enable no-alert */

onCloseProp.story = {
  name: 'onClose prop demo',
};

const variants = [
  {
    variant: 'general' as Variant,
    children: (
      <>
        We’re currently working on the new main menu. Links marked with arrow icon will redirect you
        to the previous website experience. <a href="#nonce">Read more</a>
      </>
    ),
  },
  {
    variant: 'warning' as Variant,
    children: (
      <>
        We’re currently working on the new main menu. Links marked with arrow icon will redirect you
        to the previous website experience. <a href="#nonce">Read more</a>
      </>
    ),
  },
  {
    variant: 'error' as Variant,
    children: (
      <>
        The US market is currently down, we are fixing it right now. It will soon be back and
        running. <a href="#nonce">Read more</a>
      </>
    ),
  },
  {
    variant: 'success' as Variant,
    children: (
      <>
        We have fixed the US market issue. It is now back to service. <a href="#nonce">Read more</a>
      </>
    ),
  },
];

export const differentVariants = () => (
  <StyledBg>
    <code>no variant passed, defaults to general</code>
    <br />
    <InfoBar>{variants[0].children}</InfoBar>
    <br />
    <br />
    {variants.map(({ variant, children }) => (
      <>
        <code>variant={variant}</code>
        <br />
        <InfoBar variant={variant}>{children}</InfoBar>
        <br />
        <br />
      </>
    ))}
  </StyledBg>
);

differentVariants.story = {
  name: 'Different variants',
};
