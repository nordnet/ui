import React from 'react';
import { Meta, Story } from '@storybook/react';

import { Flexbox, Typography } from '../..';
import { Display } from '../../common/Display';
import { Props } from './Typography.types';

export default {
  title: 'Atoms / Typography',
  component: Typography,
} as Meta;

export const all = () => (
  <Flexbox container direction="column">
    <Typography type="hero">Hero 48/52px extrabold (46/48px mobile)</Typography>
    <Typography type="title1">Title1 28/32px extrabold (24/28px mobile)</Typography>
    <Typography type="title2">Title2 24/28px extrabold (20/24px mobile)</Typography>
    <Typography type="title3">Title3 20/24px extrabold (18/24px mobile)</Typography>
    <Typography type="primary">Primary 16/24px regular</Typography>
    <Typography type="secondary">Secondary 14/20px regular</Typography>
    <Typography type="tertiary">Tertiary 12/16px regular</Typography>
    <Typography type="caption">Caption 10/16px regular</Typography>
  </Flexbox>
);
export const primary = () => (
  <Display
    items={[
      { title: 'Primary default', component: <Typography>Primary text</Typography> },
      {
        title: 'Primary with bold text',
        component: (
          <Typography type="primary" weight="bold">
            Primary bold text
          </Typography>
        ),
      },
      {
        title: 'Primary with extrabold text',
        component: (
          <Typography type="primary" weight="extrabold">
            Primary extrabold text
          </Typography>
        ),
      },
    ]}
  />
);

export const secondary = () => (
  <Display
    items={[
      {
        title: 'Secondary',
        component: <Typography type="secondary">Secondary text</Typography>,
      },
      {
        title: 'Secondary with bold text',
        component: (
          <Typography type="secondary" weight="bold">
            Secondary bold text
          </Typography>
        ),
      },
    ]}
  />
);

export const tertiary = () => (
  <Display
    items={[
      {
        title: 'Tertiary Default',
        component: <Typography type="tertiary">Tertiary text</Typography>,
      },
      {
        title: 'Tertiary with bold text',
        component: (
          <Typography type="tertiary" weight="bold">
            Tertiary bold text
          </Typography>
        ),
      },
    ]}
  />
);

export const caption = () => (
  <Display
    items={[
      {
        title: 'Caption Default',
        component: <Typography type="caption">Caption text</Typography>,
      },
      {
        title: 'Caption with bold text',
        component: (
          <Typography type="caption" weight="bold">
            Caption bold text
          </Typography>
        ),
      },
    ]}
  />
);

export const title1 = () => (
  <Display
    items={[
      {
        title: 'Title1 Default',
        component: <Typography type="title1">Title1 text</Typography>,
      },
      {
        title: 'With regular font weight',
        component: (
          <Typography type="title1" weight="regular">
            Title1 text
          </Typography>
        ),
      },
      {
        title: 'With bold font weight',
        component: (
          <Typography type="title1" weight="bold">
            Title1 text
          </Typography>
        ),
      },
    ]}
  />
);

title1.story = {
  name: 'Title1',
};

export const title2 = () => (
  <Display
    items={[
      {
        title: 'Title2 Default',
        component: <Typography type="title2">Title2 text</Typography>,
      },
      {
        title: 'With regular font weight',
        component: (
          <Typography type="title2" weight="regular">
            Title2 text
          </Typography>
        ),
      },
      {
        title: 'With bold font weight',
        component: (
          <Typography type="title2" weight="bold">
            Title2 text
          </Typography>
        ),
      },
    ]}
  />
);

title2.story = {
  name: 'Title2',
};

export const title3 = () => (
  <Display
    items={[
      {
        title: 'Title3 Default',
        component: <Typography type="title3">Title3 text</Typography>,
      },
      {
        title: 'With regular font weight',
        component: (
          <Typography type="title3" weight="regular">
            Title3 text
          </Typography>
        ),
      },
      {
        title: 'With bold font weight',
        component: (
          <Typography type="title3" weight="bold">
            Title3 text
          </Typography>
        ),
      },
    ]}
  />
);

title3.story = {
  name: 'Title3',
};

export const hero = () => (
  <Display
    items={[
      {
        title: 'Hero Default',
        component: <Typography type="hero">Hero text</Typography>,
      },
      {
        title: 'With bold font weight',
        component: (
          <Typography type="hero" weight="bold">
            Hero text
          </Typography>
        ),
      },
    ]}
  />
);

export const ariaAttributes = () => (
  <Display
    items={[
      {
        title: 'with aria-hidden',
        component: <Typography aria-hidden>I&apos;m hidden</Typography>,
      },
    ]}
  />
);

ariaAttributes.story = {
  name: 'aria attributes',
};

export const colors = () => (
  <Display
    items={[
      { title: 'Default', component: <Typography type="primary">Default</Typography> },
      {
        title: 'Color: text',
        component: (
          <Typography type="primary" color={(t) => t.color.text}>
            Text
          </Typography>
        ),
      },
      {
        title: 'Color: positive',
        component: (
          <Typography type="primary" color={(t) => t.color.positive}>
            Positive
          </Typography>
        ),
      },
      {
        title: 'Color: negative',
        component: (
          <Typography type="primary" color={(t) => t.color.negative}>
            Negative
          </Typography>
        ),
      },
      {
        title: 'Color: warning',
        component: (
          <Typography type="primary" color={(t) => t.color.warning}>
            Warning
          </Typography>
        ),
      },
      {
        title: 'Color: cta',
        component: (
          <Typography type="primary" color={(t) => t.color.cta}>
            CTA
          </Typography>
        ),
      },
      {
        title: 'Color: label',
        component: (
          <Typography type="primary" color={(t) => t.color.label}>
            Label
          </Typography>
        ),
      },
    ]}
  />
);

export const textAlign = () => (
  <Flexbox container direction="column">
    <Typography type="primary">Default</Typography>
    <Typography type="primary" textAlign="center">
      Text align center
    </Typography>
    <Typography type="primary" textAlign="right">
      Text align right
    </Typography>
  </Flexbox>
);

const WhiteSpaceTemplate: Story<Props> = (args) => <Typography {...args} />;
export const WhiteSpace = WhiteSpaceTemplate.bind({});
WhiteSpace.args = {
  type: 'primary',
  whiteSpace: 'normal',
  children: 'This text \nshould have \nline breaks.',
};
