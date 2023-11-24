import React from 'react';
import { Meta } from '@storybook/react';

import { OldIcon } from '../..';
import { Display } from '../../common/Display';

const meta: Meta = {
  title: 'Atoms / OldIcon',
};

export default meta;

export const DefaultUse = {
  render: () => <OldIcon.ArrowRight />,
};

export const Inline = {
  render: () => (
    <>
      You can put the <OldIcon.ArrowRight inline /> directly in the text with inline prop!
    </>
  ),
};

export const ThinArrow = {
  render: () => <OldIcon.ThinArrow direction="up" />,
};

export const ThinChevron = {
  render: () => <OldIcon.ThinChevron direction="up" />,
};

export const Chevron = {
  render: () => <OldIcon.Chevron direction="up" />,
};

export const SortArrow = {
  render: () => <OldIcon.SortArrow direction="ascending" />,
};

export const Account = {
  render: () => <OldIcon.Account size={10} fill={(t) => t.color.backgroundBlack} />,
};

export const CalendarO = {
  render: () => <OldIcon.CalendarO size={10} fill={(t) => t.color.backgroundBlack} />,
};

export const Faq = {
  render: () => <OldIcon.FAQ size={10} fill={(t) => t.color.cta} />,
};

export const Percent = {
  render: () => <OldIcon.Percent size={10} fill={(t) => t.color.backgroundBlack} />,
};

export const Profile = {
  render: () => <OldIcon.Profile size={10} fill={(t) => t.color.backgroundBlack} />,
};

export const ThreeDotsO = {
  render: () => <OldIcon.ThreeDotsO size={10} fill={(t) => t.color.backgroundBlack} />,
};

export const TaxPercentage = {
  render: () => <OldIcon.TaxPercentage size={10} fill={(t) => t.color.backgroundBlack} />,
};

export const Transfer = {
  render: () => <OldIcon.Transfer size={10} fill={(t) => t.color.backgroundBlack} />,
};

export const UrgentMessage = {
  render: () => (
    <OldIcon.UrgentMessage size={10} fill={(t) => t.color.text} stroke={(t) => t.color.negative} />
  ),
};

export const DifferentSizeAndFill = {
  render: () => <OldIcon.ArrowRight size={10} fill={(t) => t.color.positive} />,
};

export const WithModifiedStroke = {
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
};

export const AvailableOldIcons = {
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
};

export const AllOldIconsColored = {
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
