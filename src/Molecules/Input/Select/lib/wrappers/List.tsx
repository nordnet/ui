import React from 'react';
import styled from 'styled-components';
import { useSelectMachineFromContext } from '../context';

const getWidth = (p: any) => {
  if (p.width) return p.width;
  if (p.noFormField || p.columns) {
    return 'auto';
  }
  return 'calc(100% + 2px)'; // adjusting for border
};

const getStylesForPosition = (listPosition: string) => {
  switch (listPosition) {
    case 'left':
      return `right: -1px;`;
    default:
      return `left: -1px;`;
  }
};

const getStylesForPlacement = (placement: string) => {
  switch (placement) {
    case 'top':
      return `bottom: 100%;`;
    default:
      return `top: 100%;`;
  }
};

const StyledListWrapper = styled.div<any>`
  transform: translate3d(0, 0, 0);
  position: ${(p) => (p.$fullscreenOnMobile ? 'static' : 'absolute')};
  ${(p) => getStylesForPlacement(p.placement)}
  ${(p) => getStylesForPosition(p.listPosition)}
  z-index: 4;
  margin: -4px;
  padding: ${(p) => (p.$fullscreenOnMobile ? 0 : '0 4px 4px 4px')};
  width: ${getWidth};
`;

export const ListWrapper = React.forwardRef<HTMLDivElement, any>(
  (
    {
      component: Component,
      children,
      noFormField,
      onKeyDown,
      onFocus,
      onBlur,
      onMouseMove,
      searchComponent,
      actionsComponent,
      width,
      'data-testid': dataTestId,
      maxHeight,
      listPosition,
      listWidth,
      placement,
      itemsPerColumn,
      columnWidth,
    },
    ref,
  ) => {
    const [state] = useSelectMachineFromContext();
    const { fullscreenOnMobile } = state.context;

    return (
      <StyledListWrapper
        ref={ref}
        data-testid={dataTestId}
        noFormField={noFormField}
        onKeyDown={onKeyDown}
        onFocus={onFocus}
        onMouseMove={onMouseMove}
        onBlur={onBlur}
        width={width}
        listPosition={listPosition}
        listWidth={listWidth}
        placement={placement}
        $fullscreenOnMobile={fullscreenOnMobile}
        itemsPerColumn={itemsPerColumn}
      >
        <Component
          searchComponent={searchComponent}
          actionsComponent={actionsComponent}
          maxHeight={maxHeight}
          listPosition={listPosition}
          noFormField={noFormField}
          placement={placement}
          itemsPerColumn={itemsPerColumn}
          listWidth={listWidth}
          columnWidth={columnWidth}
        >
          {children}
        </Component>
      </StyledListWrapper>
    );
  },
);
