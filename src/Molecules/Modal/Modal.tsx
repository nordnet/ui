import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Color from 'color';
import { Props, DialogProps } from './Modal.types';
import NormalizedElements from '../../common/NormalizedElements';
import { Flexbox, Typography, Icon, Box } from '../..';

const Backdrop = styled.div`
  ${({ theme }) => theme.media.greaterThan(theme.breakpoints.sm)} {
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
  }
`;

const Dialog = styled.div<DialogProps>`
  box-sizing: border-box;
  padding: ${({ theme }) => theme.spacing.unit(5)}px;
  border: 0;
  background: ${({ theme }) => theme.color.card};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;

  ${({ theme }) => theme.media.lessThan(theme.breakpoints.sm)} {
    width: 100%;
    height: 100%;
  }

  ${({ theme }) => theme.media.greaterThan(theme.breakpoints.sm)} {
    width: ${({ theme }) => theme.spacing.unit(120)}px;
    top: 50%;
    left: 50%;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.03);
    transform: translate(-50%, 0%);
    opacity: 0;
    transition: transform 0.3s ease-in, opacity 0.3s ease-in;
    ${({ show }) =>
      show
        ? `
      transform: translate(-50%, -50%);
      opacity: 1;
    `
        : ''}
  }
`;

const Button = styled(NormalizedElements.Button)`
  background: none;
  padding: 0;
  border: 0;
  cursor: pointer;
  display: flex;
`;

const RightAlignedFlex = styled(Flexbox)`
  margin-left: auto;
`;

const Content = styled.div`
  max-height: 50vh;
  overflow-y: auto;
`;

export const Modal: React.FC<Props> = ({ children, className, title, open, onClose }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(open);
  }, [open]);

  const closeHandler = () => {
    if (onClose) {
      onClose();
    }
  };

  if (!open) {
    return null;
  }

  return (
    <>
      <Dialog className={className} aria-labelledby="dialogTitle" role="dialog" show={show}>
        <Box mb={2}>
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
        <Content>{children}</Content>
      </Dialog>
      <Backdrop />
    </>
  );
};

Modal.displayName = 'Modal';
