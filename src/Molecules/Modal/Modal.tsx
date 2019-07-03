import React from 'react';
import styled from 'styled-components';
import Color from 'color';
import { Props } from './Modal.types';
import NormalizedElements from '../../common/NormalizedElements';
import { Flexbox, Typography, Icon, Box } from '../..';

const Container = styled.div``;
const Backdrop = styled.div`
  background-color: ${({ theme }) =>
    Color(theme.color.modalBackdrop)
      .alpha(0.63)
      .rgb()
      .string()};
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`;
const Dialog = styled.div`
  padding: 0;
  border: 0;
  background: ${({ theme }) => theme.color.card};
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.03);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
`;
const Button = styled(NormalizedElements.Button)`
  background: none;
  padding: 0;
  border: 0;
  display: flex;
`;

const RightAlignedFlex = styled(Flexbox)`
  margin-left: auto;
`;

export const Modal: React.FC<Props> = ({ children, className, title, open, onClose }) => {
  const closeHandler = () => {
    if (onClose) {
      onClose();
    }
  };

  return (
    <Container>
      <Dialog className={className} aria-labelledby="dialogTitle" role="dialog" open={open}>
        <Box p={5}>
          <Box pb={2}>
            <Flexbox container alignItems="center">
              {title && (
                <Flexbox item>
                  <Typography as="h2" type="title2">
                    {title}
                  </Typography>
                </Flexbox>
              )}
              <RightAlignedFlex item>
                <Button type="button" aria-label="Close this dialog window" onClick={closeHandler}>
                  <Icon.Cross size={5} title="Close this dialog" />
                </Button>
              </RightAlignedFlex>
            </Flexbox>
          </Box>
          {children}
        </Box>
      </Dialog>
      <Backdrop />
    </Container>
  );
};

Modal.displayName = 'Modal';
