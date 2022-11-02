import React from 'react';
import styled from 'styled-components';
import { Box, DropdownBubble, FadedScroll, List as UIList, Separator } from '../../../../..';

type ListProps = {
  listPosition?: string;
  searchComponent?: React.ReactNode;
  actionsComponent?: React.ReactNode;
  maxHeight?: string;
  noFormField?: boolean;
  placement?: 'bottom' | 'top';
  itemsPerColumn?: number;
  columnWidth?: string;
  listWidth?: string;
  children?: React.ReactNode;
};

const StyledColumnsList = styled(UIList)<any>`
  display: grid;
  grid-auto-flow: column;
  grid-template-rows: repeat(${(p) => p.itemsPerColumn}, max-content);
  grid-gap: 0;
  padding: 0;
  list-style: none;
  position: relative;

  & li {
    width: ${(p) => p.columnWidth || 'auto'};
  }
`;

const StyledList = styled(UIList)<any>`
  display: flex;
  flex-direction: column;
  list-style: none;
`;

const FadedScrollWithoutPaddingBottom = styled(FadedScroll)`
  height: 100%;
`;

/**
 * This thing fixes IE11 flex overflow.
 * Don't ask me
 * https://jsfiddle.net/gktpsyv5/
 */
const IE11Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const getMinWidth = (p: any) => {
  if (p.itemsPerColumn) {
    return 'auto';
  }
  if (p.listWidth) {
    return p.listWidth;
  }
  return `${p.theme.spacing.unit(41)}px`;
};

const StyledDropdownBubble = styled(DropdownBubble)<any>`
  flex-grow: 0;
  flex-shrink: 1;
  flex-basis: auto;
  display: flex;
  flex-direction: column;
  -ms-overflow-y: scroll;
  width: ${(p) => (p.itemsPerColumn ? 'auto' : '100%')};
  min-width: ${getMinWidth};
  padding-top: ${(p) => p.theme.spacing.unit(1)}px;
  padding-bottom: ${(p) => p.theme.spacing.unit(1)}px;
`;

const getTrianglePosition = (position: string | undefined) => {
  switch (position) {
    case 'left':
      return 'right';
    case 'bottom':
      return 'center';
    default:
      return 'left';
  }
};

export const List: React.FC<ListProps> = ({
  children,
  searchComponent = null,
  actionsComponent = null,
  maxHeight,
  listPosition,
  noFormField,
  placement,
  itemsPerColumn,
  columnWidth,
  listWidth,
}) => {
  const areOptionsProvided = React.Children.count(children) > 0;
  return (
    <IE11Wrapper>
      <StyledDropdownBubble
        position={noFormField ? getTrianglePosition(listPosition) : 'left'}
        placement={placement}
        maxHeight={maxHeight || '240px'}
        itemsPerColumn={itemsPerColumn}
        listWidth={listWidth}
      >
        {searchComponent}
        {itemsPerColumn ? (
          <StyledColumnsList
            itemsPerColumn={itemsPerColumn}
            columnWidth={columnWidth}
            role="listbox"
          >
            {children}
          </StyledColumnsList>
        ) : (
          <FadedScrollWithoutPaddingBottom enableMobileFade fadeHeight={8}>
            <StyledList role="listbox">{children}</StyledList>
          </FadedScrollWithoutPaddingBottom>
        )}
        {actionsComponent !== null && (
          <>
            {areOptionsProvided && <Separator />}
            <Box pt={areOptionsProvided ? 1 : 0}>{actionsComponent}</Box>
          </>
        )}
      </StyledDropdownBubble>
    </IE11Wrapper>
  );
};
