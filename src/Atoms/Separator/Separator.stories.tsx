import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import Separator from './index';

const StyledContainer = styled.div`
  height: 400px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Container = ({ children }: any) => <StyledContainer>{children}</StyledContainer>;

const stories = storiesOf('Atoms/Separator', module);

stories.add('Separator default', () => (
  <Container>
    <Separator />
  </Container>
));
stories.add('Separator vertical', () => (
  <Container>
    <Separator vertical />
  </Container>
));
