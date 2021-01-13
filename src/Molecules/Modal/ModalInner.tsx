import React, { useEffect, useState, useRef } from 'react';
import { useUIDSeed } from 'react-uid';
import { RemoveScroll } from 'react-remove-scroll';
import FocusLock from 'react-focus-lock';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { DialogProps, BackdropProps, Props } from './Modal.types';
import NormalizedElements from '../../common/NormalizedElements';
import { isFunction } from '../../common/utils';
import { Title } from './Title';
import { Flexbox, Icon, useKeyPress } from '../..';

const PADDING_DESKTOP = 10;
const PADDING_MOBILE = 3;
const PADDING_TOP_MOBILE = 4;
const PADDING_TOP_MOBILE_FULLSCREEN = 5;
const PADDING_BOTTOM_MOBILE_FULLSCREEN = 5;
const CLOSE_ICON_SIZE = 5;

export const Backdrop = styled(Flexbox)<BackdropProps>`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: ${({ theme }) => theme.zIndex.modal};

  ${(p) =>
    p.fullScreenMobile
      ? `${p.theme.media.greaterThan(p.theme.breakpoints.sm)} {
        background-color: ${p.theme.color.modalBackdrop};
      }`
      : `background-color: ${p.theme.color.modalBackdrop};`}
`;

const Dialog = styled(motion.div).withConfig({
  shouldForwardProp: (prop) => !['isStatusModal'].includes(prop),
})<DialogProps>`
  box-sizing: border-box;
  padding: ${({ theme }) => theme.spacing.unit(PADDING_MOBILE)}px;
  border: 0;
  background: ${({ theme }) => theme.color.card};
  position: relative;
  display: flex;
  flex-direction: column;
  max-height: 100vh;
  max-width: 100%;
  width: 100%;

  ${({ theme }) => theme.media.lessThan(theme.breakpoints.sm)} {
    ${(p) =>
      p.fullScreenMobile
        ? `
          width: 100%;
          height: 100%;
          transform: none !important; /* disables the appear animation */
          padding-top: ${p.theme.spacing.unit(PADDING_TOP_MOBILE_FULLSCREEN)}px;
          padding-bottom: ${p.theme.spacing.unit(PADDING_BOTTOM_MOBILE_FULLSCREEN)}px;
        `
        : `margin: ${p.theme.spacing.unit(2)}px;
           padding-top: ${p.theme.spacing.unit(PADDING_TOP_MOBILE)}px;
        `}
  }

  ${({ theme }) => theme.media.greaterThan(theme.breakpoints.sm)} {
    padding: ${({ theme }) => theme.spacing.unit(PADDING_DESKTOP)}px;
    width: ${({ theme }) => theme.spacing.unit(100)}px;
    overflow: auto;
    max-height: 65vh;
    box-shadow: 0 2px 2px 0 ${({ theme }) => theme.color.shadowModal};
  }

  ${({ theme, isStatusModal }) =>
    !isStatusModal &&
    `${theme.media.greaterThan(theme.breakpoints.md)} {
        width: ${theme.spacing.unit(135)}px;
      }`}

  ${({ theme, isStatusModal }) =>
    !isStatusModal &&
    `${theme.media.greaterThan(theme.breakpoints.lg)} {
        width: ${theme.spacing.unit(170)}px;
      }`}
`;

const CloseButton = styled(NormalizedElements.Button)`
  display: block;
  background: none;
  padding: 0;
  border: 0;
  cursor: pointer;
  position: absolute;
  transform: translateY(3px); /* to align with header */
  top: ${(p) =>
    p.fullScreenMobile
      ? p.theme.spacing.unit(PADDING_TOP_MOBILE_FULLSCREEN)
      : p.theme.spacing.unit(PADDING_MOBILE)}px;
  right: ${(p) => p.theme.spacing.unit(PADDING_MOBILE)}px;

  ${({ theme }) => theme.media.greaterThan(theme.breakpoints.sm)} {
    top: ${(p) => p.theme.spacing.unit(PADDING_DESKTOP)}px;
    right: ${(p) => p.theme.spacing.unit(PADDING_DESKTOP)}px;
  }
`;

export const Header = styled.div`
  padding-bottom: ${(p) => p.theme.spacing.unit(4)}px;
  padding-right: ${(p) => p.theme.spacing.unit(CLOSE_ICON_SIZE + 2)}px;
  min-height: ${(p) => p.theme.spacing.unit(CLOSE_ICON_SIZE)}px;
  flex: 0 0 auto;
`;

export const Footer = styled.div`
  margin-top: auto;
  padding-top: ${(p) => p.theme.spacing.unit(4)}px;
  flex: 0 0 auto;
`;

const noop = () => {};

export const ModalInner: React.FC<Props> = ({
  autoFocus = false,
  children,
  className,
  closeTitle = 'Close this modal',
  title,
  onClose,
  footer,
  hideClose = false,
  closeOnBackdropClick = false,
  fullScreenMobile = true,
  isStatusModal = false,
  onAnimationComplete,
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
  const hasHeader = !hideClose || title;
  const backdropRef = useRef<HTMLDivElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  const handleBackdropClick = (e: React.ChangeEvent<HTMLElement>) => {
    if (
      backdropRef.current &&
      backdropRef.current.contains(e.target) &&
      closeOnBackdropClick &&
      isFunction(onClose)
    ) {
      onClose();
    }
  };

  const handleDialogClick = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
  };

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
          <Backdrop
            container
            alignItems="center"
            justifyContent="center"
            ref={backdropRef}
            onClick={handleBackdropClick}
            fullScreenMobile={fullScreenMobile}
          >
            <Dialog
              onAnimationComplete={onAnimationComplete || noop}
              aria-labelledby={titleId}
              className={className}
              show={show}
              role="dialog"
              {...animationProps}
              ref={dialogRef}
              onClick={handleDialogClick}
              fullScreenMobile={fullScreenMobile}
              isStatusModal={isStatusModal}
            >
              {hasHeader && <Header>{title && <Title title={title} uid={titleId} />}</Header>}
              {children}
              {footer && <Footer>{footer}</Footer>}
              {!hideClose && (
                <CloseButton type="button" onClick={onClose} fullScreenMobile={fullScreenMobile}>
                  <Icon.CrossThin size={5} title={closeTitle} stroke={(t) => t.color.text} />
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
