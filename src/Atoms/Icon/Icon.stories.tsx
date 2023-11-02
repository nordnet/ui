import React from 'react';
import { Icon } from '../..';
import { Display } from '../../common/Display';

export default {
  title: 'Atoms / Icon',
};

export const defaultUse = {
  render: () => <Icon.ArrowLeft32 />,
  name: 'Default use',
};

export const inlineStory = {
  render: () => (
    <span>
      You can put the <Icon.ArrowLeft16 inline /> directly in the text !
    </span>
  ),

  name: 'Inline',
};

export const differentColor = {
  render: () => (
    <div style={{ color: 'blue' }}>
      You can have different color text around{' '}
      <Icon.ArrowLeft16 inline color={(t) => t.color.positive} /> an icon
    </div>
  ),

  name: 'Different color',
};

export const titleExample = {
  render: () => (
    <div style={{ color: 'blue' }}>
      You can use title prop for a hover tooltip
      <Icon.ArrowLeft16 inline title="example tooltip" /> on an icon
    </div>
  ),

  name: 'Title example',
};

export const availableIcons = {
  render: () => (
    <Display
      items={Object?.entries(Icon)
        ?.sort((a, b) => a[0].localeCompare(b[0]))
        .map(([iconName, IconComponent]: [string, React.ComponentType<any>]) => ({
          title: iconName,
          component: (
            <div style={{ outline: '1px dashed #bbb', display: 'inline-block' }}>
              <IconComponent
                {...(iconName === 'SharevilleLogo' ? { id: 'shareville-logo' } : {})}
              />
            </div>
          ),
        }))}
    />
  ),

  name: 'Available icons',
};

export const allIconsColored = {
  render: () => (
    <>
      {Object?.entries(Icon)
        ?.sort((a, b) => a[0].localeCompare(b[0]))
        .map(([iconName, IconComponent]: [string, React.ComponentType<any>]) => (
          <div key={iconName} style={{ outline: '1px dashed #bbb', display: 'inline-block' }}>
            <IconComponent
              {...(iconName === 'SharevilleLogo' ? { id: 'shareville-logo' } : {})}
              color={(t: any) => t.color.cta}
            />
          </div>
        ))}
    </>
  ),

  name: 'All icons (colored)',
};
