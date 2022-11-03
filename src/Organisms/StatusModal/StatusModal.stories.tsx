import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { StatusModal } from '../..';
import { Status } from './StatusModal.types';

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

storiesOf('Organisms / StatusModal', module)
  .addDecorator((storyFn) => storyFn())
  .add('Loading', () => <StatusModal {...defaultProps} loading options={loadingOptions} />)
  .add('Success', () => <StatusModal {...defaultProps} loading={false} options={successOptions} />)
  .add('Warning', () => <StatusModal {...defaultProps} loading={false} options={warningOptions} />)
  .add('Error', () => <StatusModal {...defaultProps} loading={false} options={errorOptions} />)
  .add('With two buttons', () => {
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
  })
  .add('With fixed bottom mobile', () => (
    <StatusModal {...defaultProps} fixedBottomMobile loading={false} options={successOptions} />
  ))
  .add('With functionRed confirm buttom', () => (
    <StatusModal
      {...defaultProps}
      loading={false}
      options={successOptions}
      confirmColor={(t) => t.color.functionRed}
    />
  ))
  .add('With functionRed confirm buttom and cancel button', () => (
    <StatusModal
      {...defaultProps}
      loading={false}
      options={twoButtonsOptions}
      confirmColor={(t) => t.color.functionRed}
    />
  ));
