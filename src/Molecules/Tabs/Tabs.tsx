import React, { useState } from 'react';
import styled from 'styled-components';
import { Flexbox, Typography, Separator, TabTitle } from '../..';
import NormalizedElements from '../../common/NormalizedElements/index';
import { assert } from '../../common/utils';
import { useKeyboardNavigation } from './useKeyboardNavigation';

import { ContainerComponent, TitleComponent, ItemProps } from './Tabs.types';

export const Item: React.FC<ItemProps> = ({ children }) => {
  return <>{children}</>;
};
(Item as any).displayName = 'Tabs.Content';

const StyledButton = styled(NormalizedElements.Button)`
  background: none;
  display: flex;
  border: none;
  margin: 0;
  padding: 0;
  cursor: pointer;
  font-weight: inherit;
`;

const Title: TitleComponent = ({
  active: activeFromProps,
  children,
  onClick,
  onKeyDown,
  index,
  setRef,
  height,
}) => {
  const active = activeFromProps;

  return (
    <Typography type="secondary" weight={active ? 'bold' : 'regular'}>
      <StyledButton
        ref={setRef}
        type="button"
        onClick={onClick}
        onKeyDown={onKeyDown}
        aria-selected={active}
        role="tab"
        id={`tabs-tab-${index}`}
        tabIndex={active ? 0 : -1}
      >
        <TabTitle active={active} height={height}>
          {children}
        </TabTitle>
      </StyledButton>
    </Typography>
  );
};
Title.displayName = 'Tabs.Title';

const StyledUl = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-top: 0;
  margin-bottom: 0;
`;

const TabContent = styled.section`
  height: 100%;
`;

const isItemOrUndefined = (x: any): x is { type: typeof Item; props: ItemProps } => {
  if (x == null || typeof x === 'undefined') {
    return true;
  }

  return typeof x === 'object' && Object.hasOwnProperty.call(x, 'type'); // FIXME: && x.type === Item;
};

const components = {
  TabContent,
};

export const Tabs: ContainerComponent & {
  /**
   * This will allow you to customize
   * inner parts with styled-components
   * Tabs component does not have a parent html element but consists of 3 elements that are siblings.
   * Use the ~ selector to access the siblings like TabContent in this example.
   * @example
   * const StyledContentTabs = styled(Tabs)`
   *  & ~ ${Tabs.components.TabContent} {
   *    height: inherit;
   *  }
   * `;
   * */
  components: typeof components;
} = ({ children, initialActiveTabIndex = 0, activeTabIndex, className, height = 8 }) => {
  // eslint-disable-next-line prefer-const
  let [active, setActive] = useState(initialActiveTabIndex);
  const isControlled = typeof activeTabIndex !== 'undefined';

  if (isControlled) active = activeTabIndex!;

  const handleTitleClick = (i: number, handler?: React.MouseEventHandler) => (
    e: React.MouseEvent,
  ) => {
    if (handler) handler(e);
    if (!isControlled) setActive(i);
  };

  const { setRef, onKeyDown } = useKeyboardNavigation({
    itemsLength: React.Children.count(children),
  });

  const titles: React.ReactElement<any>[] = [];
  let contents: React.ReactElement<any> | null = null;

  React.Children.forEach(children, (c, i) => {
    const isActive = i === active;

    if (!isItemOrUndefined(c)) {
      assert(false, 'There should be only <Tabs.Tab> children inside of <Tabs> component');
    } else if (c) {
      titles.push(
        // eslint-disable-next-line react/no-array-index-key
        <Flexbox item as="li" role="presentation" key={`tabs-${i}`}>
          <Title
            active={isActive}
            index={i}
            onClick={handleTitleClick(i, c.props.onTitleClick)}
            onKeyDown={onKeyDown}
            setRef={setRef(i)}
            height={height}
          >
            {c.props.title}
          </Title>
        </Flexbox>,
      );

      if (isActive) {
        contents = (
          <TabContent
            id={`tabs-tabpanel-${i}`}
            role="tabpanel"
            aria-labelledby={`tabs-tab-${i}`}
            hidden={!isActive}
          >
            {c}
          </TabContent>
        );
      }
    }
  });

  return (
    <>
      <Flexbox
        container
        direction="row"
        gutter={4}
        as={StyledUl}
        role="tablist"
        className={className}
      >
        {titles}
      </Flexbox>
      <Separator />

      {contents}
    </>
  );
};

Tabs.displayName = 'Tabs';
Tabs.Tab = Item;
Tabs.components = components;
