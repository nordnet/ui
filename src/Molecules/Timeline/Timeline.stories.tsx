import React from 'react';
import { Box, Icon } from '../..';
import Timeline from './Timeline';

export default {
  title: 'Molecules / Timeline',
  parameters: {
    component: Timeline,
  },
};

export const Default = () => {
  return (
    <Box px={10}>
      <Timeline
        steps={[
          { text: 'Newer Newest (Status: not provided)', date: new Date(2020, 6, 3) },
          { text: 'Newest (Status: SUCCESS)', date: new Date(2020, 6, 3) },
          { text: 'Kinda new (Status: FAILURE)', date: new Date(2020, 3, 1), status: 'FAILURE' },
          {
            text: 'Feedback needed (Status: WARNING)',
            date: new Date(2020, 3, 1),
            status: 'WARNING',
          },
          { text: 'Old (Status: ACTIVE)', date: new Date(2020, 2, 1), status: 'ACTIVE' },
          {
            text: 'Waiting for information (Status: PENDING)',
            date: new Date(2020, 2, 1),
            status: 'PENDING',
          },
          { text: 'Nothing (Status: NEUTRAL)', date: new Date(2020, 1, 1), status: 'NEUTRAL' },
        ]}
      />
    </Box>
  );
};

export const DefaultWithHiddenSeparators = () => {
  return (
    <Box px={10}>
      <Timeline
        hideSeparators
        steps={[
          { text: 'Newer Newest (Status: not provided)', date: new Date(2020, 6, 3) },
          { text: 'Newest (Status: SUCCESS)', date: new Date(2020, 6, 3) },
          { text: 'Kinda new (Status: FAILURE)', date: new Date(2020, 3, 1), status: 'FAILURE' },
          {
            text: 'Feedback needed (Status: WARNING)',
            date: new Date(2020, 3, 1),
            status: 'WARNING',
          },
          { text: 'Old (Status: ACTIVE)', date: new Date(2020, 2, 1), status: 'ACTIVE' },
          {
            text: 'Waiting for information (Status: PENDING)',
            date: new Date(2020, 2, 1),
            status: 'PENDING',
          },
          { text: 'Nothing (Status: NEUTRAL)', date: new Date(2020, 1, 1), status: 'NEUTRAL' },
        ]}
      />
    </Box>
  );
};

export const DefaultWithNoDates = () => {
  return (
    <Box px={10}>
      <Timeline
        steps={[
          { text: 'Newer Newest (Status: not provided)' },
          { text: 'Newest (Status: SUCCESS)' },
          { text: 'Kinda new (Status: FAILURE)', status: 'FAILURE' },
          {
            text: 'Feedback needed (Status: WARNING)',
            status: 'WARNING',
          },
          { text: 'Old (Status: ACTIVE)', status: 'ACTIVE' },
          {
            text: 'Waiting for information (Status: PENDING)',
            status: 'PENDING',
          },
          { text: 'Nothing (Status: NEUTRAL)', status: 'NEUTRAL' },
        ]}
      />
    </Box>
  );
};

