import React from 'react';
import styled from 'styled-components';
import { Illustration, Flexbox, LabeledValue, Typography } from '../..';
import { Display } from '../../common/Display';

export default {
  title: 'Atoms / Illustration',
};

export const defaultUse = () => <Illustration.Archive48 />;

defaultUse.story = {
  name: 'Default use',
};

export const inlineStory = () => (
  <span>
    You can put the <Illustration.Archive48 inline /> directly in the text !
  </span>
);

inlineStory.story = {
  name: 'Inline',
};

export const differentColor = () => (
  <div style={{ color: 'blue' }}>
    You can have different color text around{' '}
    <Illustration.Archive48 inline color={(t) => t.color.positive} /> an Illustration
  </div>
);

differentColor.story = {
  name: 'Different color',
};

export const differentSecondaryColor = () => (
  <span>
    Some illustrations have 2 colors
    <Illustration.UrgentMailFill64
      color={(t) => t.color.icon}
      secondaryColor={(t) => t.color.shareville}
    />
  </span>
);

differentSecondaryColor.story = {
  name: 'Different secondary color',
};

export const titleExample = () => (
  <div style={{ color: 'blue' }}>
    You can use title prop for a hover tooltip
    <Illustration.Archive48 inline title="example tooltip" /> on an Illustration
  </div>
);

titleExample.story = {
  name: 'Title example',
};

export const availableIllustrations = () => (
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
);

availableIllustrations.story = {
  name: 'Available Illustrations',
};

export const allIllustrationsColored = () => (
  <>
    {Object?.entries(Illustration)?.map(
      ([illustrationName, IllustrationComponent]: [string, React.ComponentType<any>]) => (
        <div key={illustrationName} style={{ outline: '1px dashed #bbb', display: 'inline-block' }}>
          <IllustrationComponent color={(t: any) => t.color.cta} />
        </div>
      ),
    )}
  </>
);

allIllustrationsColored.story = {
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

export const size48 = () => <>{SizeIllustrations('48')}</>;

size48.story = {
  name: 'Size / 48px',
};

export const size64 = () => <>{SizeIllustrations('64')}</>;

size64.story = {
  name: 'Size / 64px',
};

export const size96 = () => <>{SizeIllustrations('96')}</>;

size96.story = {
  name: 'Size / 96px',
};

export const size240 = () => <>{SizeIllustrations('240')}</>;

size240.story = {
  name: 'Size / 240px',
};
export const size375 = () => <>{SizeIllustrations('375')}</>;

size375.story = {
  name: 'Size / 375px',
};
