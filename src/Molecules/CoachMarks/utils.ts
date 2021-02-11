import { GetElement } from './CoachMarks.types';
import { BORDER_SIZE, TRIANGLE_SIZE, OFFSET } from '../Bubble/consts';

export const makeBackdropPath = ({ width, height, x = 0, y = 0, r = 0 }) => {
  const { innerWidth: w, innerHeight: h } = window;

  return `M${w},${h}H0V0H${w}V${h}ZM${x + r},${y}a${r},${r},0,0,0-${r},${r}V${
    height + y - r
  }a${r},${r},0,0,0,${r},${r}H${width + x - r}a${r},${r},0,0,0,${r}-${r}V${
    y + r
  }a${r},${r},0,0,0-${r}-${r}Z`;
};

export const getElement: GetElement = (target) => {
  if (typeof target === 'string') {
    return document.querySelector(target);
  }

  return target;
};

export const positionBubbleOver = (targetRect, bubbleRect) => {
  if (!targetRect || !bubbleRect) {
    return {};
  }

  return {
    left: `${targetRect.left - BORDER_SIZE}px`,
    top: `${targetRect.top - bubbleRect.height - OFFSET - TRIANGLE_SIZE}px`,
  };
};

export const positionBubbleUnder = (targetRect) => {
  if (!targetRect) {
    return {};
  }

  return {
    left: `${targetRect.left - BORDER_SIZE}px`,
    top: `${targetRect.bottom + OFFSET + TRIANGLE_SIZE}px`,
  };
};

export const positionBubbleBefore = (targetRect, bubbleRect) => {
  if (!targetRect || !bubbleRect) {
    return {};
  }

  return {
    left: `${targetRect.left - bubbleRect.width - OFFSET - TRIANGLE_SIZE}px`,
    top: `${targetRect.top - BORDER_SIZE}px`,
  };
};

export const positionBubbleAfter = (targetRect) => {
  if (!targetRect) {
    return {};
  }

  return {
    left: `${targetRect.right + OFFSET + TRIANGLE_SIZE}px`,
    top: `${targetRect.top - BORDER_SIZE}px`,
  };
};
