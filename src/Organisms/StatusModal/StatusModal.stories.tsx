import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { StatusModal } from '../..';
import { Status } from './StatusModal.types';

const meta: Meta<typeof StatusModal> = {
  component: StatusModal,
};

export default meta;
type Story = StoryObj<typeof StatusModal>;

const loadingOptions = {
  title: 'Modal title for loading',
  text: 'Modal text for loading',
  textConfirm: 'Modal text for loading',
};

const successOptions = {
  status: 'SUCCESS' as Status,
  title: 'Modal title for success',
  text: 'Modal text for success',
  textConfirm: 'Modal text for success',
};

const errorOptions = {
  status: 'ERROR' as Status,
  title: 'Modal title for error',
  text: 'Modal text for error',
  textConfirm: 'Modal text for error',
};

const warningOptions = {
  status: 'WARNING' as Status,
  title: 'Modal title for warning',
  text: 'Modal text for warning',
  textConfirm: 'Modal text for warning',
};

const twoButtonsOptions = {
  status: 'SUCCESS' as Status,
  title: 'Modal title for two buttons',
  text: 'Modal text for two buttons',
  textConfirm: 'Ok',
  textCancel: 'Cancel',
};

const defaultProps = {
  id: 'status-modal',
  onClose: () => {},
};

export const Loading: Story = {
  render: () => <StatusModal {...defaultProps} loading options={loadingOptions} />,
};

export const Success: Story = {
  render: () => <StatusModal {...defaultProps} loading={false} options={successOptions} />,
};

export const Warning: Story = {
  render: () => <StatusModal {...defaultProps} loading={false} options={warningOptions} />,
};

export const Error: Story = {
  render: () => <StatusModal {...defaultProps} loading={false} options={errorOptions} />,
};

const ModalWithTwoButtons = () => {
  const [buttonClicked, setButtonClicked] = useState('');

  return (
    <>
      {buttonClicked === 'CONFIRM' && (
        <h1 style={{ color: 'green' }}>
          Confirm button was pressed. onClose was called with confirmed = true
        </h1>
      )}
      {buttonClicked === 'CANCEL' && (
        <h1 style={{ color: 'red' }}>
          Cancel button was pressed. onClose was called with confirmed = false
        </h1>
      )}
      <StatusModal
        {...defaultProps}
        loading={false}
        options={twoButtonsOptions}
        onClose={(confirmed: boolean) => {
          setButtonClicked(confirmed ? 'CONFIRM' : 'CANCEL');
        }}
      />
    </>
  );
};

export const WithTwoButtons: Story = {
  render: () => <ModalWithTwoButtons />,
};

export const WithFixedBottomMobile: Story = {
  render: () => (
    <StatusModal {...defaultProps} fixedBottomMobile loading={false} options={successOptions} />
  ),
};

export const WithNegativeConfirmButtom: Story = {
  render: () => (
    <StatusModal {...defaultProps} loading={false} options={successOptions} variant="negative" />
  ),
};
export const WithNegativeConfirmButtomAndCancelButton: Story = {
  render: () => (
    <StatusModal {...defaultProps} loading={false} options={twoButtonsOptions} variant="negative" />
  ),
};
