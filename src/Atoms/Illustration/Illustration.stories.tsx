import React from 'react';
import styled from 'styled-components';
import { Illustration, Flexbox, LabeledValue, Typography } from '../..';
import { Display } from '../../common/Display';

export default {
  title: 'Atoms / Illustration',
};

export const DefaultUse = {
  render: () => <Illustration.Archive48 />,
  name: 'Default use',
};

export const InlineStory = {
  render: () => (
    <span>
      You can put the <Illustration.Archive48 inline /> directly in the text !
    </span>
  ),

  name: 'Inline',
};

export const DifferentColor = {
  render: () => (
    <div style={{ color: 'blue' }}>
      You can have different color text around{' '}
      <Illustration.Archive48 inline color={(t) => t.color.positive} /> an Illustration
    </div>
  ),

  name: 'Different color',
};

export const DifferentSecondaryColor = {
  render: () => (
    <span>
      Some illustrations have 2 colors
      <Illustration.UrgentMailFill64
        color={(t) => t.color.icon}
        secondaryColor={(t) => t.color.shareville}
      />
    </span>
  ),

  name: 'Different secondary color',
};

export const TitleExample = {
  render: () => (
    <div style={{ color: 'blue' }}>
      You can use title prop for a hover tooltip
      <Illustration.Archive48 inline title="example tooltip" /> on an Illustration
    </div>
  ),

  name: 'Title example',
};

export const AvailableIllustrations = {
  render: () => (
    <Display
      items={Object?.entries(Illustration)?.map(
        ([IllustrationName, IllustrationComponent]: [string, React.ComponentType<any>]) => ({
          title: IllustrationName,
          component: (
            <div style={{ outline: '1px dashed #bbb', display: 'inline-block' }}>
              <IllustrationComponent />
            </div>
          ),
        }),
      )}
    />
  ),
};

export const AllIllustrationsColored = {
  render: () => (
    <>
      {Object?.entries(Illustration)?.map(
        ([illustrationName, IllustrationComponent]: [string, React.ComponentType<any>]) => (
          <div
            key={illustrationName}
            style={{ outline: '1px dashed #bbb', display: 'inline-block' }}
          >
            <IllustrationComponent color={(t: any) => t.color.cta} />
          </div>
        ),
      )}
    </>
  ),

  name: 'All Illustrations (colored)',
};

const StyledFlexbox = styled(Flexbox)`
  background-color: ${(p) => p.theme.color.badgeIconColor};
`;

const StyledLabeledValue = styled(LabeledValue)`
  align-items: center;
  margin: 12px 0;
  width: 390px;
`;

const SizeIllustrations = (size: string) => (
  <StyledFlexbox container gap={8} wrap="wrap">
    {Object?.entries(Illustration)
      ?.filter((name) => name[0].includes(size))
      .map(
        ([illustrationName, IllustrationComponent]: [string, React.ComponentType<any>], index) => (
          <StyledLabeledValue
            key={illustrationName}
            label={<Typography type="tertiary">{illustrationName}</Typography>}
          >
            <IllustrationComponent title={index} />
          </StyledLabeledValue>
        ),
      )}
  </StyledFlexbox>
);

export const Size48 = {
  render: () => <>{SizeIllustrations('48')}</>,
  name: 'Size / 48px',
};

export const Size64 = {
  render: () => <>{SizeIllustrations('64')}</>,
  name: 'Size / 64px',
};

export const Size96 = {
  render: () => <>{SizeIllustrations('96')}</>,
  name: 'Size / 96px',
};

export const Size240 = {
  render: () => <>{SizeIllustrations('240')}</>,
  name: 'Size / 240px',
};

export const Size375 = {
  render: () => <>{SizeIllustrations('375')}</>,
  name: 'Size / 375px',
};
