import { storiesOf } from '@storybook/react';
import React from 'react';

import styled from 'styled-components';

const stories = storiesOf('Theme', module);

stories.add('styled components theme is properly passed', () => {
  const Component = styled.div`
    width: ${p => p.theme.spacing.unit(50)}px;
    height: ${p => p.theme.spacing.unit(50)}px;
    border: 1px solid ${p => p.theme.color.cta};
  `;
  return <Component>Width, height and border comes from theme!</Component>;
});

const Component = styled.div`
  width: ${p => p.theme.spacing.unit(50)}px;
  height: ${p => p.theme.spacing.unit(50)}px;
  background: ${({ theme }) => theme.color.cta};

  ${({ theme }) => theme.media.greaterThan(theme.size.xs)} {
    background: ${({ theme }) => theme.color.positive};
  }
  ${({ theme }) => theme.media.greaterThan(theme.size.sm)} {
    background: ${({ theme }) => theme.color.negative};
  }
  ${({ theme }) => theme.media.greaterThan(theme.size.md)} {
    background: ${({ theme }) => theme.color.warning};
  }
`;
stories.add('media queries works', () => {
  return <Component>Change the size of the screen and watch me changing colors</Component>;
});
