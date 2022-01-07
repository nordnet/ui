import React from 'react';
import { Meta, Story } from '@storybook/react';

import { OldIcon } from '../..';
import { Display } from '../../common/Display';
import { BaseProps, ChildProps } from './IconBase.types';

export default {
  title: 'Atoms / OldIcon',
} as Meta;

export const defaultUse = () => <OldIcon.ArrowRight />;

defaultUse.story = {
  name: 'Default use',
};

export const inlineStory = () => (
  <>
    You can put the <OldIcon.ArrowRight inline /> directly in the text with inline prop!
  </>
);
inlineStory.storyName = 'Inline';

const TemplateThinArrow: Story<
  BaseProps & {
    direction: 'up' | 'right' | 'down' | 'left';
  }
> = (args) => <OldIcon.ThinArrow {...args} />;

export const ThinArrow = TemplateThinArrow.bind({});
ThinArrow.args = {
  direction: 'up',
};

const TemplateThinChevron: Story<
  BaseProps & {
    direction: 'up' | 'right' | 'down' | 'left';
  }
> = (args) => <OldIcon.ThinChevron {...args} />;
export const ThinChevron = TemplateThinChevron.bind({});
ThinChevron.args = {
  direction: 'up',
};

const TemplateChevron: Story<
  BaseProps & {
    direction: 'up' | 'right' | 'down' | 'left';
  }
> = (args) => <OldIcon.Chevron {...args} />;
export const Chevron = TemplateChevron.bind({});
Chevron.args = {
  direction: 'up',
};

const TemplateSortArrow: Story<
  BaseProps & {
    direction: 'ascending' | 'descending';
  }
> = (args) => <OldIcon.SortArrow {...args} />;
export const SortArrow = TemplateSortArrow.bind({});
SortArrow.args = {
  direction: 'ascending',
};

const TemplateAccount: Story<BaseProps> = (args) => <OldIcon.Account {...args} />;
export const Account = TemplateAccount.bind({});
Account.args = {
  size: 10,
  fill: (t) => t.color.backgroundBlack,
};

const TemplateCalendarO: Story<BaseProps> = (args) => <OldIcon.CalendarO {...args} />;
export const CalendarO = TemplateCalendarO.bind({});
CalendarO.args = {
  size: 10,
  fill: (t) => t.color.backgroundBlack,
};

const TemplateFAQ: Story<BaseProps> = (args) => <OldIcon.FAQ {...args} />;
export const FAQ = TemplateFAQ.bind({});
FAQ.args = {
  size: 10,
  fill: (t) => t.color.cta,
};

const TemplatePercent: Story<BaseProps> = (args) => <OldIcon.Percent {...args} />;
export const Percent = TemplatePercent.bind({});
Percent.args = {
  size: 10,
  fill: (t) => t.color.backgroundBlack,
};

const TemplateProfile: Story<BaseProps> = (args) => <OldIcon.Profile {...args} />;
export const Profile = TemplateProfile.bind({});
Profile.args = {
  size: 10,
  fill: (t) => t.color.backgroundBlack,
};

const TemplateThreeDotsO: Story<BaseProps> = (args) => <OldIcon.ThreeDotsO {...args} />;
export const ThreeDotsO = TemplateThreeDotsO.bind({});
ThreeDotsO.args = {
  size: 10,
  fill: (t) => t.color.backgroundBlack,
};

const TemplateTaxPercentage: Story<BaseProps> = (args) => <OldIcon.TaxPercentage {...args} />;
export const TaxPercentage = TemplateTaxPercentage.bind({});
TaxPercentage.args = {
  size: 10,
  fill: (t) => t.color.backgroundBlack,
};

const TemplateTransfer: Story<BaseProps> = (args) => <OldIcon.Transfer {...args} />;
export const Transfer = TemplateTransfer.bind({});
Transfer.args = {
  size: 10,
  fill: (t) => t.color.backgroundBlack,
};

const TemplateUrgentMessage: Story<ChildProps> = (args) => <OldIcon.UrgentMessage {...args} />;
export const UrgentMessage = TemplateUrgentMessage.bind({});
UrgentMessage.args = {
  size: 10,
  fill: (t) => t.color.text,
  stroke: (t) => t.color.negative,
};

export const differentSizeAndFill = () => (
  <OldIcon.ArrowRight size={10} fill={(t) => t.color.positive} />
);

differentSizeAndFill.story = {
  name: 'Different size and fill',
};

export const withModifiedStroke = () => (
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
);

withModifiedStroke.story = {
  name: 'With modified stroke',
};

export const availableOldIcons = () => (
  <Display
    items={Object?.entries(OldIcon)?.map(
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

availableOldIcons.story = {
  name: 'Available old icons',
};

export const allOldIconsColored = () => (
  <>
    {Object?.entries(OldIcon)?.map(([key, IconComponent]: [string, React.ComponentType<any>]) => (
      <div style={{ outline: '1px dashed #bbb', display: 'inline-block' }}>
        <IconComponent
          color={(t: any) => t.color.cta}
          fill={(t: any) => t.color.cta}
          {...(key === 'SharevilleLogo' ? { id: 'shareville-logo' } : {})}
        />
      </div>
    ))}
  </>
);

allOldIconsColored.story = {
  name: 'All old icons (colored)',
};
