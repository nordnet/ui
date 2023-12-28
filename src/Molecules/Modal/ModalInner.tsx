import React, { useEffect, useRef, useState } from 'react';
import { useUIDSeed } from 'react-uid';
import { RemoveScroll } from 'react-remove-scroll';
import FocusLock from 'react-focus-lock';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { BackdropProps, BackdropWrapperProps, DialogProps, Props } from './Modal.types';
import { isFunction } from '../../common/utils';
import { Title } from './Title';
import { Box, Flexbox, OldIcon, ProgressIndicator, Typography, useKeyPress, useMedia } from '../..';

const PADDING_DESKTOP = 10;
const PADDING_PROGRESS_INDICATOR = 14;
const PADDING_PROGRESS_INDICATOR_MOBILE = 10;
const PADDING_MOBILE = 3;
const PADDING_TOP_MOBILE = 4;
const PADDING_TOP_MOBILE_FULLSCREEN = 5;
const PADDING_BOTTOM_MOBILE_FULLSCREEN = 5;
const CLOSE_ICON_SIZE = 5;

export const FixedDrop = styled(Flexbox)`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: ${({ theme }) => theme.zIndex.modal};
`;

export const Backdrop = styled(Flexbox)<BackdropProps>`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: ${({ theme }) => theme.zIndex.modal};

  ${(p) =>
    p.$fullScreenMobile
      ? `${p.theme.media.greaterThan(p.theme.breakpoints.sm)} {
        background-color: ${p.theme.color.modalBackdrop};
      }`
      : `background-color: ${p.theme.color.modalBackdrop};`}

  ${(p) =>
    p.$blur &&
    // The reason for the !important is to override $fullScreenMobile the background color
    'backdrop-filter: blur(15px); background-color: rgba(0, 0, 0, 0.6) !important;'}
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
  max-width: 100%;
  width: 100%;
  border-radius: ${({ theme }) => theme.borderRadius8};

  ${({ theme }) => theme.media.lessThan(theme.breakpoints.sm)} {
    ${(p) =>
      p.$fullScreenMobile
        ? `
          width: 100%;
          height: 100%;
          transform: none !important; /* disables the appear animation */
          padding-top: ${p.theme.spacing.unit(PADDING_TOP_MOBILE_FULLSCREEN)}px;
          padding-bottom: ${p.theme.spacing.unit(PADDING_BOTTOM_MOBILE_FULLSCREEN)}px;
          border-radius: 0px;
        `
        : `margin: ${p.theme.spacing.unit(2)}px;
           padding-top: ${p.theme.spacing.unit(PADDING_TOP_MOBILE)}px;
        `}
    ${(p) =>
      p.$fixedBottomMobile
        ? `
          bottom: 0;
          position: fixed;
          margin: 0;
          transform: none !important; /* disables the appear animation */
          padding-top: ${p.theme.spacing.unit(PADDING_TOP_MOBILE_FULLSCREEN)}px;
          padding-bottom: ${p.theme.spacing.unit(PADDING_BOTTOM_MOBILE_FULLSCREEN)}px;
          border-radius:  ${p.theme.borderRadius20} ${p.theme.borderRadius20} 0 0;
        `
        : ''}
  }

  ${({ theme }) => theme.media.greaterThan(theme.breakpoints.sm)} {
    padding: ${({ theme }) => theme.spacing.unit(PADDING_DESKTOP)}px;
    width: ${({ theme }) => theme.spacing.unit(100)}px;
    overflow: auto;
    max-height: 65vh;
    box-shadow: 0 2px 2px 0 ${({ theme }) => theme.color.shadowModal};
  }

  ${({ theme, $isStatusModal }) =>
    !$isStatusModal &&
    `${theme.media.greaterThan(theme.breakpoints.md)} {
        width: ${theme.spacing.unit(135)}px;
      }`}

  ${({ theme, $isStatusModal }) =>
    $isStatusModal &&
    `${theme.media.greaterThan(theme.breakpoints.lg)} {
        width: ${theme.spacing.unit(170)}px;
      }`}
`;

const CloseButton = styled.button<{$fullScreenMobile: boolean; $hasProgressIndicator?: boolean;}>`
  display: block;
  background: none;
  padding: 0;
  border: 0;
  cursor: pointer;
  position: absolute;
  transform: translateY(3px); /* to align with header */
  top: ${(p) =>
    p.$fullScreenMobile
      ? p.theme.spacing.unit(PADDING_TOP_MOBILE_FULLSCREEN)
      : p.theme.spacing.unit(PADDING_MOBILE)}px;
  right: ${(p) => p.theme.spacing.unit(PADDING_MOBILE)}px;

  ${({ theme }) => theme.media.greaterThan(theme.breakpoints.sm)} {
    top: ${(p) =>
      p.$hasProgressIndicator
        ? `${p.theme.spacing.unit(PADDING_PROGRESS_INDICATOR)}px`
        : `${p.theme.spacing.unit(PADDING_DESKTOP)}px`};
    right: ${(p) => p.theme.spacing.unit(PADDING_DESKTOP)}px;
  }
  ${(p) =>
    p.$hasProgressIndicator
      ? `top: ${p.theme.spacing.unit(PADDING_PROGRESS_INDICATOR_MOBILE)}px;`
      : `top:${p.theme.spacing.unit(PADDING_MOBILE)}px;`}
`;

