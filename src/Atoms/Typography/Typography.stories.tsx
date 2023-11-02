import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Flexbox, Typography } from '../..';
import { Display } from '../../common/Display';

const meta: Meta<typeof Typography> = {
  title: 'Atoms / Typography',
  component: Typography,
};

export default meta;
type Story = StoryObj<typeof Typography>;

const AllComponent = () => (
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

export const All: Story = {
  render: () => <AllComponent />,
};

export const Primary = () => (
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

export const Secondary = () => (
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

export const Tertiary = () => (
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

export const Caption = () => (
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

export const Title1 = {
  render: () => (
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
  ),
};

export const Title2 = {
  render: () => (
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
  ),
};

export const Title3 = {
  render: () => (
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
  ),
};

export const Hero = () => (
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

export const AriaAttributes = {
  render: () => (
    <Display
      items={[
        {
          title: 'with aria-hidden',
          component: <Typography aria-hidden>I&apos;m hidden</Typography>,
        },
      ]}
    />
  ),
};

export const Colors = () => (
  <Display
    items={[
      { title: 'Default', component: <Typography type="primary">Default</Typography> },
      {
        title: 'Color: neutral.text_default',
        component: (
          <Typography type="primary" color={(t) => t.colorTokens.neutral.text_default}>
            Text
          </Typography>
        ),
      },
      {
        title: 'Color: positive.text_default',
        component: (
          <Typography type="primary" color={(t) => t.colorTokens.positive.text_default}>
            Positive
          </Typography>
        ),
      },
      {
        title: 'Color: negative.text_default',
        component: (
          <Typography type="primary" color={(t) => t.colorTokens.negative.text_default}>
            Negative
          </Typography>
        ),
      },
      {
        title: 'Color: warning.text_default',
        component: (
          <Typography type="primary" color={(t) => t.colorTokens.warning.text_default}>
            Warning
          </Typography>
        ),
      },
      {
        title: 'Color: action.text_default',
        component: (
          <Typography type="primary" color={(t) => t.colorTokens.action.text_default}>
            CTA
          </Typography>
        ),
      },
      {
        title: 'Color: neutral.text_weak',
        component: (
          <Typography type="primary" color={(t) => t.colorTokens.neutral.text_weak}>
            Label
          </Typography>
        ),
      },
    ]}
  />
);

export const TextAlign = () => (
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

export const WhiteSpace = {
  args: {
    type: 'primary',
    whiteSpace: 'normal',
    children: 'This text \nshould have \nline breaks.',
  },
};
