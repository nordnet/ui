import React from 'react';
import styled from 'styled-components';
import MD from 'react-markdown';
import { withKnobs, select, text, boolean } from '@storybook/addon-knobs';
import docs from './CardWithTitle.md';

import { Box, CardWithTitle, FadedScroll, Flexbox, Icon, Typography } from '../..';

const Text = styled.span`
  display: inline-block;
  max-width: 400px;
`;

const MockedContent = () => {
  return (
    <Text>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac lectus aliquam,
      scelerisque est eget, lobortis massa. Praesent in pretium orci. Phasellus est sapien, maximus
      at nulla ac, condimentum dictum ante. Sed consequat erat lacinia, molestie augue vitae,
      efficitur purus. In venenatis elit nec tortor condimentum, sit amet elementum magna fermentum.
      Phasellus dictum non augue vitae pellentesque. Class aptent taciti sociosqu ad litora torquent
      per conubia nostra, per inceptos himenaeos. Praesent rutrum egestas sollicitudin. Cras semper,
      mi vitae vulputate aliquam, tortor ante maximus libero, vitae maximus velit dui quis augue.
      Aenean condimentum molestie ante, nec rhoncus nunc aliquet non. Aliquam bibendum tortor dui,
      eget porttitor nibh fermentum eu. Orci varius natoque penatibus et magnis dis parturient
      montes, nascetur ridiculus mus. Suspendisse nec magna lectus. Fusce posuere nisi vel purus
      faucibus sodales. Quisque ac ullamcorper eros, sed lobortis risus. Sed eu magna mi. Vestibulum
      accumsan porta velit. Donec ligula arcu, cursus eu nisl vel, molestie pretium neque. Etiam
      urna elit, mollis vel arcu id, vulputate mattis nisi. Fusce eget odio id ipsum consectetur
      feugiat vitae ut tortor. Aliquam non tempor nibh, scelerisque placerat eros. Nulla facilisi.
    </Text>
  );
};

const HeightOnCardWithTitle = styled(CardWithTitle)`
  ${(p) => p.theme.media.greaterThan(p.theme.breakpoints.md)} {
    height: 250px;
  }
`;

export default {
  title: 'Molecules / CardWithTitle',
  parameters: {
    component: CardWithTitle,
  },
  decorators: [withKnobs],
};

export const documentation = () => <MD source={docs} />;

export const defaultStory = () => (
  <CardWithTitle title="Konton">A CardWithTitle containing content</CardWithTitle>
);

defaultStory.story = {
  name: 'Default',
};

export const withComponentAsTitleStory = () => (
  <CardWithTitle title={<Typography type="hero">Hero Title</Typography>}>
    A CardWithTitle containing content
  </CardWithTitle>
);

withComponentAsTitleStory.story = {
  name: 'With Component As Title',
};

export const withVariantBig = () => (
  <CardWithTitle variant="big" title="Title for the card">
    A CardWithTitle with extra padding
  </CardWithTitle>
);

withVariantBig.story = {
  name: 'With variant big',
};

export const cardWithTitleAsArticleMostCardWithTitleShouldBeArticle = () => (
  <CardWithTitle as="article" title="Konton">
    A CardWithTitle as a article containing content
  </CardWithTitle>
);

cardWithTitleAsArticleMostCardWithTitleShouldBeArticle.story = {
  name: 'CardWithTitle as article (most CardWithTitle should be article)',
};

export const cardWithTitleAsSection = () => (
  <CardWithTitle as="section" title="Konton">
    A CardWithTitle as a section containing content
  </CardWithTitle>
);

cardWithTitleAsSection.story = {
  name: 'CardWithTitle as section',
};

export const integrationCardWithTitleWithCustomComponentAsTitle = () => {
  const PaddedIcon = styled(Icon.ArrowRight)`
    padding-left: ${(p) => p.theme.spacing.unit(1)}px;
  `;
  const CustomTitle = (
    <Flexbox container justifyContent="space-between" alignItems="center" direction="row">
      <Flexbox item>
        <Typography type="title3" as="h2">
          Konton
        </Typography>
      </Flexbox>
      <Flexbox item>
        <Typography type="secondary" color={(t) => t.color.text} weight="bold">
          Marknadsöversikt (Not Really a link)
        </Typography>
        <PaddedIcon inline color={(t) => t.color.cta} size={3} />
      </Flexbox>
    </Flexbox>
  );

  return (
    <CardWithTitle title={CustomTitle}>
      <Box px={5} pb={5}>
        <MockedContent />
      </Box>
    </CardWithTitle>
  );
};

integrationCardWithTitleWithCustomComponentAsTitle.story = {
  name: 'Integration: CardWithTitle with custom component as title',
};

export const integrationWithFadedScroll = () => {
  const CustomTitle = (
    <Typography type="title3" as="h2">
      Konton
    </Typography>
  );

  return (
    <CardWithTitle title={CustomTitle}>
      <FadedScroll maxHeight={50}>
        <Box px={5}>
          <MockedContent />
        </Box>
      </FadedScroll>
    </CardWithTitle>
  );
};

integrationWithFadedScroll.story = {
  name: 'Integration: with FadedScroll',
};

export const integrationFadedScrollWithHeightFromParent = () => {
  const CustomTitle = (
    <Typography type="title3" as="h2">
      Konton
    </Typography>
  );

  return (
    <HeightOnCardWithTitle title={CustomTitle}>
      <FadedScroll>
        <Box px={5}>
          <MockedContent />
        </Box>
      </FadedScroll>
    </HeightOnCardWithTitle>
  );
};

integrationFadedScrollWithHeightFromParent.story = {
  name:
    'Integration: with FadedScroll of content and height being whatever is available left of parents height.',
};

export const withoutAllVerticalPadding = () => (
  <CardWithTitle
    variant={select('Variant', ['normal', 'big'], 'normal')}
    title={text('Title', 'This card has neither top nor bottom padding')}
    noTopPadding={boolean('NoTopPadding', true)}
    noBottomPadding={boolean('NoBottomPadding', true)}
  >
    {text(
      'Content',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat turpis erat, sit amet tincidunt purus tempus sit amet. Nullam porttitor lorem a nibh efficitur condimentum. Etiam ac dolor eget felis hendrerit pellentesque. Cras efficitur libero quis mattis condimentum. Vestibulum rhoncus nibh et euismod consequat. Etiam semper leo nisl, id aliquet libero consectetur in. Nunc vulputate nec mi eu iaculis. Quisque vel pellentesque odio. Donec tempus turpis nec vehicula tempor. Nulla facilisi. Suspendisse magna ex, vulputate quis risus non, eleifend tincidunt dui. Nam blandit vitae velit non consequat.',
    )}
  </CardWithTitle>
);

withoutAllVerticalPadding.story = {
  name: 'Cards without padding',
};