export const Header = styled.div<{ $flexTitle?: boolean }>`
  padding-bottom: ${(p) => p.theme.spacing.unit(4)}px;
  padding-right: ${(p) => p.theme.spacing.unit(CLOSE_ICON_SIZE + 2)}px;
  min-height: ${(p) => p.theme.spacing.unit(CLOSE_ICON_SIZE)}px;
`;

export const Footer = styled.div`
  margin-top: auto;
  padding-top: ${(p) => p.theme.spacing.unit(4)}px;
  flex: 0 0 auto;
`;

export const StyledProgressIndicator = styled.div`
  > div {
    position: relative;
    width: 100%;
    top: 0;
    padding: 0;
    margin-bottom: ${(p) => p.theme.spacing.unit(1)}px;

    > div > div > div {
      margin: 0;
    }
  }
`;

export const StyledBoxTitle = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const noop = () => {};

const BackdropWrapper: React.FC<BackdropWrapperProps> = ({
  children,
  showBackdrop,
  backdropRef,
  onClick,
  $fullScreenMobile,
  blurBackdrop,
}) =>
  showBackdrop ? (
    <Backdrop
      container
      alignItems="center"
      justifyContent="center"
      ref={backdropRef}
      onClick={onClick}
      $fullScreenMobile={$fullScreenMobile}
      $blur={blurBackdrop}
    >
      {children}
    </Backdrop>
  ) : (
    <FixedDrop container alignItems="center" justifyContent="center">
      {children}
    </FixedDrop>
  );

export const ModalInner: React.FC<Props> = ({
  autoFocus = false,
  children,
  className,
  closeTitle = 'Close this modal',
  title,
  onClose,
  progressIndicator,
  progressIndicatorDescription,
  footer,
  hideClose = false,
  closeOnBackdropClick = false,
  closeOnEscapePress = true,
  fullScreenMobile = true,
  fixedBottomMobile = false,
  isStatusModal = false,
  showBackdrop = true,
  onAnimationComplete,
  blurBackdrop,
}) => {
  const [show, setShow] = useState(false);
  const escapePress = useKeyPress('Escape');
  const isMobile = useMedia((t) => t.media.lessThan(t.breakpoints.sm));
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

  useEffect(() => {
    if (closeOnEscapePress && escapePress && isFunction(onClose)) {
      onClose();
    }
  }, [closeOnEscapePress, escapePress, onClose]);

  return (
    <>
      <FocusLock autoFocus={autoFocus}>
        <RemoveScroll>
          <BackdropWrapper
            showBackdrop={showBackdrop}
            onClick={handleBackdropClick}
            backdropRef={backdropRef}
            $fullScreenMobile={fullScreenMobile}
            blurBackdrop={blurBackdrop}
          >
            <Dialog
              onAnimationComplete={onAnimationComplete || noop}
              aria-labelledby={titleId}
              className={className}
              role="dialog"
              {...animationProps}
              ref={dialogRef}
              onClick={handleDialogClick}
              $show={show}
              $fullScreenMobile={fullScreenMobile}
              $fixedBottomMobile={fixedBottomMobile}
              $isStatusModal={isStatusModal}
            >
              {progressIndicator && (
                <StyledProgressIndicator>
                  <ProgressIndicator {...progressIndicator} />
                </StyledProgressIndicator>
              )}

              {hasHeader && (
                <Header $flexTitle={progressIndicatorDescription !== undefined}>
                  {title && progressIndicatorDescription ? (
                    <StyledBoxTitle>
                      <Typography
                        type="secondary"
                        weight="bold"
                        color={(t) => t.colorTokens.neutral.text_weak}
                      >
                        {progressIndicatorDescription}
                      </Typography>
                      <Typography
                        type={isMobile ? 'primary' : 'title2'}
                        weight="extrabold"
                        color={(t) => t.colorTokens.neutral.text_default}
                      >
                        {title}
                      </Typography>
                    </StyledBoxTitle>
                  ) : (
                    <Title title={title} uid={titleId} />
                  )}
                </Header>
              )}
              {children}
              {footer && <Footer>{footer}</Footer>}
              {!hideClose && (
                <CloseButton
                  type="button"
                  onClick={onClose}
                  $fullScreenMobile={fullScreenMobile}
                  $hasProgressIndicator={Boolean(progressIndicator)}
                >
                  <OldIcon.CrossThin size={5} title={closeTitle} stroke={(t) => t.color.text} />
                </CloseButton>
              )}
            </Dialog>
          </BackdropWrapper>
        </RemoveScroll>
      </FocusLock>
    </>
  );
};

ModalInner.displayName = 'ModalInner';
