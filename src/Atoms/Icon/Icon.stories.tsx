import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import Icon from '.';

const stories = storiesOf('Atoms/Icon', module);

const StyledContainer = styled.div`
  display: 'flex';
  flex-wrap: wrap;
  margin: 0 -${p => p.theme.spacing.unit(2)}px;
  & > svg {
    padding: 0 ${p => p.theme.spacing.unit(2)}px;
  }
`;

const Container: React.FC = ({ children }) => <StyledContainer>{children}</StyledContainer>;

stories.add('Icons', () => {
  return (
    <Container>
      <Icon.QuestionMark />
      <Icon.ChevronUp />
      <Icon.ChevronDown />
      <Icon.ArrowRight />
    </Container>
  );
});

stories.add('Icons with different size and color', () => {
  return (
    <Container>
      <Icon.QuestionMark size={10} color={t => t.color.positive} />
      <Icon.ChevronUp size={10} color={t => t.color.positive} />
      <Icon.ChevronDown size={10} color={t => t.color.positive} />
      <Icon.ArrowRight size={10} color={t => t.color.positive} />
    </Container>
  );
});
