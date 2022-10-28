import React from 'react';
import { action } from '@storybook/addon-actions';
import styled from 'styled-components';

import ActionModal from '.';
import Illustration from '../../Atoms/Illustration';

export default {
  title: 'Molecules / Action Modal  ',
  parameters: {
    component: ActionModal,
  },
};

const StyledContainer = styled.div`
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  background-color: #e6e6e6;
`;

export const Default = () => {
  return (
    <StyledContainer>
      <ActionModal
        illustration={
          <Illustration.Shareville240
            primaryColor={(t) => t.color.actionModalSharevilleIllustration}
            secondaryColor={(t) => t.color.actionModalSharevilleIllustrationSecondary}
          />
        }
        title="title"
        onSkipClick={action('skip')}
        onCTAClick={action('take tour')}
        autoFocus
      >
        children are here
      </ActionModal>
    </StyledContainer>
  );
};
