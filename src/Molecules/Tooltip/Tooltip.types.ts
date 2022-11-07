import React from 'react';
import { InModal, Position } from 'common/PopOver/PopOver.types';
import { BasePlacement, Rect } from '@popperjs/core';

type OffsetFunctionArg = {
  popper: Rect;
  reference: Rect;
  placement: BasePlacement;
};

type BareOffset = [number, number];
type EmptyOffset = [];
type Offset = BareOffset | EmptyOffset;
export type OffsetArg = Offset | ((arg: OffsetFunctionArg) => Offset);

export type Props = {
  label: React.ReactNode;
  ariaLabel?: string;
  className?: string;
  children?: React.ReactNode;
  /** @default bottom */
  position?: Position;
  /** Adjusts z-index when used inside Modal */
  inModal?: InModal;
  /** max-width in units */
  maxWidth?: number;
  mode?: 'hover' | 'click';
  offset?: OffsetArg;
  openDelay?: number;
  closeDelay?: number;
  isOpen?: boolean;
  ref?: React.Ref<HTMLSpanElement>;
  /**
   * @wrapChild
   * Wraps children with a span DOM element.
   * Useful for when children does not handle refs correctly. Could fix positioning issues.
   */
  wrapChild?: boolean;
  /**
   * @pointerEvents
   * If you need to click the content in the tooltip you pass this in as true
   */
  pointerEvents?: boolean;
  pointerArrow?: boolean;
  withPortal?: boolean;
};

export type TooltipComponent = React.FC<Props>;
