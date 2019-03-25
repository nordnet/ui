import { storiesOf } from '@storybook/react';
import React from 'react';

import styled from 'styled-components';

const stories = storiesOf('Theme', module);

stories.add('styled components theme is properly passed', () => {
  const Component = styled.div`
    width: ${p => p.theme.spacing.unit(50)}px;
    height: ${p => p.theme.spacing.unit(50)}px;
    border: 1px solid ${p => p.theme.rawColor.cta};
  `;
  return <Component>Width, height and border comes from theme!</Component>;
});

const Component = styled.div`
  width: ${p => p.theme.spacing.unit(50)}px;
  height: ${p => p.theme.spacing.unit(50)}px;
  background: ${({ theme }) => theme.rawColor.cta};

  ${({ theme }) => theme.media.greaterThan(theme.size.xsmall)} {
    background: ${({ theme }) => theme.rawColor.complementaryGreen1};
  }
  ${({ theme }) => theme.media.greaterThan(theme.size.small)} {
    background: ${({ theme }) => theme.rawColor.negative};
  }
  ${({ theme }) => theme.media.greaterThan(theme.size.medium)} {
    background: ${({ theme }) => theme.rawColor.index};
  }
`;
stories.add('media queries works', () => {
  return <Component>Change the size of the screen and watch me changing colors</Component>;
});
