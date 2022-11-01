import React from 'react';
import { action } from '@storybook/addon-actions';
import styled from 'styled-components';

import ActionModal from '.';
import Illustration from '../../Atoms/Illustration';
import Typography from '../../Atoms/Typography';
import Button from '../Button';

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
            color={(t) => t.color.actionModalSharevilleIllustration}
            secondaryColor={(t) => t.color.actionModalSharevilleIllustrationSecondary}
          />
        }
        title="title"
        confirmButton={
          <Button variant="primary" onClick={action('onConfirm')}>
            confirm
          </Button>
        }
        cancelButton={
          <Button variant="neutral" onClick={action('onCancel')}>
            <Typography color={(t) => t.color.actionModalLink} type="secondary" weight="bold">
              skip tour
            </Typography>
          </Button>
        }
      >
        children are here
      </ActionModal>
    </StyledContainer>
  );
};

export const withConfirmButtonOnly = () => {
  return (
    <StyledContainer>
      <ActionModal
        illustration={
          <Illustration.Shareville240
            color={(t) => t.color.actionModalSharevilleIllustration}
            secondaryColor={(t) => t.color.actionModalSharevilleIllustrationSecondary}
          />
        }
        title="title"
        confirmButton={
          <Button variant="primary" onClick={action('onConfirm')}>
            confirm
          </Button>
        }
      >
        children are here
      </ActionModal>
    </StyledContainer>
  );
};
