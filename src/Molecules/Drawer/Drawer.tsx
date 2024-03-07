import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useUIDSeed } from 'react-uid';
import FocusLock from 'react-focus-lock';
import { RemoveScroll } from 'react-remove-scroll';
import { AnimatePresence, PanInfo, useDragControls } from 'framer-motion';
import { Props, TitleProps } from './Drawer.types';
import { fromKebabToCamelCase, isBoolean, isElement } from '../../common/utils';
import { useOnClickOutside } from '../../common/Hooks';
import { Icon, Portal, Typography, useKeyPress, useMedia } from '../..';
import {
  CloseButton,
  Container,
  Content,
  DragArea,
  Footer,
  H2,
  TitleWrapper,
} from './Drawer.styles';

const displayName = 'Drawer';
const PREVENT_CLICK_OUTSIDE_ATTRIBUTE = 'drawerPreventClickOutside';

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

export const components = {
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
      (event: any) => {
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

    const handleDragEnd = useCallback(
      (event: TouchEvent, info: PanInfo) => {
        if (info?.offset?.x > 100) {
          handleClose();
        }
      },
      [handleClose],
    );

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
                  dragConstraints={{ right: 0, left: 0 }}
                  onAnimationComplete={onAnimationComplete}
                  {...rest}
                >
                  <TitleWrapper onTouchStart={startDrag}>
                    {title && <Title title={title} uid={uid} />}
                    <CloseButton onClick={handleClose}>
                      <Icon.Cross16 title={closeButtonTitle} />
                    </CloseButton>
                  </TitleWrapper>
                  <DragArea onTouchStart={startDrag} />
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
