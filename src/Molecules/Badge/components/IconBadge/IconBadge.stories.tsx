import React from 'react';
import { Flexbox, Icon, Illustration } from '../../../..';
import Badge from '../..';
import { Display } from '../../../../common/Display';

export default {
  title: 'Molecules / Badge / Icon',
  parameters: {
    component: Badge.Icon,
  },
};

export const DefaultAndCommonUseCases = () => {
  return (
    <Display
      items={[
        {
          title: 'Default use',
          component: (
            <Badge.Icon>
              <Icon.Add8 />
            </Badge.Icon>
          ),
        },
        {
          title: 'Different sizes',
          component: (
            <Flexbox container direction="column">
              <Badge.Icon badgeSize="xl">
                <Icon.Book32 color={(t) => t.color.badgeIconColor} />
              </Badge.Icon>
              <Badge.Icon badgeSize="l">
                <Icon.Gold24 color={(t) => t.color.badgeIconColor} />
              </Badge.Icon>
              <Badge.Icon badgeSize="m">
                <Icon.Help16 color={(t) => t.color.badgeIconColor} />
              </Badge.Icon>
              <Badge.Icon badgeSize="s">
                <Icon.Bolt8 color={(t) => t.color.badgeIconColor} />
              </Badge.Icon>
            </Flexbox>
          ),
        },
        {
          title: 'Custom icon badge with custom props',
          component: (
            <Badge.Icon badgeColor={(t) => t.color.bulbBackground} badgeSize="l">
              <Icon.Lightbulb24 color={(t) => t.color.bulbForeground} />
            </Badge.Icon>
          ),
        },
        {
          title: 'Custom icon badge size',
          component: (
            <Badge.Icon badgeColor={(t) => t.color.bulbBackground} badgeSize={30}>
              <Icon.Lightbulb24 color={(t) => t.color.bulbForeground} />
            </Badge.Icon>
          ),
        },
        {
          title: 'Badge with illustration default use',
          component: (
            <Badge.Icon badgeSize="xl">
              <Illustration.UrgentMailFill64 />
            </Badge.Icon>
          ),
        },
        {
          title: 'Badge with illustration with custom props',
          component: (
            <Badge.Icon badgeSize="xl">
              <span>
                <Illustration.UrgentMailFill64
                  color={(t) => t.color.badgeIconColor}
                  secondaryColor={(t) => t.color.warning}
                />
              </span>
            </Badge.Icon>
          ),
        },
      ]}
    />
  );
};
DefaultAndCommonUseCases.story = {
  name: 'Default and common use cases',
};

DefaultAndCommonUseCases.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/TeWDXS0Uoxqg9I7WN8UQq2/Molecules---Web?type=design&node-id=9663-42535&t=qE01LCJKWSkGeiiO-4',
  },
};
