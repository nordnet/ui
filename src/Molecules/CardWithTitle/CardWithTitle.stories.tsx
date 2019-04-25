import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import { HashRouter } from 'react-router-dom';

import { CardWithTitle, Link, Icon, Typography, Flexbox } from '../..';

const PaddedIcon = styled(Icon.ArrowRight)`
  padding-left: ${p => p.theme.spacing.unit(1)}px;
`;

const title = (
  <HashRouter>
    <Flexbox.Container justifyContent="space-between" direction="row">
      <Flexbox.Item>
        <Typography type="title3">Konton</Typography>
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
  </HashRouter>
);

storiesOf('Molecules | CardWithTitle', module)
  .add('Basic CardWithTitle', () => (
    <CardWithTitle title="Konton">A CardWithTitle containing content</CardWithTitle>
  ))
  .add('CardWithTitle with right title', () => (
    <CardWithTitle title={title}>A CardWithTitles with two titles</CardWithTitle>
  ))
  .add('CardWithTitle with no title', () => (
    <CardWithTitle>A CardWithTitle without title</CardWithTitle>
  ))
  .add('CardWithTitle as article', () => (
    <CardWithTitle as="article">A CardWithTitle as a article containing content</CardWithTitle>
  ))
  .add('CardWithTitle with title as custom component article', () => (
    <CardWithTitle title={<div>Custom component</div>}>
      A CardWithTitle as a article containing content
    </CardWithTitle>
  ));
