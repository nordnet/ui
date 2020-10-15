import React, { useState } from 'react';
import styled from 'styled-components';
import { assert } from '../../common/utils';
import {
  OverlayProps,
  ItemProps,
  MouseEventProps,
  SegmentedControlComponent,
} from './SegmentedControl.types';
import { Flexbox, Typography } from '../..';

const Overlay = styled.div<OverlayProps>`
  position: absolute;
  width: ${(p) => (p.$count === 0 ? 100 : 100 / p.$count)}%;
  height: ${(p) => p.theme.spacing.unit(8)}px;
  background-color: ${(p) =>
    p.disabled ? p.theme.color.disabledBackground : p.theme.color.backgroundInput};
  left: ${(p) => (p.$count === 0 ? 0 : p.$selected * (100 / p.$count))}%;
  margin: -1px 0 0 0;
  pointer-events: none;
  ${(p) =>
    !p.disabled &&
    `
    border: 1px solid ${p.theme.color.sliderBackgroundColor};
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.07);
  `}
  transition: all 0.3s ease;
`;

const Button = styled.button`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  &[aria-checked='true'] {
    pointer-events: none;
  }
  width: 100%;
  height: 100%;
  border: none;
  padding: 0;
  background-color: transparent;
  outline: none;
  cursor: ${(p) => (p.disabled ? 'not-allowed' : 'pointer')};
`;

const SegmentedControlContainer = styled(Flexbox)`
  position: relative;
  background-color: ${(p) => p.theme.color.background};
  height: ${(p) => p.theme.spacing.unit(8)}px;
  margin: ${(p) => p.theme.spacing.unit(0.5)}px;
`;

const StyledFlexbox = styled(Flexbox)`
  width: 100%;
  height: 100%;
`;

export const Item: React.FC<ItemProps> = ({ children }) => {
  return <div>{children}</div>;
};
(Item as any).displayName = 'SegmentedControl.Item';

const isItemOrUndefined = (x: any): x is { type: typeof Item; props: ItemProps } => {
  if (x == null || typeof x === 'undefined') {
    return true;
  }
  return (
    typeof x === 'object' &&
    Object.hasOwnProperty.call(x, 'type') &&
    x.type.displayName === Item.displayName
  );
};

const SegmentedControl: SegmentedControlComponent = ({
  children,
  className,
  selectedInitially = 0,
  selected: selectedControlled,
  onClick = () => {},
  disabled = false,
}) => {
  const isControlled = typeof selectedControlled !== 'undefined';

  const [selected, setSelected] = useState(selectedInitially);
  const clickHandler = (e: React.MouseEvent, onItemClick: MouseEventProps, itemId: number) => {
    setSelected(itemId);
    if (onItemClick) {
      setTimeout(() => onItemClick(e, itemId));
    }
  };

  const items: React.ReactNode[] = [];

  React.Children.forEach(children, (c) => {
    if (!isItemOrUndefined(c)) {
      assert(
        false,
        'There should be only <SegmentedControl.Item> children inside of <SegmentedControl> component',
      );
    } else if (c) {
      const itemSelected = isControlled ? selectedControlled : selected;
      items.push(
        <StyledFlexbox item key={c.props.itemId}>
          <Button
            role="radio"
            aria-checked={itemSelected === c.props.itemId}
            onClick={
              isControlled
                ? (e) => onClick(e, c.props.itemId)
                : (e) => clickHandler(e, c.props.onItemClick, c.props.itemId)
            }
            className={c.props.className}
            disabled={disabled}
          >
            <Typography
              type="secondary"
              weight={itemSelected === c.props.itemId ? 'bold' : 'regular'}
              {...(disabled && { color: (t) => t.color.disabledText })}
            >
              {c.props.children}
            </Typography>
          </Button>
        </StyledFlexbox>,
      );
    }
  });

  return (
    <SegmentedControlContainer
      container
      role="radiogroup"
      className={className}
      alignItems="stretch"
    >
      <Overlay
        $selected={(isControlled ? selectedControlled : selected) || 0}
        $count={items.length}
        disabled={disabled}
      />
      {items}
    </SegmentedControlContainer>
  );
};

SegmentedControl.Item = Item;

export default SegmentedControl;
