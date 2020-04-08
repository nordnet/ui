import React from 'react';
import { select, withKnobs } from '@storybook/addon-knobs';
import { Icon } from '../..';
import { Display } from '../../common/Display';

export default {
  title: 'Atoms | Icon',
  decorators: [withKnobs],
};

export const defaultUse = () => <Icon.ArrowRight />;

defaultUse.story = {
  name: 'Default use',
};

export const inlineStory = () => (
  <span>
    You can put the <Icon.ArrowRight inline /> directly in the text with inline prop!
  </span>
);

export const thinArrowUp = () => (
  <span>
    <Icon.ThinArrow direction={select('Direction', ['up', 'right', 'down', 'left'], 'up')} />
  </span>
);

export const thinArrowRight = () => (
  <span>
    <Icon.ThinArrow direction={select('Direction', ['up', 'right', 'down', 'left'], 'right')} />
  </span>
);

export const thinArrowDown = () => (
  <span>
    <Icon.ThinArrow direction={select('Direction', ['up', 'right', 'down', 'left'], 'down')} />
  </span>
);

export const thinArrowLeft = () => (
  <span>
    <Icon.ThinArrow direction={select('Direction', ['up', 'right', 'down', 'left'], 'left')} />
  </span>
);

inlineStory.story = {
  name: 'Inline',
};

export const differentSizeAndFill = () => (
  <Icon.ArrowRight size={10} fill={t => t.color.positive} />
);

differentSizeAndFill.story = {
  name: 'Different size and fill',
};

export const withModifiedStroke = () => (
  <Display
    items={[
      {
        title: 'Star with stroke modified',
        component: <Icon.Star size={10} stroke={t => t.color.positive} />,
      },
      {
        title: 'CrossThin with stroke modified',
        component: <Icon.CrossThin size={10} stroke={t => t.color.positive} />,
      },
      {
        title: 'CheckMarkCircle with stroke modified',
        component: (
          <Icon.CheckMarkCircle
            size={10}
            fill={t => t.color.positive}
            stroke={t => t.color.negative}
          />
        ),
      },
      {
        title: 'CrossCircle with stroke modified',
        component: (
          <Icon.CrossCircle size={10} fill={t => t.color.positive} stroke={t => t.color.negative} />
        ),
      },
      {
        title: 'InfoCircle with stroke modified',
        component: (
          <Icon.InfoCircle size={10} fill={t => t.color.positive} stroke={t => t.color.negative} />
        ),
      },
      {
        title: 'WarningTriangle with stroke modified',
        component: (
          <Icon.WarningTriangle
            size={10}
            fill={t => t.color.positive}
            stroke={t => t.color.negative}
          />
        ),
      },
      {
        title: 'Star24 with both stroke modified',
        component: <Icon.Star24 size={10} stroke={t => t.color.positive} />,
      },
      {
        title: 'Star24 with both stroke and fill modified',
        component: (
          <Icon.Star24 size={10} fill={t => t.color.positive} stroke={t => t.color.positive} />
        ),
      },
    ]}
  />
);

withModifiedStroke.story = {
  name: 'With modified stroke',
};

export const availableIcons = () => (
  <Display
    items={Object.entries(Icon).map(
      ([iconName, IconComponent]: [string, React.ComponentType<any>]) => ({
        title: iconName,
        component: (
          <div style={{ outline: '1px dashed #bbb', display: 'inline-block' }}>
            <IconComponent {...(iconName === 'SharevilleLogo' ? { id: 'shareville-logo' } : {})} />
          </div>
        ),
      }),
    )}
  />
);

availableIcons.story = {
  name: 'Available icons',
};

export const allIconsColored = () => (
  <>
    {Object.entries(Icon).map(([key, IconComponent]: [string, React.ComponentType<any>]) => (
      <div style={{ outline: '1px dashed #bbb', display: 'inline-block' }}>
        <IconComponent
          color={(t: any) => t.color.cta}
          {...(key === 'SharevilleLogo' ? { id: 'shareville-logo' } : {})}
        />
      </div>
    ))}
  </>
);

allIconsColored.story = {
  name: 'All icons (colored)',
};
