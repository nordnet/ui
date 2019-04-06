import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import Icon from '.';

const stories = storiesOf('Atoms/Icon', module);

const StyledList = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
`;

const StyledListItem = styled.li`
  display: inline-block;
  text-align: center;
  margin: 0 ${p => p.theme.spacing.unit(2)}px;
`;

const StyledCaption = styled.p`
  margin: 0;
  font-size: 12px;
`;

const IconsList: React.FC = ({ children }) => <StyledList>{children}</StyledList>;
const IconsItem: React.FC = ({ children }) => <StyledListItem>{children}</StyledListItem>;
const IconsCaption: React.FC = ({ children }) => <StyledCaption>{children}</StyledCaption>;

stories.add('Icons', () => {
  return (
    <IconsList>
      <IconsItem>
        <Icon.ChevronUp />
        <IconsCaption>ChevronUp</IconsCaption>
      </IconsItem>
      <IconsItem>
        <Icon.ChevronDown />
        <IconsCaption>ChevronDown</IconsCaption>
      </IconsItem>
      <IconsItem>
        <Icon.ArrowRight />
        <IconsCaption>ArrowRight</IconsCaption>
      </IconsItem>
    </IconsList>
  );
});

stories.add('Icons with different size and color', () => {
  return (
    <IconsList>
      <IconsItem>
        <Icon.ChevronUp size={10} color={t => t.color.positive} />
        <IconsCaption>ChevronUp</IconsCaption>
      </IconsItem>
      <IconsItem>
        <Icon.ChevronDown size={10} color={t => t.color.positive} />
        <IconsCaption>ChevronDown</IconsCaption>
      </IconsItem>
      <IconsItem>
        <Icon.ArrowRight size={10} color={t => t.color.positive} />
        <IconsCaption>ArrowRight</IconsCaption>
      </IconsItem>
    </IconsList>
  );
});
