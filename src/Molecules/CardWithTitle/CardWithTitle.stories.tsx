import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import { HashRouter } from 'react-router-dom';
import MD from 'react-markdown';
import docs from './CardWithTitle.md';

import { CardWithTitle, Link, Flexbox, Icon, Typography } from '../..';

const SpaceInside = styled.div`
  padding: ${p => p.theme.spacing.unit(5)}px;
`;

storiesOf('Molecules | CardWithTitle', module)
  .add('Documentation', () => <MD source={docs} />)
  .add('Default', () => (
    <CardWithTitle title="Konton">A CardWithTitle containing content</CardWithTitle>
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
  ))
  .add('Integration: CardWithTitle with custom component as title', () => {
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

    return (
      <HashRouter>
        <CardWithTitle title={CustomTitle}>
          <SpaceInside>
            A CardWithTitles with two titles. <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac lectus aliquam,
            scelerisque est eget, lobortis massa. Praesent in pretium orci. Phasellus est sapien,
            maximus at nulla ac, condimentum dictum ante. Sed consequat erat lacinia, molestie augue
            vitae, efficitur purus. In venenatis elit nec tortor condimentum, sit amet elementum
            magna fermentum. Phasellus dictum non augue vitae pellentesque. Class aptent taciti
            sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent rutrum
            egestas sollicitudin. Cras semper, mi vitae vulputate aliquam, tortor ante maximus
            libero, vitae maximus velit dui quis augue. Aenean condimentum molestie ante, nec
            rhoncus nunc aliquet non. Aliquam bibendum tortor dui, eget porttitor nibh fermentum eu.
            Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Suspendisse nec magna lectus. Fusce posuere nisi vel purus faucibus sodales. Quisque ac
            ullamcorper eros, sed lobortis risus. Sed eu magna mi. Vestibulum accumsan porta velit.
            Donec ligula arcu, cursus eu nisl vel, molestie pretium neque. Etiam urna elit, mollis
            vel arcu id, vulputate mattis nisi. Fusce eget odio id ipsum consectetur feugiat vitae
            ut tortor. Aliquam non tempor nibh, scelerisque placerat eros. Nulla facilisi. Nunc
            tempor congue neque a cursus. Quisque tristique eros in fermentum feugiat.
          </SpaceInside>
        </CardWithTitle>
      </HashRouter>
    );
  });
