import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { DrawerComponent } from './Drawer.types';
import NormalizedElements from '../../common/NormalizedElements/index';
import { isBoolean, isFunction } from '../../common/utils';
import { Flexbox, Typography, Icon, Box, useKeyPress } from '../../index';

const Container = styled(motion.div)`
  box-sizing: border-box;
  padding: ${({ theme }) => theme.spacing.unit(5)}px;
  width: ${({ theme }) => theme.spacing.unit(100)}px;
  height: 100%;
  background: ${({ theme }) => theme.color.card};
  position: absolute;
  z-index: 2;
  right: 0;
  top: 0;
  box-shadow: 0 2px 2px 0 ${({ theme }) => theme.color.shadowModal};
`;

const Button = styled(NormalizedElements.Button)`
  display: flex;
  background: none;
  margin-left: ${p => p.theme.spacing.unit(4)}px;
  padding: 0;
  border: 0;
  cursor: pointer;
`;

const RightAlignedFlex = styled(Flexbox)`
  margin-left: auto;
`;

const Content = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
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

export const Drawer: DrawerComponent & {
  /**
   * This will allow you to customize
   * inner parts with styled-components
   * @example
   * const CustomModal = styled(Modal)`
   *  ${Modal.components.Outer} {
   *    background-color: pink;
   * }
   * `
   * */
  components: typeof components;
} = ({ className, children, onClose, open: isOpenExternal, title }) => {
  const isControlled = isBoolean(isOpenExternal);
  const escapePress = useKeyPress('Escape');
  const [isOpenInternal, setIsOpenInternal] = useState(true);
  const isOpen = isControlled ? isOpenExternal : isOpenInternal;

  const handleCloseClick = () => {
    setIsOpenInternal(false);

    if (onClose) {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen && escapePress && isFunction(onClose)) {
      handleCloseClick();
    }
  }, [escapePress, isOpen, onClose]);

  return isOpen ? (
    <Container
      className={className}
      {...(title ? { 'aria-label': title } : {})} // TODO: move to aria-labeledby when SSR uid works
      {...animationProps}
    >
      <Box mb={2}>
        <Flexbox container alignItems="baseline">
          {title && (
            <Flexbox item>
              <Typography as="h2" type="title2">
                {title}
              </Typography>
            </Flexbox>
          )}
          <RightAlignedFlex item>
            <Button type="button" onClick={handleCloseClick}>
              <Icon.Cross size={5} title="Close this drawer" />
            </Button>
          </RightAlignedFlex>
        </Flexbox>
      </Box>
      <Content>{children}</Content>
    </Container>
  ) : null;
};

Drawer.components = components;

Drawer.displayName = 'Drawer';
