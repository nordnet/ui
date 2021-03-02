import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useUIDSeed } from 'react-uid';
import styled from 'styled-components';
import FocusLock from 'react-focus-lock';
import { RemoveScroll } from 'react-remove-scroll';
import { motion, useDragControls, AnimatePresence } from 'framer-motion';
import { Props, TitleProps } from './Drawer.types';
import { isBoolean, isElement } from '../../common/utils';
import { useOnClickOutside } from '../../common/Hooks';
import { Typography, Icon, useKeyPress, Portal, useMedia, Button } from '../..';

const CROSS_SIZE = 5;
const PADDING = 5;
const displayName = 'Drawer';

const Container = styled(motion.div)`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.color.card};
  position: fixed;
  z-index: ${({ theme }) => theme.zIndex.overlay};
  right: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  box-shadow: 0 -10px 16px 0 ${({ theme }) => theme.color.shadowModal};

  ${({ theme }) => theme.media.greaterThan(theme.breakpoints.sm)} {
    width: ${({ theme }) => theme.spacing.unit(100)}px;
  }

  ${({ theme }) => theme.media.greaterThan(theme.breakpoints.xl)} {
    width: ${({ theme }) => theme.spacing.unit(120)}px;
  }
`;

const CloseButton = styled(Button)`
  position: absolute;
  top: ${(p) => p.theme.spacing.unit(PADDING)}px;
  right: ${(p) => p.theme.spacing.unit(PADDING)}px;
`;

const Content = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  margin-bottom: ${(p) => p.theme.spacing.unit(PADDING)}px;
  padding: 0 ${(p) => p.theme.spacing.unit(PADDING)}px;
`;

const Footer = styled.div`
  margin-top: auto;
  padding: 0 ${(p) => p.theme.spacing.unit(PADDING)}px ${(p) => p.theme.spacing.unit(PADDING)}px
    ${(p) => p.theme.spacing.unit(PADDING)}px;
`;

const H2 = styled.h2`
  padding-right: ${(p) => p.theme.spacing.unit(4)}px;
`;

const TitleWrapper = styled.div`
  padding: ${(p) =>
    `${p.theme.spacing.unit(PADDING)}px ${p.theme.spacing.unit(PADDING)}px 0 ${p.theme.spacing.unit(
      PADDING,
    )}px`};
  margin-bottom: ${(p) => p.theme.spacing.unit(2)}px;
  min-height: ${(p) => p.theme.spacing.unit(CROSS_SIZE)}px;
  flex: 0 0 auto;
`;

const animationProps = {
  initial: {
    opacity: 0,
    x: '100%',
  },
  animate: {
    opacity: 1,
    x: '0%',
  },
  exit: {
    opacity: 0,
    x: '100%',
  },
  transition: {
    ease: 'easeInOut',
    duration: 0.2,
  },
};

const noInitialAnimationProps = {
  initial: {
    opacity: 1,
    x: '0%',
  },
};

const components = {
  CloseButton,
  Container,
  Content,
  TitleWrapper,
};

const Title: React.FC<TitleProps> = ({ title, uid }) => {
  return (
    <span id={uid}>
      {isElement(title) ? (
        title
      ) : (
        <Typography as={H2} type="title2">
          {title}
        </Typography>
      )}
    </span>
  );
};

export const Drawer = (React.forwardRef<HTMLDivElement, Props>(
  (
    {
      as,
      className,
      children,
      closeOnClickOutside = true,
      disableContentStyle,
      footer,
      onClose,
      open: isOpenExternal,
      title,
      onExitAnimationComplete,
      onAnimationComplete,
      disableInitialAnimation,
    },
    ref,
  ) => {
    const isControlled = isBoolean(isOpenExternal);
    const escapePress = useKeyPress('Escape');
    const [isOpenInternal, setIsOpenInternal] = useState(true);
    const isOpen = isControlled ? isOpenExternal : isOpenInternal;
    const internalDrawerRef = useRef<HTMLDivElement>(null);
    const drawerRef = (ref || internalDrawerRef) as React.RefObject<HTMLDivElement>;
    const isDesktop = useMedia((t) => t.media.greaterThan(t.breakpoints.sm)) || false;
    const seed = useUIDSeed();
    const uid = seed(displayName);
    const dragControls = useDragControls();

    const startDrag = useCallback(
      (event) => {
        dragControls.start(event, {
          snapToCursor: false,
        });
      },
      [dragControls],
    );

    const handleClose = useCallback(() => {
      setIsOpenInternal(false);

      if (onClose) {
        onClose();
      }
    }, [onClose]);

    const handleDragEnd = useCallback(() => {
      handleClose();
    }, [handleClose]);

    useOnClickOutside(drawerRef, () => {
      if (closeOnClickOutside) {
        handleClose();
      }
    });

    useEffect(() => {
      if (isOpen && escapePress) {
        handleClose();
      }
    }, [escapePress, handleClose, isOpen]);

    return (
      <AnimatePresence onExitComplete={onExitAnimationComplete}>
        {isOpen ? (
          <Portal>
            <FocusLock disabled={isDesktop}>
              <RemoveScroll enabled={!isDesktop}>
                <Container
                  as={as}
                  className={className}
                  aria-labelledby={uid}
                  {...animationProps}
                  {...(disableInitialAnimation ? noInitialAnimationProps : {})}
                  ref={drawerRef}
                  dragControls={dragControls}
                  dragListener={false}
                  drag="x"
                  onDragEnd={handleDragEnd}
                  onAnimationComplete={onAnimationComplete}
                >
                  <TitleWrapper onTouchStart={startDrag}>
                    {title && <Title title={title} uid={uid} />}
                    <CloseButton type="button" variant="neutral" onClick={handleClose}>
                      <Icon.CrossMedium size={4} title="Close this drawer" />
                    </CloseButton>
                  </TitleWrapper>
                  {disableContentStyle ? children : <Content>{children}</Content>}
                  {footer && <Footer>{footer}</Footer>}
                </Container>
              </RemoveScroll>
            </FocusLock>
          </Portal>
        ) : null}
      </AnimatePresence>
    );
  },
) as any) as React.FC<Props> & {
  components: typeof components;
};

Drawer.components = components;

Drawer.displayName = displayName;