export const WithCustomIcons = () => {
  return (
    <Box px={10}>
      <Timeline
        steps={[
          {
            text: 'Newer Newest and Bigger! (Status: not provided)',
            date: new Date(2020, 6, 3),
            icon: <Icon.RecommendedFill32 color={(t) => t.color.positive} />,
          },
          {
            text: 'Newer Newest (Status: SUCCESS)',
            date: new Date(2020, 6, 3),
            status: 'SUCCESS',
            icon: <Icon.RecommendedFill24 color={(t) => t.color.positive} />,
          },
          {
            text: 'Kinda newer (Status: FAILURE)',
            date: new Date(2020, 3, 1),
            status: 'FAILURE',
            icon: <Icon.SubtractCircleFill24 color={(t) => t.color.negative} />,
          },
          {
            text: 'Warning no fill (Size 32) (Status: WARNING)',
            date: new Date(2020, 2, 1),
            status: 'WARNING',
            icon: <Icon.Warning32 color={(t) => t.color.warning} />,
          },
          {
            text: 'Warning no fill (Size 24) (Status: WARNING)',
            date: new Date(2020, 2, 1),
            status: 'WARNING',
            icon: <Icon.Warning24 color={(t) => t.color.warning} />,
          },
          {
            text: 'Warning no fill (Size 16) (Status: WARNING)',
            date: new Date(2020, 2, 1),
            status: 'WARNING',
            icon: <Icon.Warning16 color={(t) => t.color.warning} />,
          },
          {
            text: 'Not so old (Status: ACTIVE)',
            date: new Date(2020, 2, 1),
            status: 'ACTIVE',
            icon: <Icon.HelpFill24 color={(t) => t.color.barScaleActiveBar} />,
          },
          {
            text: 'Waiting for information... IN STYLE (Icon size 16) (Status: PENDING)',
            date: new Date(2020, 2, 1),
            status: 'PENDING',
            icon: <Icon.ClockFill16 color={(t) => t.color.cta} />,
          },
          {
            text: 'Waiting for information... IN STYLE (Icon size 24) (Status: PENDING)',
            date: new Date(2020, 2, 1),
            status: 'PENDING',
            icon: <Icon.ClockFill24 color={(t) => t.color.cta} />,
          },
          {
            text: 'Waiting for information... IN STYLE (Icon size 32) (Status: PENDING)',
            date: new Date(2020, 2, 1),
            status: 'PENDING',
            icon: <Icon.ClockFill32 color={(t) => t.color.cta} />,
          },
          {
            text: 'Nothing has ever looked so slick (Status: NEUTRAL)',
            date: new Date(2020, 1, 1),
            status: 'NEUTRAL',
            icon: <Icon.WarningFill24 color={(t) => t.color.timelineNext} />,
          },
        ]}
      />
    </Box>
  );
};

export const WithCustomIconsAndLineColors = () => {
  return (
    <Box px={10}>
      <Timeline
        colorSuccess={(t) => t.color.positive}
        colorNext={(t) => t.color.cta}
        colorFailure={(t) => t.color.negative}
        colorWarning={(t) => t.color.warning}
        steps={[
          {
            text: 'Newer Newest and Bigger! (Status: not provided)',
            date: new Date(2020, 6, 3),
            icon: <Icon.RecommendedFill32 color={(t) => t.color.positive} />,
          },
          {
            text: 'Newer Newest (Status: SUCCESS)',
            date: new Date(2020, 6, 3),
            status: 'SUCCESS',
            icon: <Icon.RecommendedFill24 color={(t) => t.color.positive} />,
          },
          {
            text: 'Kinda newer (Status: FAILURE)',
            date: new Date(2020, 3, 1),
            status: 'FAILURE',
            icon: <Icon.SubtractCircleFill24 color={(t) => t.color.negative} />,
          },
          {
            text: 'Warning no fill (Size 32) (Status: WARNING)',
            date: new Date(2020, 2, 1),
            status: 'WARNING',
            icon: <Icon.Warning32 color={(t) => t.color.warning} />,
          },
          {
            text: 'Warning no fill (Size 24) (Status: WARNING)',
            date: new Date(2020, 2, 1),
            status: 'WARNING',
            icon: <Icon.Warning24 color={(t) => t.color.warning} />,
          },
          {
            text: 'Warning no fill (Size 16) (Status: WARNING)',
            date: new Date(2020, 2, 1),
            status: 'WARNING',
            icon: <Icon.Warning16 color={(t) => t.color.warning} />,
          },
          {
            text: 'Not so old (Status: ACTIVE)',
            date: new Date(2020, 2, 1),
            status: 'ACTIVE',
            icon: <Icon.HelpFill24 color={(t) => t.color.barScaleActiveBar} />,
          },
          {
            text: 'Waiting for information... IN STYLE (Icon size 16) (Status: PENDING)',
            date: new Date(2020, 2, 1),
            status: 'PENDING',
            icon: <Icon.ClockFill16 color={(t) => t.color.cta} />,
          },
          {
            text: 'Waiting for information... IN STYLE (Icon size 24) (Status: PENDING)',
            date: new Date(2020, 2, 1),
            status: 'PENDING',
            icon: <Icon.ClockFill24 color={(t) => t.color.cta} />,
          },
          {
            text: 'Waiting for information... IN STYLE (Icon size 32) (Status: PENDING)',
            date: new Date(2020, 2, 1),
            status: 'PENDING',
            icon: <Icon.ClockFill32 color={(t) => t.color.cta} />,
          },
          {
            text: 'Nothing has ever looked so slick (Status: NEUTRAL)',
            date: new Date(2020, 1, 1),
            status: 'NEUTRAL',
            icon: <Icon.WarningFill24 color={(t) => t.color.timelineNext} />,
          },
        ]}
      />
    </Box>
  );
};

