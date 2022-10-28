import React from 'react';
import FocusLock from 'react-focus-lock';
import { RemoveScroll } from 'react-remove-scroll';
import styled from 'styled-components';

import Button from '../Button';
import Portal from '../../Atoms/Portal';
import Flexbox from '../../Atoms/Flexbox';
import { useMedia } from '../../Atoms/Media';
import Box from '../../Atoms/Box';
import Typography from '../../Atoms/Typography';

const Dialog = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.color.actionModalBackground};
  padding: ${({ theme }) => theme.spacing.unit(10)}px;
  color: ${({ theme }) => theme.color.textLight};
  ${({ theme }) => theme.media.lessThan(theme.breakpoints.md)} {
    padding: ${({ theme }) => theme.spacing.unit(5)}px;
  }

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

const StyledFlexbox = styled(Flexbox)`
  margin: auto;
  position: fixed;
  left: 0;
  right: 0;
  bottom: ${({ theme }) => theme.spacing.unit(10)}px;
  ${({ theme }) => theme.media.lessThan(theme.breakpoints.md)} {
    bottom: ${({ theme }) => theme.spacing.unit(5)}px;
  }

  ${(p) => p.theme.media.greaterThan(p.theme.breakpoints.sm)} {
    width: 720px;
  }
  ${(p) => p.theme.media.greaterThan(p.theme.breakpoints.md)} {
    width: 936px;
  }
  ${(p) => p.theme.media.greaterThan(p.theme.breakpoints.lg)} {
    width: 1240px;
  }
  ${(p) => p.theme.media.greaterThan(p.theme.breakpoints.xl)} {
    width: 1560px;
  }
`;
export const ActionModal = ({
  autoFocus = false,
  illustration,
  title,
  children,
  onSkipClick,
  onCTAClick,
}: {
  autoFocus: boolean;
  illustration: any;
  title: string;
  children: any;
  onSkipClick: () => void;
  onCTAClick: () => void;
}) => {
  const isSmallerScreen = useMedia((theme) => theme.media.lessThan(theme.breakpoints.md));
  const isMobile = useMedia((theme) => theme.media.lessThan(theme.breakpoints.sm));
  return (
    <Portal>
      <StyledFlexbox container justifyContent={isMobile ? 'center' : 'flex-end'}>
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
                direction={isSmallerScreen ? 'column-reverse' : 'row'}
                justifyContent="space-between"
                gap={3}
              >
                <Button variant="neutral" onClick={onSkipClick}>
                  <Typography color={(t) => t.color.actionModalLink} type="secondary" weight="bold">
                    Skip the tour
                  </Typography>
                </Button>
                <Button variant="primary" onClick={onCTAClick}>
                  Take a tour
                </Button>
              </Flexbox>
            </Dialog>
          </RemoveScroll>
        </FocusLock>
      </StyledFlexbox>
    </Portal>
  );
};
