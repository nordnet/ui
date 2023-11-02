import React from 'react';
import { Meta, StoryFn } from '@storybook/react';

import { OldIcon } from '../..';
import { Display } from '../../common/Display';
import { BaseProps, ChildProps } from './IconBase.types';

export default {
  title: 'Atoms / OldIcon',
} as Meta;

export const defaultUse = {
  render: () => <OldIcon.ArrowRight />,
  name: 'Default use',
};

export const inlineStory = {
  render: () => (
    <>
      You can put the <OldIcon.ArrowRight inline /> directly in the text with inline prop!
    </>
  ),

  name: 'Inline',
};

const TemplateThinArrow: StoryFn<
  BaseProps & {
    direction: 'up' | 'right' | 'down' | 'left';
  }
> = (args) => <OldIcon.ThinArrow {...args} />;

export const ThinArrow = {
  render: TemplateThinArrow,

  args: {
    direction: 'up',
  },
};

const TemplateThinChevron: StoryFn<
  BaseProps & {
    direction: 'up' | 'right' | 'down' | 'left';
  }
> = (args) => <OldIcon.ThinChevron {...args} />;

export const ThinChevron = {
  render: TemplateThinChevron,

  args: {
    direction: 'up',
  },
};

const TemplateChevron: StoryFn<
  BaseProps & {
    direction: 'up' | 'right' | 'down' | 'left';
  }
> = (args) => <OldIcon.Chevron {...args} />;

export const Chevron = {
  render: TemplateChevron,

  args: {
    direction: 'up',
  },
};

const TemplateSortArrow: StoryFn<
  BaseProps & {
    direction: 'ascending' | 'descending';
  }
> = (args) => <OldIcon.SortArrow {...args} />;

export const SortArrow = {
  render: TemplateSortArrow,

  args: {
    direction: 'ascending',
  },
};

const TemplateAccount: StoryFn<BaseProps> = (args) => <OldIcon.Account {...args} />;

export const Account = {
  render: TemplateAccount,

  args: {
    size: 10,
    fill: (t) => t.color.backgroundBlack,
  },
};

const TemplateCalendarO: StoryFn<BaseProps> = (args) => <OldIcon.CalendarO {...args} />;

export const CalendarO = {
  render: TemplateCalendarO,

  args: {
    size: 10,
    fill: (t) => t.color.backgroundBlack,
  },
};

const TemplateFAQ: StoryFn<BaseProps> = (args) => <OldIcon.FAQ {...args} />;

export const FAQ = {
  render: TemplateFAQ,

  args: {
    size: 10,
    fill: (t) => t.color.cta,
  },
};

const TemplatePercent: StoryFn<BaseProps> = (args) => <OldIcon.Percent {...args} />;

export const Percent = {
  render: TemplatePercent,

  args: {
    size: 10,
    fill: (t) => t.color.backgroundBlack,
  },
};

const TemplateProfile: StoryFn<BaseProps> = (args) => <OldIcon.Profile {...args} />;

export const Profile = {
  render: TemplateProfile,

  args: {
    size: 10,
    fill: (t) => t.color.backgroundBlack,
  },
};

const TemplateThreeDotsO: StoryFn<BaseProps> = (args) => <OldIcon.ThreeDotsO {...args} />;

export const ThreeDotsO = {
  render: TemplateThreeDotsO,

  args: {
    size: 10,
    fill: (t) => t.color.backgroundBlack,
  },
};

const TemplateTaxPercentage: StoryFn<BaseProps> = (args) => <OldIcon.TaxPercentage {...args} />;

export const TaxPercentage = {
  render: TemplateTaxPercentage,

  args: {
    size: 10,
    fill: (t) => t.color.backgroundBlack,
  },
};

const TemplateTransfer: StoryFn<BaseProps> = (args) => <OldIcon.Transfer {...args} />;

export const Transfer = {
  render: TemplateTransfer,

  args: {
    size: 10,
    fill: (t) => t.color.backgroundBlack,
  },
};

const TemplateUrgentMessage: StoryFn<ChildProps> = (args) => <OldIcon.UrgentMessage {...args} />;

export const UrgentMessage = {
  render: TemplateUrgentMessage,

  args: {
    size: 10,
    fill: (t) => t.color.text,
    stroke: (t) => t.color.negative,
  },
};

export const differentSizeAndFill = {
  render: () => <OldIcon.ArrowRight size={10} fill={(t) => t.color.positive} />,

  name: 'Different size and fill',
};

export const withModifiedStroke = {
  render: () => (
    <Display
      items={[
        {
          title: 'Star with stroke modified',
          component: <OldIcon.Star size={10} stroke={(t) => t.color.positive} />,
        },
        {
          title: 'CrossThin with stroke modified',
          component: <OldIcon.CrossThin size={10} stroke={(t) => t.color.positive} />,
        },
        {
          title: 'CheckMarkCircle with stroke modified',
          component: (
            <OldIcon.CheckMarkCircle
              size={10}
              fill={(t) => t.color.positive}
              stroke={(t) => t.color.negative}
            />
          ),
        },
        {
          title: 'CrossCircle with stroke modified',
          component: (
            <OldIcon.CrossCircle
              size={10}
              fill={(t) => t.color.positive}
              stroke={(t) => t.color.negative}
            />
          ),
        },
        {
          title: 'InfoCircle with stroke modified',
          component: (
            <OldIcon.InfoCircle
              size={10}
              fill={(t) => t.color.positive}
              stroke={(t) => t.color.negative}
            />
          ),
        },
        {
          title: 'WarningTriangle with stroke modified',
          component: (
            <OldIcon.WarningTriangle
              size={10}
              fill={(t) => t.color.positive}
              stroke={(t) => t.color.negative}
            />
          ),
        },
        {
          title: 'Star24 with both stroke modified',
          component: <OldIcon.Star24 size={10} stroke={(t) => t.color.positive} />,
        },
        {
          title: 'Star24 with both stroke and fill modified',
          component: (
            <OldIcon.Star24
              size={10}
              fill={(t) => t.color.positive}
              stroke={(t) => t.color.positive}
            />
          ),
        },
      ]}
    />
  ),

  name: 'With modified stroke',
};

export const availableOldIcons = {
  render: () => (
    <Display
      items={Object?.entries(OldIcon)?.map(
        ([iconName, IconComponent]: [string, React.ComponentType<any>]) => ({
          title: iconName,
          component: (
            <div style={{ outline: '1px dashed #bbb', display: 'inline-block' }}>
              <IconComponent
                {...(iconName === 'SharevilleLogo' ? { id: 'shareville-logo' } : {})}
              />
            </div>
          ),
        }),
      )}
    />
  ),

  name: 'Available old icons',
};

export const allOldIconsColored = {
  render: () => (
    <>
      {Object?.entries(OldIcon)?.map(([key, IconComponent]: [string, React.ComponentType<any>]) => (
        <div key={key} style={{ outline: '1px dashed #bbb', display: 'inline-block' }}>
          <IconComponent
            color={(t: any) => t.color.cta}
            fill={(t: any) => t.color.cta}
            {...(key === 'SharevilleLogo' ? { id: 'shareville-logo' } : {})}
          />
        </div>
      ))}
    </>
  ),

  name: 'All old icons (colored)',
};
