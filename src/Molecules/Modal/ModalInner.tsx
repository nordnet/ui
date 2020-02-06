import React, { useEffect, useState } from 'react';
import { useUIDSeed } from 'react-uid';
import { RemoveScroll } from 'react-remove-scroll';
import FocusLock from 'react-focus-lock';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { DialogProps, Props } from './Modal.types';
import NormalizedElements from '../../common/NormalizedElements';
import { isFunction } from '../../common/utils';
import { Title } from './Title';
import { Flexbox, Icon, useKeyPress } from '../..';

const PADDING_DESKTOP = 10;
const PADDING_MOBILE = 5;
const CLOSE_ICON_SIZE = 5;

export const Backdrop = styled(Flexbox)`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: ${({ theme }) => theme.zIndex.modal};

  ${({ theme }) => theme.media.greaterThan(theme.breakpoints.sm)} {
    background-color: ${({ theme }) => theme.color.modalBackdrop};
  }
`;

const Dialog = styled(motion.div)<DialogProps>`
  box-sizing: border-box;
  padding: ${({ theme }) => theme.spacing.unit(PADDING_MOBILE)}px;
  border: 0;
  background: ${({ theme }) => theme.color.card};
  position: relative;
  display: flex;
  flex-direction: column;
  max-height: 100vh;

  ${({ theme }) => theme.media.lessThan(theme.breakpoints.sm)} {
    width: 100%;
    height: 100%;
    transform: none !important; /* disables the appear animation */
  }

  ${({ theme }) => theme.media.greaterThan(theme.breakpoints.sm)} {
    padding: ${({ theme }) => theme.spacing.unit(PADDING_DESKTOP)}px;
    width: ${({ theme }) => theme.spacing.unit(120)}px;
    max-height: 65vh;
    box-shadow: 0 2px 2px 0 ${({ theme }) => theme.color.shadowModal};
  }
`;

const CloseButton = styled(NormalizedElements.Button)`
  display: block;
  background: none;
  padding: 0;
  border: 0;
  cursor: pointer;
  position: absolute;
  transform: translateY(3px); /* to align with header */
  top: ${p => p.theme.spacing.unit(PADDING_MOBILE)}px;
  right: ${p => p.theme.spacing.unit(PADDING_MOBILE)}px;

  ${({ theme }) => theme.media.greaterThan(theme.breakpoints.sm)} {
    top: ${p => p.theme.spacing.unit(PADDING_DESKTOP)}px;
    right: ${p => p.theme.spacing.unit(PADDING_DESKTOP)}px;
  }
`;

export const Header = styled.div`
  padding-bottom: ${p => p.theme.spacing.unit(4)}px;
  padding-right: ${p => p.theme.spacing.unit(CLOSE_ICON_SIZE + 2)}px;
  min-height: ${p => p.theme.spacing.unit(CLOSE_ICON_SIZE)}px;
  flex: 0 0 auto;
`;

export const Footer = styled.div`
  padding-top: ${p => p.theme.spacing.unit(4)}px;
  flex: 0 0 auto;
`;

export const ModalInner: React.FC<Props> = ({
  autoFocus = false,
  children,
  className,
  title,
  onClose,
  footer,
  hideClose = false,
}) => {
  const [show, setShow] = useState(false);
  const escapePress = useKeyPress('Escape');
  const animationProps = {
    initial: {
      opacity: 0,
      y: 70,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
    transition: {
      type: 'spring',
      damping: 15,
      stiffness: 200,
    },
  };
  const seed = useUIDSeed();
  const titleId = seed('ModalTitle');
  const hasHeader = hideClose || title;

  useEffect(() => {
    setShow(true); // Show is only used for animation

    return () => {
      setShow(false);
    };
  }, []);

  if (escapePress && isFunction(onClose)) {
    onClose();
  }

  return (
    <>
      <FocusLock autoFocus={autoFocus}>
        <RemoveScroll>
          <Backdrop container alignItems="center" justifyContent="center">
            <Dialog
              aria-labelledby={titleId}
              className={className}
              show={show}
              role="dialog"
              {...animationProps}
            >
              {hasHeader && <Header>{title && <Title title={title} uid={titleId} />}</Header>}
              {children}
              {footer && <Footer>{footer}</Footer>}
              {!hideClose && (
                <CloseButton type="button" onClick={onClose}>
                  <Icon.CrossThin size={5} title="Close this dialog" />
                </CloseButton>
              )}
            </Dialog>
          </Backdrop>
        </RemoveScroll>
      </FocusLock>
    </>
  );
};

ModalInner.displayName = 'ModalInner';
