import React from 'react';
import styled, { css } from 'styled-components';
import Badge from '../..';
import { AccountBadgeSize } from '../AccountBadge/AccountBadge.constants';
import { AccountBadgeStackComponent, AccountBadgeStackProps } from './AccountBadgeStack.types';

const BORDER_WIDTH = 2;

const CROSS_FADE = 1; // used for anti-aliasing

const CircleWrapper = styled.div<{ $size: number }>`
  border-radius: 50%;
  display: inline-flex;
  position: relative;

  ${({ theme, $size }) => {
    const diameter = theme.spacing.unit($size);
    const radius = diameter / 2;

    return css`
      &:not(:last-of-type) {
        /* all but the last one */
        mask: radial-gradient(
          circle at ${diameter}px,
          transparent ${radius + BORDER_WIDTH / 2}px,
          white ${radius + BORDER_WIDTH / 2 + CROSS_FADE}px
        );
      }

      &:not(:first-of-type) {
        /* all but the first one */
        margin-left: -${radius - BORDER_WIDTH / 2}px;
      }
    `;
  }}
`;

const StyledContainer = styled.div`
  white-space: nowrap;
  overflow: hidden;
  display: flex;
`;

const currentColorFn = () => 'currentColor';

export const AccountBadgeStack: AccountBadgeStackComponent = React.forwardRef<
  HTMLDivElement,
  AccountBadgeStackProps
>(
  (
    {
      className,
      items,
      badgeSize = 's',
      maxElementsInStack = 3,
      truncated = true,
      truncationBadgeColor,
      truncationWrapper,
      useCurrentColor,
    },
    ref,
  ) => {
    const isTruncated = truncated && maxElementsInStack;

    const size = typeof badgeSize === 'number' ? badgeSize : AccountBadgeSize[badgeSize];
    const exceedsMax = isTruncated ? items.length >= maxElementsInStack : false;
    const passThroughIndex = isTruncated ? maxElementsInStack - 1 : items.length;
    const amountOfTruncatedBadges = isTruncated ? items.length - maxElementsInStack + 1 : 0;
    const truncatedItems = items.slice(passThroughIndex);

    return (
      <StyledContainer className={className} ref={ref}>
        {items.slice(0, passThroughIndex).map((passedItem, index) => {
          const key = `${passedItem.label}_${index}`;
          return (
            <CircleWrapper $size={size} key={key}>
              <Badge.Account
                badgeSize={badgeSize}
                badgeColor={useCurrentColor ? currentColorFn : passedItem.badgeColor}
              >
                {passedItem.label}
              </Badge.Account>
            </CircleWrapper>
          );
        })}

        {exceedsMax ? (
          <CircleWrapper $size={size}>
            <Badge.Account
              badgeSize={badgeSize}
              badgeColor={useCurrentColor ? currentColorFn : truncationBadgeColor}
            >
              {typeof truncationWrapper === 'function'
                ? truncationWrapper({ truncatedItems })
                : `+${amountOfTruncatedBadges}`}
            </Badge.Account>
          </CircleWrapper>
        ) : null}
      </StyledContainer>
    );
  },
);
