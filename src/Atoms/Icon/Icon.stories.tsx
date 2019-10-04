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
  ))
  .add('Available icons', () => (
    <Display
      items={Object.entries(Icon).map(
        ([iconName, IconComponent]: [string, React.ComponentType<any>]) => ({
          title: iconName,
          component: (
            <div style={{ outline: '1px dashed #bbb', display: 'inline-block' }}>
              <IconComponent />
            </div>
          ),
        }),
      )}
    />
  ))
  .add('All icons (colored)', () => (
    <>
      {Object.entries(Icon).map(([_, IconComponent]: [string, React.ComponentType<any>]) => (
        <div style={{ outline: '1px dashed #bbb', display: 'inline-block' }}>
          <IconComponent color={(t: any) => t.color.cta} />
        </div>
      ))}
    </>
  ));
