import React, { useCallback, useRef, useState } from 'react';
import styled from 'styled-components';
import { StyledButton, StyledFlexbox, StyledSeparator, StyledUl } from './Tabs.styles';
import { ContainerComponent, ItemProps, TitleComponent } from './Tabs.types';
import { useIntersect } from '../../common/Hooks';
import { Flexbox, TabTitle, Typography } from '../..';

import { assert } from '../../common/utils';
import { useKeyboardNavigation } from './useKeyboardNavigation';

const DEFAULT_SCROLL_OPTIONS = {
  active: false,
  scrollBarHidden: false,
  scrollFade: false,
};

export const Item = ({ children }: ItemProps) => {
  return <>{children}</>;
};
(Item as any).displayName = 'Tabs.Content';

const Title: TitleComponent = ({
  active: activeFromProps,
  children,
  onClick,
  onKeyDown,
  index,
  setRef,
  height,
  variant,
}) => {
  const active = activeFromProps;

  return (
    <Typography type="secondary" weight="bold">
      <StyledButton
        ref={setRef}
        type="button"
        onClick={onClick}
        onKeyDown={onKeyDown}
        aria-selected={active}
        role="tab"
        id={`tabs-tab-${index}`}
        tabIndex={active ? 0 : -1}
        $active={active}
      >
        <TabTitle active={active} height={height} variant={variant}>
          {children}
        </TabTitle>
      </StyledButton>
    </Typography>
  );
};
Title.displayName = 'Tabs.Title';
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
  TabBar: StyledFlexbox,
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
} = ({
  activeTabIndex,
  children,
  className,
  fullWidthSeparator,
  height = 8,
  initialActiveTabIndex = 0,
  scrollOptions = DEFAULT_SCROLL_OPTIONS,
  variant = 'normal',
}) => {
  // eslint-disable-next-line prefer-const
  let [active, setActive] = useState(initialActiveTabIndex);
  const isControlled = typeof activeTabIndex !== 'undefined';

  const [, intersectionLeftRatio] = useIntersect<HTMLDivElement>();
  const [, intersectionRightRatio] = useIntersect<HTMLDivElement>();
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToRefCallback = useCallback(
    (ref: any) => {
      if (ref && scrollRef && scrollRef.current && scrollOptions.active) {
        const offsetleft = ref.offsetLeft;
        const { width: tabWidth } = ref.getBoundingClientRect();
        const containerWidth = scrollRef.current.getBoundingClientRect().width;

        const scrollToLeft = offsetleft + tabWidth / 2 - containerWidth / 2;

        setTimeout(() => {
          scrollRef.current?.scrollTo({
            left: scrollToLeft,
            behavior: 'smooth',
          });
        }, 0);
      }
    },
    [scrollOptions.active],
  );

  if (isControlled) active = activeTabIndex!;

  const handleTitleClick =
    (i: number, handler?: React.MouseEventHandler) => (e: React.MouseEvent) => {
      if (handler) handler(e);
      if (!isControlled) setActive(i);
    };

  const { setRef, onKeyDown } = useKeyboardNavigation({
    itemsLength: React.Children.count(children),
  });

  const titles: React.ReactElement[] = [];
  let contents: React.ReactElement | null = null;

  React.Children.forEach(children, (c, i) => {
    const isActive = i === active;

    if (!isItemOrUndefined(c)) {
      assert(false, 'There should be only <Tabs.Tab> children inside of <Tabs> component');
    } else if (c) {
      titles.push(
        <Flexbox
          ref={isActive ? scrollToRefCallback : null}
          item
          as="li"
          role="presentation"
          // eslint-disable-next-line react/no-array-index-key
          key={`tabs-${i}`}
        >
          <Title
            active={isActive}
            index={i}
            onClick={handleTitleClick(i, c.props.onTitleClick)}
            onKeyDown={onKeyDown}
            setRef={setRef(i)}
            height={height}
            variant={variant}
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
      <StyledFlexbox
        container
        role="tablist"
        className={className}
        $height={height}
        $scrollOptions={scrollOptions}
        $intersectionLeftRatio={intersectionLeftRatio || 0}
        $intersectionRightRatio={intersectionRightRatio || 0}
        ref={scrollRef}
      >
        <Flexbox
          container
          direction="row"
          gap={4}
          sm={{ gap: variant === 'large' ? 8 : 4 }}
          as={StyledUl}
        >
          {titles}
        </Flexbox>
      </StyledFlexbox>
      <StyledSeparator fullWidth={fullWidthSeparator} />
      {contents}
    </>
  );
};

Tabs.displayName = 'Tabs';
Tabs.Tab = Item;
Tabs.components = components;
