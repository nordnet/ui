import React, { useState } from 'react';
import { Props } from './Modal.types';
import { isBoolean } from '../../common/utils';
import { ModalInner } from './ModalInner';

export const Modal: React.FC<Props> = ({
  open: openExternal,
  onClose: onCloseExternal,
  ...rest
}) => {
  const isControlled = isBoolean(openExternal);
  const [openInternal, setOpenInternal] = useState(true);

  const onClose = () => {
    setOpenInternal(false);

    if (onCloseExternal) {
      onCloseExternal();
    }
  };

  const render = isControlled ? openExternal : openInternal;

  return render ? <ModalInner {...rest} onClose={onClose} /> : null;
};

Modal.displayName = 'Modal';
