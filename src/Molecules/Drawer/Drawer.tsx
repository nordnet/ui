import React, { useState, useEffect, useCallback } from 'react';
import { useUIDSeed } from 'react-uid';
import styled from 'styled-components';
import FocusLock from 'react-focus-lock';
import { RemoveScroll } from 'react-remove-scroll';
import { motion, useDragControls, AnimatePresence, PanInfo } from 'framer-motion';
import { Props, TitleProps } from './Drawer.types';
import { isBoolean, isElement } from '../../common/utils';
import { Typography, Icon, useKeyPress, Portal, useMedia, Button } from '../..';

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
  padding-left: ${p => p.theme.spacing.unit(2)}px;
  margin-left: auto;
`;

const Content = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  margin-bottom: ${p => p.theme.spacing.unit(PADDING)}px;
  padding: 0 ${p => p.theme.spacing.unit(PADDING)}px;
`;

const TitleWrapper = styled.div`
  padding: ${p =>
    `${p.theme.spacing.unit(PADDING)}px ${p.theme.spacing.unit(PADDING)}px 0 ${p.theme.spacing.unit(
      PADDING,
    )}px`};
  margin-bottom: ${p => p.theme.spacing.unit(2)}px;
  display: flex;
  flex: 0 0 auto;
  align-items: baseline;
`;

const animationProps = {
  animate: {
    opacity: 1,
    x: 0,
  },
  transition: {
    ease: 'easeInOut',
    duration: 0.2,
  },
};

// Todo: handle rollback if small offset
const shouldCloseBecauseOfDrag = (info: PanInfo) =>
  Math.abs(info.offset.x) > 0 || Math.abs(info.velocity.x) > 300;

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
        <Typography as="h2" type="title2">
          {title}
        </Typography>
      )}
    </span>
  );
};

const useDifferentAnimationBasedOnSwipeDirection = () => {
  const [swipeDirection, setSwipeDirection] = React.useState('right');
  const exitAnimation = React.useMemo(
    () => ({
      opacity: 0,
      x: swipeDirection === 'right' ? 700 : -700,
    }),
    [swipeDirection],
  );
  const initialAnimation = React.useMemo(
    () => ({
      opacity: 0,
      x: swipeDirection === 'right' ? 70 : -70,
    }),
    [swipeDirection],
  );
  return {
    setSwipeDirection,
    exitAnimation,
    initialAnimation,
  };
};

export const Drawer = (React.forwardRef<HTMLDivElement, Props>(
  ({ as, className, children, disableContentStyle, onClose, open: isOpenExternal, title }, ref) => {
    const isControlled = isBoolean(isOpenExternal);
    const escapePress = useKeyPress('Escape');
    const [isOpenInternal, setIsOpenInternal] = useState(true);
    const isOpen = isControlled ? isOpenExternal : isOpenInternal;
    const isDesktop = useMedia(t => t.media.greaterThan(t.breakpoints.sm)) || false;
    const seed = useUIDSeed();
    const uid = seed(displayName);
    const dragControls = useDragControls();

    const {
      setSwipeDirection,
      exitAnimation,
      initialAnimation,
    } = useDifferentAnimationBasedOnSwipeDirection();

    const startDrag = useCallback(
      event => {
        dragControls.start(event, {
          snapToCursor: false,
        });
      },
      [dragControls],
    );

    const handleCloseClick = useCallback(() => {
      setIsOpenInternal(false);

      if (onClose) {
        onClose();
      }
    }, [onClose]);

    const handleDragEnd = useCallback(
      (_, info) => {
        if (info.offset.x < 0) {
          setSwipeDirection('left');
        } else {
          setSwipeDirection('right');
        }
        if (shouldCloseBecauseOfDrag(info)) {
          handleCloseClick();
        } else {
          // Todo: handle small offsets -> rollback
        }
      },
      [handleCloseClick, setSwipeDirection],
    );

    useEffect(() => {
      if (isOpen && escapePress) {
        handleCloseClick();
      }
    }, [escapePress, handleCloseClick, isOpen]);

    return (
      <AnimatePresence>
        {isOpen ? (
          <Portal>
            <FocusLock disabled={isDesktop}>
              <RemoveScroll enabled={!isDesktop}>
                <Container
                  as={as}
                  className={className}
                  aria-labelledby={uid}
                  {...animationProps}
                  initial={initialAnimation}
                  exit={exitAnimation}
                  ref={ref}
                  dragControls={dragControls}
                  dragListener={false}
                  drag="x"
                  onDragEnd={handleDragEnd}
                >
                  <TitleWrapper onTouchStart={startDrag}>
                    {title && <Title title={title} uid={uid} />}
                    <CloseButton type="button" variant="neutral" onClick={handleCloseClick}>
                      <Icon.CrossMedium size={4} title="Close this drawer" />
                    </CloseButton>
                  </TitleWrapper>
                  {disableContentStyle ? children : <Content>{children}</Content>}
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
