import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useUIDSeed } from 'react-uid';
import styled from 'styled-components';
import FocusLock from 'react-focus-lock';
import { RemoveScroll } from 'react-remove-scroll';
import { AnimatePresence, motion, useDragControls } from 'framer-motion';
import { Props, TitleProps } from './Drawer.types';
import { fromKebabToCamelCase, isBoolean, isElement } from '../../common/utils';
import { useOnClickOutside } from '../../common/Hooks';
import { Button, OldIcon, Portal, Typography, useKeyPress, useMedia } from '../..';

const CROSS_SIZE = 5;
const PADDING_MOBILE = 3;
const PADDING = 5;
const displayName = 'Drawer';
const PREVENT_CLICK_OUTSIDE_ATTRIBUTE = 'drawerPreventClickOutside';

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

  padding: 1px ${(p) => p.theme.spacing.unit(PADDING)}px;
  ${(p) => p.theme.media.lessThan(p.theme.breakpoints.sm)} {
    padding: 1px ${(p) => p.theme.spacing.unit(PADDING_MOBILE)}px;
  }
`;

const Footer = styled.div`
  margin-top: auto;
  padding: 0 ${(p) => p.theme.spacing.unit(PADDING)}px ${(p) => p.theme.spacing.unit(PADDING)}px
    ${(p) => p.theme.spacing.unit(PADDING)}px;

  ${(p) => p.theme.media.lessThan(p.theme.breakpoints.sm)} {
    padding: 0 ${(p) => p.theme.spacing.unit(PADDING_MOBILE)}px
      ${(p) => p.theme.spacing.unit(PADDING_MOBILE)}px
      ${(p) => p.theme.spacing.unit(PADDING_MOBILE)}px;
  }
`;

const H2 = styled.h2`
  padding-right: ${(p) => p.theme.spacing.unit(4)}px;
`;

const TitleWrapper = styled.div`
  padding: ${(p) =>
    `${p.theme.spacing.unit(PADDING)}px ${p.theme.spacing.unit(PADDING)}px 0 ${p.theme.spacing.unit(
      PADDING,
    )}px`};

  ${(p) => p.theme.media.lessThan(p.theme.breakpoints.sm)} {
    padding: ${(p) =>
      `${p.theme.spacing.unit(PADDING)}px ${p.theme.spacing.unit(
        PADDING_MOBILE,
      )}px 0 ${p.theme.spacing.unit(PADDING_MOBILE)}px`};
  }

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
  Footer,
  TitleWrapper,
};

const Title: React.FC<TitleProps> = ({ title, uid }) => {
  const isDesktop = useMedia((t) => t.media.greaterThan(t.breakpoints.sm));
  return (
    <span id={uid}>
      {isElement(title) ? (
        title
      ) : (
        <Typography as={H2} type={isDesktop ? 'title3' : 'title1'}>
          {title}
        </Typography>
      )}
    </span>
  );
};

export const Drawer = React.forwardRef<HTMLDivElement, Props>(
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
      closeButtonTitle,
      onExitAnimationComplete,
      onAnimationComplete,
      disableInitialAnimation,
      preventOnClickOutsideDataAttributes,
      ...rest
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

    useOnClickOutside(drawerRef, (e) => {
      if (!closeOnClickOutside) return;

      const preventingDataAttributes = [
        PREVENT_CLICK_OUTSIDE_ATTRIBUTE,
        ...(preventOnClickOutsideDataAttributes || []),
      ];

      // look for data attributes in all elements above the clicked one to see if any prevents click outside
      const preventOnClickOutside =
        e instanceof Event && // e.composedPath() is not available in MouseEvent for some reason
        e.composedPath().some((target) => {
          // avoid click event target being window or document (= no dataset)
          if (!(target instanceof HTMLElement)) return false;

          return preventingDataAttributes.some((dataAttribute) => {
            // remove data-prefix and camelcase attributes to match them to dataset keys
            const formattedDataAttribute = fromKebabToCamelCase(dataAttribute.replace('data-', ''));
            return target.dataset?.[formattedDataAttribute];
          });
        });

      if (!preventOnClickOutside) handleClose();
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
                  {...rest}
                >
                  <TitleWrapper onTouchStart={startDrag}>
                    {title && <Title title={title} uid={uid} />}
                    <CloseButton type="button" variant="neutral" onClick={handleClose}>
                      <OldIcon.CrossMedium size={4} title={closeButtonTitle} />
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
) as any as React.FC<Props> & {
  components: typeof components;
};

Drawer.components = components;

Drawer.displayName = displayName;
