import styled from 'styled-components';
import { Flag } from '../../../..';

import { BadgeSize } from './NestedBadge.types';

const NESTEDBADGE_HEIGHT = {
  m: 28,
  l: 32,
  xl: 40,
};

const NESTEDBADGE_WIDTH = {
  m: 26,
  l: 28,
  xl: 36,
};

export const StyledNestedBadge = styled.div<{ $badgeSize: BadgeSize }>`
  position: relative;
  height: ${(p) => NESTEDBADGE_HEIGHT[p.$badgeSize]}px;
  width: ${(p) => NESTEDBADGE_WIDTH[p.$badgeSize]}px;
`;

const IMAGE_SIZE = {
  m: 24,
  l: 24,
  xl: 32,
};

const IMAGE_MARGIN = {
  m: 2,
  l: 4,
  xl: 4,
};

const MASK_POSITION = {
  m: 6,
  l: 4,
  xl: 4,
};

const MASK_SIZE_PERCENT = {
  m: [34, 36],
  l: [31, 32],
  xl: [22, 23],
};

export const StyledImg = styled.img<{ $badgeSize: BadgeSize; $showFlag: boolean }>`
  border-radius: 50%;
  height: ${(p) => IMAGE_SIZE[p.$badgeSize]}px;
  width: ${(p) => IMAGE_SIZE[p.$badgeSize]}px;
  margin: ${(p) => IMAGE_MARGIN[p.$badgeSize]}px 0;
  outline: 1px solid ${(p) => p.theme.colorTokens.neutral.border_brand};
  outline-offset: -1px;
  ${(p) =>
    p.$showFlag
      ? `
  mask-image: radial-gradient(
    circle at calc(100% - ${MASK_POSITION[p.$badgeSize]}px) calc(100% - ${
      MASK_POSITION[p.$badgeSize]
    }px),
    transparent ${MASK_SIZE_PERCENT[p.$badgeSize][0]}%,
    black ${MASK_SIZE_PERCENT[p.$badgeSize][1]}%
  )`
      : ''};
`;

export const StyledFallback = styled.div<{ $badgeSize: BadgeSize; $showFlag: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(p) => p.theme.colorTokens.neutral.background_disabled};
  border-radius: 50%;
  height: ${(p) => IMAGE_SIZE[p.$badgeSize]}px;
  width: ${(p) => IMAGE_SIZE[p.$badgeSize]}px;
  position: absolute;
  margin: ${(p) => IMAGE_MARGIN[p.$badgeSize]}px 0;
  ${(p) =>
    p.$showFlag
      ? `
  mask-image: radial-gradient(
    circle at calc(100% - ${MASK_POSITION[p.$badgeSize]}px) calc(100% - ${
      MASK_POSITION[p.$badgeSize]
    }px),
    transparent ${MASK_SIZE_PERCENT[p.$badgeSize][0]}%,
    black ${MASK_SIZE_PERCENT[p.$badgeSize][1]}%
  )`
      : ''};

  span {
    line-height: unset;
  }
`;

const FLAG_LEFT = {
  m: 10,
  l: 12,
  xl: 20,
};

const FLAG_TOP = {
  m: 12,
  l: 16,
  xl: 24,
};

// With border-radius 50% there is a slight rendering issue showing a sliver of border...
export const StyledFlag = styled(Flag)<{ $badgeSize: BadgeSize }>`
  position: absolute;
  left: ${(p) => FLAG_LEFT[p.$badgeSize]}px;
  top: ${(p) => FLAG_TOP[p.$badgeSize]}px;
  height: 16px;
  width: 16px;
  border-radius: 49%;
  mask-image: radial-gradient(circle at 8px, white 56%, transparent 60%);
`;
