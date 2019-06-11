import React from 'react';
import { storiesOf } from '@storybook/react';
import { Icon } from '../..';
import { Display } from '../../common/Display';

storiesOf('Atoms | Icon', module)
  .add('Default use', () => <Icon.ArrowRight />)
  .add('Inline', () => (
    <span>
      You can put the <Icon.ArrowRight inline /> directly in the text with inline prop!
    </span>
  ))
  .add('Different size and fill', () => <Icon.ArrowRight size={10} fill={t => t.color.positive} />)
  .add('With modified stroke', () => (
    <Display
      items={[
        {
          title: 'Star with stroke modified',
          component: <Icon.Star size={10} stroke={t => t.color.positive} />,
        },
        {
          title: 'Star16 with both stroke and fill modified',
          component: (
            <Icon.Star16 size={10} fill={t => t.color.positive} stroke={t => t.color.positive} />
          ),
        },
      ]}
    />
  ))
  .add('Available icons', () => (
    <Display
      items={Object.entries(Icon).map(
        ([iconName, IconComponent]: [string, React.ComponentType<any>]) => ({
          title: iconName,
          component: <IconComponent />,
        }),
      )}
    />
  ));
