import React, { useState } from 'react';
import { Props } from './Modal.types';
import { isBoolean } from '../../common/utils';
import { ModalInner } from './ModalInner';

export const Modal: React.FC<Props> = ({
  open: isOpenExternal,
  onClose: onCloseExternal,
  ...rest
}) => {
  const isControlled = isBoolean(isOpenExternal);
  const [isOpenInternal, setIsOpenInternal] = useState(true);

  const onClose = () => {
    setIsOpenInternal(false);

    if (onCloseExternal) {
      onCloseExternal();
    }
  };

  const shouldRender = isControlled ? isOpenExternal : isOpenInternal;

  return shouldRender ? <ModalInner {...rest} onClose={onClose} /> : null;
};

Modal.displayName = 'Modal';
