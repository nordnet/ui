import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import { HashRouter } from 'react-router-dom';

import { CardWithTitle, Link, Icon, Typography } from '../..';

const PaddedIcon = styled(Icon.ArrowRight)`
  padding-left: ${p => p.theme.spacing.unit(1)}px;
`;

const rightTitle = (
  <HashRouter>
    <Link to="www.google.com">
      <Typography type="secondary" color={t => t.color.text} weight="bold">
        Marknadsöversikt
      </Typography>
      <PaddedIcon color={t => t.color.cta} size={3} />
    </Link>
  </HashRouter>
);

storiesOf('Molecules | CardWithTitle', module)
  .add('Basic CardWithTitle', () => (
    <CardWithTitle title="Konton">A CardWithTitle containing content</CardWithTitle>
  ))
  .add('CardWithTitle with right title', () => (
    <CardWithTitle title="Konton" rightTitle={rightTitle}>
      A CardWithTitles containing content
    </CardWithTitle>
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
