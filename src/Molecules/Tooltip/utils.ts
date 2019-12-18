import { TRIANGLE_SIZE, OFFSET, BORDER_SIZE } from './consts';

const OFFSET_ADJUSTED = OFFSET - BORDER_SIZE;

export const leftBefore = (triggerRect: ClientRect, tooltipRect: ClientRect) => {
  return triggerRect.left - tooltipRect.width - OFFSET_ADJUSTED - TRIANGLE_SIZE;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const leftAfter = (triggerRect: ClientRect, tooltipRect: ClientRect) => {
  return triggerRect.right + OFFSET_ADJUSTED + TRIANGLE_SIZE;
};

export const leftCenter = (triggerRect: ClientRect, tooltipRect: ClientRect) => {
  const triggerCenter = triggerRect.left + triggerRect.width / 2;
  const tooltipLeft = triggerCenter - tooltipRect.width / 2;
  const tooltipMaxLeft = window.innerWidth - tooltipRect.width - 2;

  return Math.min(Math.max(2, tooltipLeft), tooltipMaxLeft) + window.scrollX;
};

export const topOver = (triggerRect: ClientRect, tooltipRect: ClientRect) => {
  return (
    triggerRect.top - tooltipRect.height - OFFSET_ADJUSTED - TRIANGLE_SIZE + window.pageYOffset
  );
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const topUnder = (triggerRect: ClientRect, tooltipRect: ClientRect) => {
  return triggerRect.bottom + OFFSET_ADJUSTED + TRIANGLE_SIZE + window.pageYOffset;
};

export const topCenter = (triggerRect: ClientRect, tooltipRect: ClientRect) => {
  const triggerCenter = triggerRect.top + triggerRect.height / 2;
  const tooltipTop = triggerCenter - tooltipRect.height / 2;
  const tooltipMaxTop = window.innerHeight - tooltipRect.height - 2;

  return Math.min(Math.max(2, tooltipTop), tooltipMaxTop) + window.scrollY;
};
