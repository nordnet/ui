import React from 'react';
import ActionModal from '.';
import Illustration from '../../Atoms/Illustration';

export default {
  title: 'Molecules / Action Modal  ',
  parameters: {
    component: ActionModal,
  },
};

export const Default = () => {
  return (
    <ActionModal
      illustration={
        <Illustration.Shareville240
          secondaryColor={(t) => t.color.actionModalSharevilleIllustration}
        />
      }
      title="title"
    >
      {' '}
      children are here{' '}
    </ActionModal>
  );
};
