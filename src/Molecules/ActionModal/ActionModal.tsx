/* eslint-disable react/require-default-props */
import React, { ReactElement, ReactNode } from 'react';
import styled from 'styled-components';

import Portal from '../../Atoms/Portal';
import Flexbox from '../../Atoms/Flexbox';
import Typography from '../../Atoms/Typography';
import { useMedia } from '../../Atoms/Media';
import Box from '../../Atoms/Box';
import { IllustrationProps } from '../../Atoms/Illustration/IllustrationBase.types';

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
  z-index: 1;
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
  illustration,
  title,
  children,
  cancelButton = null,
  confirmButton,
}: {
  illustration: ReactElement<IllustrationProps>;
  title: string;
  children: any;
  cancelButton?: ReactNode;
  confirmButton: ReactNode;
}) => {
  const isSmallerScreen = useMedia((theme) => theme.media.lessThan(theme.breakpoints.md));
  const isMobile = useMedia((theme) => theme.media.lessThan(theme.breakpoints.sm));
  return (
    <Portal>
      <StyledFlexbox container justifyContent={isMobile ? 'center' : 'flex-end'}>
        <Dialog>
          <Flexbox container direction="column" alignItems="center" gap={5}>
            <Flexbox item>{illustration}</Flexbox>
            <Flexbox item>
              <Typography type="title2" weight="bold" color={(t) => t.color.textLight}>
                {title}
              </Typography>
            </Flexbox>
          </Flexbox>

          <Box my={3}>{children}</Box>

          <Flexbox
            container
            direction={isSmallerScreen ? 'column-reverse' : 'row'}
            justifyContent={cancelButton ? 'space-between' : 'flex-end'}
            gap={3}
          >
            {cancelButton}
            {confirmButton}
          </Flexbox>
        </Dialog>
      </StyledFlexbox>
    </Portal>
  );
};
