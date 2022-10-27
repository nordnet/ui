import React from 'react';
import FocusLock from 'react-focus-lock';
import { RemoveScroll } from 'react-remove-scroll';
import styled from 'styled-components';

import Button from '../Button';
import Portal from '../../Atoms/Portal';
import Flexbox from '../../Atoms/Flexbox';
import { useMedia } from '../../Atoms/Media';
import Box from '../../Atoms/Box';

const Dialog = styled.div`
  padding: ${({ theme }) => theme.spacing.unit(14)}px;

  ${({ theme }) => theme.media.greaterThan(theme.breakpoints.md)} {
    width: 400px;
  }
  ${({ theme }) => theme.media.between(theme.breakpoints.sm, theme.breakpoints.md)} {
    width: 350px;
  }
  ${({ theme }) => theme.media.lessThan(theme.breakpoints.sm)} {
    width: 320px;
  }
`;

export const ActionModal = ({
  autoFocus = false,
  illustration,
  title,
  children,
  onSkipClick,
  onCTAClick,
}) => {
  const isMobile = useMedia((theme) => theme.media.lessThan(theme.breakpoints.sm));
  return (
    <Portal>
      <FocusLock autoFocus={autoFocus}>
        <RemoveScroll>
          <Dialog>
            <Flexbox container direction="column" alignItems="center" gap={5}>
              <Flexbox item>{illustration}</Flexbox>
              <Flexbox item>{title}</Flexbox>
            </Flexbox>

            <Box my={3}>{children}</Box>

            <Flexbox
              container
              direction={isMobile ? 'column-reverse' : 'row'}
              justifyContent="space-between"
              gap={3}
            >
              <Button variant="neutral" onClick={onSkipClick}>
                Skip the tour
              </Button>
              <Button variant="primary" onClick={onCTAClick}>
                Take a tour
              </Button>
            </Flexbox>
          </Dialog>
        </RemoveScroll>
      </FocusLock>
    </Portal>
  );
};
