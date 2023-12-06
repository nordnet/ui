import React from 'react';
import { Logo } from '../..';
import { Display } from '../../common/Display';

export default {
  title: 'Atoms / Logo',
};

export const DefaultUse = {
  render: () => <Logo.SharevilleLogo24 id="test" />,
  name: 'Default use',
};

export const InlineStory = {
  render: () => (
    <span style={{ display: 'flex', alignItems: 'center', color: 'red' }}>
      You can put the <Logo.NordnetLogo32 inline /> directly in the text !
    </span>
  ),

  name: 'Inline',
};

export const TitleExample = {
  render: () => (
    <div style={{ color: 'blue' }}>
      You can use title prop for a hover tooltip
      <Logo.Swish32 inline title="example tooltip" /> on a logo
    </div>
  ),

  name: 'Title example',
};

export const AvailableLogos = {
  render: () => (
    <Display
      items={Object?.entries(Logo)
        ?.sort((a, b) => a[0].localeCompare(b[0]))
        .map(([logoName, LogoComponent]: [string, React.ComponentType<any>]) => ({
          title: logoName,
          component: (
            <div style={{ outline: '1px dashed #bbb', display: 'inline-block' }}>
              <LogoComponent
                {...(logoName === 'SharevilleLogo24' ? { id: 'shareville-logo' } : {})}
              />
            </div>
          ),
        }))}
    />
  ),

  name: 'Available logos',
};
