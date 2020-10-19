import React from 'react';
import styled from 'styled-components';

import { Separator } from '../..';

const StyledContainer = styled.div`
  height: 400px;
  width: 100%;
`;
const Container = ({ children }: any) => <StyledContainer>{children}</StyledContainer>;

export default {
  title: 'Atoms / Separator',
  parameters: {
    component: Separator,
  },
};

export const separatorDefault = () => (
  <Container>
    <Separator />
  </Container>
);

separatorDefault.story = {
  name: 'Separator default',
};

export const separatorsWithDifferentColor = () => (
  <Container>
    <Separator color={(t) => t.color.negative} />
    <br />
    <Separator color={(t) => t.color.backgroundDark} />
  </Container>
);

separatorsWithDifferentColor.story = {
  name: 'Separators with different color',
};

export const separatorVertical = () => (
  <Container>
    <Separator vertical />
  </Container>
);

separatorVertical.story = {
  name: 'Separator vertical',
};
