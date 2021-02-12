import {
  GetElement,
  MakeBackdropPath,
  StyleObjFromTarget,
  StyleObjFromTargetAndBubble,
} from './types';
import { BORDER_SIZE, TRIANGLE_SIZE, OFFSET } from '../../Bubble/consts';
import { Placement } from '../../Bubble/Bubble.types';
import { isString } from '../../../common/utils';

export const makeBackdropPath: MakeBackdropPath = ({ width, height, left: x = 0, top: y = 0 }) => {
  const { innerWidth: w, innerHeight: h } = window;
  const r = 0;

  return `M${w},${h}H0V0H${w}V${h}ZM${x + r},${y}a${r},${r},0,0,0-${r},${r}V${
    height + y - r
  }a${r},${r},0,0,0,${r},${r}H${width + x - r}a${r},${r},0,0,0,${r}-${r}V${
    y + r
  }a${r},${r},0,0,0-${r}-${r}Z`;
};

export const getElement: GetElement = (target) => {
  if (isString(target)) {
    return document.querySelector(target);
  }

  return target;
};

export const positionBubbleOver: StyleObjFromTargetAndBubble = (targetRect, bubbleRect) => {
  if (!targetRect || !bubbleRect) {
    return {};
  }

  return {
    left: `${targetRect.left - BORDER_SIZE}px`,
    top: `${targetRect.top - bubbleRect.height - OFFSET - TRIANGLE_SIZE}px`,
  };
};

export const positionBubbleUnder: StyleObjFromTarget = (targetRect) => {
  if (!targetRect) {
    return {};
  }

  return {
    left: `${targetRect.left - BORDER_SIZE}px`,
    top: `${targetRect.bottom + OFFSET + TRIANGLE_SIZE}px`,
  };
};

export const positionBubbleBefore: StyleObjFromTargetAndBubble = (targetRect, bubbleRect) => {
  if (!targetRect || !bubbleRect) {
    return {};
  }

  return {
    left: `${targetRect.left - bubbleRect.width - OFFSET - TRIANGLE_SIZE}px`,
    top: `${targetRect.top - BORDER_SIZE}px`,
  };
};

export const positionBubbleAfter: StyleObjFromTarget = (targetRect) => {
  if (!targetRect) {
    return {};
  }

  return {
    left: `${targetRect.right + OFFSET + TRIANGLE_SIZE}px`,
    top: `${targetRect.top - BORDER_SIZE}px`,
  };
};

type GetBubblePositionStyles = (
  position: Placement,
  targetRect: ClientRect,
  bubbleRect: ClientRect,
) => { left?: string; top?: string };

export const getBubblePositionStyles: GetBubblePositionStyles = (
  position,
  targetRect,
  bubbleRect,
) => {
  switch (position) {
    case 'top':
      return positionBubbleOver(targetRect, bubbleRect);
    case 'right':
      return positionBubbleAfter(targetRect);
    case 'left':
      return positionBubbleBefore(targetRect, bubbleRect);
    case 'bottom':
    default:
      return positionBubbleUnder(targetRect);
  }
};
