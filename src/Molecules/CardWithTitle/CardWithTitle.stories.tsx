import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import { HashRouter } from 'react-router-dom';

import { CardWithTitle, Link, Flexbox, Icon, Typography } from '../..';

const PaddedIcon = styled(Icon.ArrowRight)`
  padding-left: ${p => p.theme.spacing.unit(1)}px;
`;

const CustomTitle = (
  <Flexbox.Container justifyContent="space-between" alignItems="center" direction="row">
    <Flexbox.Item>
      <Typography type="title3" as="h2">
        Konton
      </Typography>
    </Flexbox.Item>
    <Flexbox.Item>
      <Link to="www.google.com">
        <Typography type="secondary" color={t => t.color.text} weight="bold">
          Marknadsöversikt
        </Typography>
        <PaddedIcon color={t => t.color.cta} size={3} />
      </Link>
    </Flexbox.Item>
  </Flexbox.Container>
);

storiesOf('Molecules | CardWithTitle', module)
  .add('Basic CardWithTitle', () => (
    <CardWithTitle title="Konton">A CardWithTitle containing content</CardWithTitle>
  ))
  .add('CardWithTitle with secondary element next to title', () => (
    <HashRouter>
      <CardWithTitle title={CustomTitle}>A CardWithTitles with two titles</CardWithTitle>
    </HashRouter>
  ))
  .add('CardWithTitle as article (most CardWithTitle should be article)', () => (
    <CardWithTitle as="article" title="Konton">
      A CardWithTitle as a article containing content
    </CardWithTitle>
  ))
  .add('CardWithTitle as section', () => (
    <CardWithTitle as="section" title="Konton">
      A CardWithTitle as a section containing content
    </CardWithTitle>
  ));
