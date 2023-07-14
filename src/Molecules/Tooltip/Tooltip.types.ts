import React from 'react';
import { InModal, Position } from 'common/PopOver/PopOver.types';
import { BasePlacement, Rect } from '@popperjs/core';
import { Theme } from 'theme/theme.types';

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
  customBoundary?: HTMLElement | Array<HTMLElement>;
  /**
   * @bottomSheetQuery
   * Used to determine when to display a bottom-sheet instead of a tooltip
   */
  bottomSheetQuery?: (t: Theme) => string;
  bottomSheetTitle?: string;
  /**
   * @onBottomSheetClose
   * Needed if you provide bottomSheetTitle
   */
  onBottomSheetClose?: () => void;
  pointerArrow?: boolean;
  /**
   * @invertedColors
   * If you want light mode colors in dark mode and opposite
   */
  invertedColors?: boolean;
};