export const WithCustomIconsThatDontQuiteFit = () => {
  return (
    <Box px={10}>
      <Timeline
        steps={[
          {
            text: 'Horizontal lines: no bueno',
            date: new Date(2020, 6, 3),
            status: 'PENDING',
            icon: <Icon.LineGraph24 color={(t) => t.color.warning} />,
          },
          {
            text: 'This one quite works, but MAYBE it could use a circle around it?',
            date: new Date(2020, 6, 3),
            status: 'PENDING',
            icon: <Icon.Dislike16 color={(t) => t.color.barScaleActiveBar} />,
          },
          {
            text: "SOME non-filled icons size 32 don't quite fit with the lines",
            date: new Date(2020, 6, 3),
            status: 'WARNING',
            icon: <Icon.Error32 color={(t) => t.color.warning} />,
          },
          {
            text: 'This one "kinda" works, but only from one side',
            date: new Date(2020, 6, 3),
            status: 'SUCCESS',
            icon: <Icon.ExternalLink24 color={(t) => t.color.positive} />,
          },
          {
            text: 'Icons without any border are a miss',
            date: new Date(2020, 3, 1),
            status: 'FAILURE',
            icon: <Icon.Cross24 color={(t) => t.color.negative} />,
          },
          {
            text: "Vertically asymmetrical icons don't present as well either",
            date: new Date(2020, 2, 1),
            status: 'ACTIVE',
            icon: <Icon.DislikeFill24 color={(t) => t.color.barScaleActiveBar} />,
          },
          {
            text: "Vertically asymmetrical icons don't present as well either",
            date: new Date(2020, 2, 1),
            status: 'ACTIVE',
            icon: <Icon.LikeFill24 color={(t) => t.color.barScaleActiveBar} />,
          },
          {
            text: 'Vetically symmetrical but shorter icons look weird',
            date: new Date(2020, 2, 1),
            status: 'PENDING',

            icon: <Icon.Deposit24 color={(t) => t.color.cta} />,
          },
          {
            text: "Some icon shapes just don't fit",
            date: new Date(2020, 1, 1),
            status: 'NEUTRAL',

            icon: <Icon.ExternalLink24 color={(t) => t.color.timelineNext} />,
          },
        ]}
      />
    </Box>
  );
};

export const SingleElement = () => {
  return (
    <Box px={10}>
      <Timeline steps={[{ text: 'Single element. So lonely 😭', date: new Date(2020, 6, 3) }]} />
    </Box>
  );
};

export const DifferentHeights = () => {
  return (
    <Box px={10}>
      <Timeline
        steps={[
          { text: <Box py={3}>Newest</Box>, date: new Date(2020, 6, 3) },
          { text: 'Kinda new', date: new Date(2020, 3, 1) },
          { text: <Box py={4}>Kinda old</Box>, date: new Date(2020, 1, 1), status: 'FAILURE' },
          { text: <Box py={10}>Oldest</Box>, date: new Date(2020, 0, 1), status: 'ACTIVE' },
        ]}
      />
    </Box>
  );
};

export const WithButton = () => {
  const button = { label: 'Click me', onClick: () => alert('Tihi that tickles') }; // eslint-disable-line no-alert
  return (
    <Box px={10}>
      <Timeline
        steps={[
          { text: 'Newest', date: new Date(2020, 6, 3) },
          { text: 'Old', date: new Date(2020, 5, 1), status: 'ACTIVE', button },
        ]}
      />
    </Box>
  );
};
