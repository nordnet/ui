import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import { action } from '@storybook/addon-actions';

import { Button } from '../..';

const stories = storiesOf('Molecules/Button', module);

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 50vw;
`;
const Container = ({ children }: any) => <StyledContainer>{children}</StyledContainer>;

stories.add('Default usage', () => <Button onClick={action('clicked')}>Button</Button>);
stories.add('Disabled button', () => (
  <Button disabled onClick={action('clicked')}>
    Button
  </Button>
));
stories.add('Button with variant', () => (
  <Button onClick={action('clicked')} variant="secondary">
    Button
  </Button>
));
stories.add('Button primary with size modified', () => (
  <Container>
    <Button size="s" onClick={action('small')}>
      Small
    </Button>
    <Button onClick={action('medium')}>Medium</Button>
    <Button size="l" onClick={action('large')}>
      Large
    </Button>
  </Container>
));
stories.add('Button secondary with size modified', () => (
  <Container>
    <Button size="s" variant="secondary" onClick={action('small')}>
      Small
    </Button>
    <Button variant="secondary" onClick={action('medium')}>
      Medium
    </Button>
    <Button size="l" variant="secondary" onClick={action('large')}>
      Large
    </Button>
  </Container>
));
stories.add('Button with type modified', () => (
  <Container>
    <Button type="reset" onClick={action('reset')}>
      Reset
    </Button>
    <Button type="submit" onClick={action('submit')}>
      Submit
    </Button>
  </Container>
));
