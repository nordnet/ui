import React, { useState } from 'react';
import { Props } from './Modal.types';
import { isBoolean } from '../../common/utils';
import { Backdrop, Footer, Header, ModalInner } from './ModalInner';
import { Portal } from '../..';

const components = {
  Backdrop,
  Footer,
  Header,
};

export const Modal: React.FC<Props> & {
  /**
   * This will allow you to customize
   * inner parts with styled-components
   * @example
   * const CustomModal = styled(Modal)`
   *  ${Modal.components.Footer} {
   *    background-color: pink;
   * }
   * `
   * */
  components: typeof components;
} = ({ open: isOpenExternal, onClose: onCloseExternal, ...rest }) => {
  const isControlled = isBoolean(isOpenExternal);
  const [isOpenInternal, setIsOpenInternal] = useState(true);

  const onClose = () => {
    setIsOpenInternal(false);

    if (onCloseExternal) {
      onCloseExternal();
    }
  };

  const shouldRender = isControlled ? isOpenExternal : isOpenInternal;

  return shouldRender ? (
    <Portal>
      <ModalInner {...rest} onClose={onClose} />
    </Portal>
  ) : null;
};

Modal.components = components;

Modal.displayName = 'Modal';
