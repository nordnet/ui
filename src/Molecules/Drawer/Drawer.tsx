import React, { useState, useEffect } from 'react';
import { useUIDSeed } from 'react-uid';
import styled from 'styled-components';
import FocusLock from 'react-focus-lock';
import { RemoveScroll } from 'react-remove-scroll';
import { motion } from 'framer-motion';
import { DrawerComponent, TitleProps } from './Drawer.types';
import { isBoolean, isElement } from '../../common/utils';
import {
  Flexbox,
  Typography,
  Icon,
  Box,
  useKeyPress,
  FadedScroll,
  Portal,
  useMedia,
  Button,
} from '../..';

const displayName = 'Drawer';

const Container = styled(motion.div)`
  box-sizing: border-box;
  padding: ${({ theme }) => theme.spacing.unit(5)}px;
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
`;

const CloseButton = styled(Button)`
  margin-left: auto;
`;

const Content = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
`;

const H2 = styled.h2`
  padding-right: ${p => p.theme.spacing.unit(4)}px;
`;

const animationProps = {
  initial: {
    opacity: 0,
    x: 70,
  },
  animate: {
    opacity: 1,
    x: 0,
  },
  transition: {
    type: 'spring',
    damping: 15,
    stiffness: 200,
  },
};

const components = {
  Container,
  Content,
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

export const Drawer: DrawerComponent & {
  components: typeof components;
} = ({ className, children, onClose, open: isOpenExternal, title }) => {
  const isControlled = isBoolean(isOpenExternal);
  const escapePress = useKeyPress('Escape');
  const [isOpenInternal, setIsOpenInternal] = useState(true);
  const isOpen = isControlled ? isOpenExternal : isOpenInternal;
  const isDesktop = useMedia(t => t.media.greaterThan(t.breakpoints.sm)) || false;
  const seed = useUIDSeed();
  const uid = seed(displayName);

  const handleCloseClick = () => {
    setIsOpenInternal(false);

    if (onClose) {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen && escapePress) {
      handleCloseClick();
    }
  }, [escapePress, isOpen]);

  return isOpen ? (
    <Portal>
      <FocusLock disabled={isDesktop}>
        <RemoveScroll enabled={!isDesktop}>
          <Container className={className} aria-labelledby={uid} {...animationProps}>
            <Box mb={2}>
              <Flexbox container alignItems="baseline">
                {title && <Title title={title} uid={uid} />}
                <CloseButton type="button" variant="neutral" onClick={handleCloseClick}>
                  <Icon.CrossThin size={5} title="Close this drawer" />
                </CloseButton>
              </Flexbox>
            </Box>
            <FadedScroll>{children}</FadedScroll>
          </Container>
        </RemoveScroll>
      </FocusLock>
    </Portal>
  ) : null;
};

Drawer.components = components;

Drawer.displayName = displayName;
