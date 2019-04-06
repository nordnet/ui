import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import MD from 'react-markdown';
import docs from './Separator.md';

import { Separator } from '../..';

const StyledContainer = styled.div`
  height: 400px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Container = ({ children }: any) => <StyledContainer>{children}</StyledContainer>;

storiesOf('Atoms/Separator', module)
  .add('Documentation', () => <MD source={docs} />)
  .add('Separator default', () => (
    <Container>
      <Separator />
    </Container>
  ))
  .add('Separator vertical', () => (
    <Container>
      <Separator vertical />
    </Container>
  ));
