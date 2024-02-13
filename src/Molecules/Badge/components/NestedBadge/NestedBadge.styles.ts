import styled from 'styled-components';
import { Flag } from '../../../..';

import { BadgeSize } from './NestedBadge.types';

export const StyledNestedBadge = styled.div<{ $badgeSize: BadgeSize }>`
  position: relative;
  height: ${(p) => (p.$badgeSize === 'm' ? 28 : 32)}px;
  width: ${(p) => (p.$badgeSize === 'm' ? 26 : 28)}px;
`;

export const StyledImg = styled.img<{ $badgeSize: BadgeSize }>`
  border-radius: 50%;
  height: 24px;
  width: 24px;
  margin: ${(p) => (p.$badgeSize === 'm' ? 2 : 4)}px 0;
`;

export const StyledFallback = styled.div<{ $badgeSize: BadgeSize }>`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(p) => p.theme.colorTokens.neutral.background_disabled};
  border-radius: 50%;
  height: 24px;
  width: 24px;
  position: absolute;
  margin: ${(p) => (p.$badgeSize === 'm' ? 2 : 4)}px 0;

  span {
    line-height: unset;
  }
`;

export const StyledFlag = styled(Flag)<{ $badgeSize: BadgeSize }>`
  position: absolute;
  left: ${(p) => (p.$badgeSize === 'm' ? 10 : 12)}px;
  top: ${(p) => (p.$badgeSize === 'm' ? 12 : 16)}px;
  height: 16px;
  width: 16px;
  border-radius: 50%;
`;

export const StyledOverlay = styled.div<{ $badgeSize: BadgeSize }>`
  position: absolute;
  left: ${(p) => (p.$badgeSize === 'm' ? 10 : 12)}px;
  top: ${(p) => (p.$badgeSize === 'm' ? 12 : 16)}px;
  height: 12px;
  width: 12px;
  border: 2px solid ${(p) => p.theme.colorTokens.neutral.border_focus};
  border-radius: 50%;
`;
