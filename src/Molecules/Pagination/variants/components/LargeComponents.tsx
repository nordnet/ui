import React from 'react';
import styled from 'styled-components';
import { Button, Flexbox, Link, Typography } from '../../../../index';
import List from '../../../../Atoms/List';

const StyledCurrentPageBox = styled(Flexbox)`
  background-color: ${(t) => t.theme.color.cta};
  justify-content: center;
  align-items: center;
  height: ${(p) => p.theme.spacing.unit(10)}px;
  width: ${(p) => p.theme.spacing.unit(10)}px;
  border-radius: ${(p) => p.theme.borderRadius2};
`;

const StyledTruncatedBox = styled.li`
  display: flex;
  height: ${(p) => p.theme.spacing.unit(10)}px;
  width: ${(p) => p.theme.spacing.unit(5)}px;
  border: none;
  padding: 0;
  justify-content: center;
  align-items: center;
`;

const getWidthForList = (
  pageItemWith: number,
  truncatedItemWidth: number,
  numberOfPages: number,
) => {
  const MAX_NUMBER_ITEMS = 7;
  const NUMBER_OF_CHEVRONS = 2;

  if (numberOfPages <= 5) {
    return numberOfPages * pageItemWith;
  }
  if (numberOfPages === 6) {
    return numberOfPages * pageItemWith - truncatedItemWidth;
  }
  return MAX_NUMBER_ITEMS * pageItemWith - NUMBER_OF_CHEVRONS * truncatedItemWidth;
};

const StyledList = styled(List)<{ $numberOfPages: number }>`
  display: flex;
  justify-content: center;
  ${(p) => {
    const PAGE_ITEM_WIDTH = p.theme.spacing.unit(10);
    const TRUNCATED_ITEM_WIDTH = p.theme.spacing.unit(5);
    return `width: ${getWidthForList(PAGE_ITEM_WIDTH, TRUNCATED_ITEM_WIDTH, p.$numberOfPages)}px`;
  }}
`;

const TruncatedPageNumbers = () => (
  <StyledTruncatedBox>
    <Typography type="primary" weight="bold">
      ...
    </Typography>
  </StyledTruncatedBox>
);

const [StyledButton, StyledLink] = [Button, Link].map(
  (elem: any) => styled(elem)<{
    $type: 'chevron' | 'page-item';
  }>`
    display: flex;
    height: ${(p) => p.theme.spacing.unit(10)}px;
    width: ${(p) => p.theme.spacing.unit(10)}px;
    border: none;
    padding: 0;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    border-radius: ${(p) => p.theme.borderRadius2};
    color: ${(t) => t.theme.color.text};
    ${({ $type, theme }) =>
      $type === 'chevron' &&
      `box-sizing: border-box; border: 1px solid ${theme.color.inputBorder};`}

    &:hover {
      background-color: ${(t) => t.theme.color.ctaHover};
      color: ${(t) => t.theme.color.buttonText};
      text-decoration: none;
      border-radius: ${(p) => p.theme.borderRadius2};

      span {
        color: ${(t) => t.theme.color.buttonText};
      }

      svg {
        fill: ${(t) => t.theme.color.buttonText};
      }
    }
  `,
);

export { StyledCurrentPageBox, StyledList, TruncatedPageNumbers, StyledButton, StyledLink };
