import styled from 'styled-components';
import { motion } from 'framer-motion';

import { Button } from '../..';

const CROSS_SIZE = 5;
const PADDING_MOBILE = 3;
const PADDING_Y = 4;
const PADDING_X = 5;

export const Container = styled(motion.div)`
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

export const CloseButton = styled(Button.Icon)`
  position: absolute;
  top: ${(p) => p.theme.spacing.unit(PADDING_Y)}px;
  right: ${(p) => p.theme.spacing.unit(PADDING_X)}px;

  ${(p) => p.theme.media.lessThan(p.theme.breakpoints.sm)} {
    top: ${(p) => p.theme.spacing.unit(PADDING_MOBILE)}px;
    right: ${(p) => p.theme.spacing.unit(PADDING_MOBILE)}px;
  }
`;

export const Content = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  margin-bottom: ${(p) => p.theme.spacing.unit(PADDING_Y)}px;
  padding: 1px ${(p) => p.theme.spacing.unit(PADDING_X)}px;
  ${(p) => p.theme.media.lessThan(p.theme.breakpoints.sm)} {
    padding: 1px ${(p) => p.theme.spacing.unit(PADDING_MOBILE)}px 1px 0;
  }
`;

export const DragArea = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 8px;
  z-index: 2;
  ${(p) => p.theme.media.greaterThan(p.theme.breakpoints.sm)} {
    display: none;
  }
`;

export const Footer = styled.div`
  margin-top: auto;
  padding: 0 ${(p) => p.theme.spacing.unit(PADDING_X)}px ${(p) => p.theme.spacing.unit(PADDING_Y)}px
    ${(p) => p.theme.spacing.unit(PADDING_X)}px;

  ${(p) => p.theme.media.lessThan(p.theme.breakpoints.sm)} {
    padding: 0 ${(p) => p.theme.spacing.unit(PADDING_MOBILE)}px
      ${(p) => p.theme.spacing.unit(PADDING_MOBILE)}px
      ${(p) => p.theme.spacing.unit(PADDING_MOBILE)}px;
  }
`;

export const H2 = styled.h2`
  padding-right: ${(p) => p.theme.spacing.unit(4)}px;
`;

export const TitleWrapper = styled.div`
  padding: ${(p) =>
    `${p.theme.spacing.unit(PADDING_Y)}px 
     ${p.theme.spacing.unit(PADDING_X)}px 
     0 
     ${p.theme.spacing.unit(PADDING_X)}px`};

  ${(p) => p.theme.media.lessThan(p.theme.breakpoints.sm)} {
    padding: ${(p) =>
      `${p.theme.spacing.unit(PADDING_MOBILE)}px ${p.theme.spacing.unit(
        PADDING_MOBILE,
      )}px 0 ${p.theme.spacing.unit(PADDING_MOBILE)}px`};
  }

  margin-bottom: ${(p) => p.theme.spacing.unit(2)}px;
  min-height: ${(p) => p.theme.spacing.unit(CROSS_SIZE)}px;
  flex: 0 0 auto;
`;
