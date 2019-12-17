const TRIANGLE_SIZE = 10;
const OFFSET = 4 - 1;

export const getCollisions = (triggerRect: ClientRect, tooltipRect: ClientRect) => ({
  right: window.innerWidth < triggerRect.left + tooltipRect.width,
  left: triggerRect.left - tooltipRect.width < 0,
  top: triggerRect.top - tooltipRect.height < 0,
  bottom: window.innerHeight < triggerRect.bottom + tooltipRect.height + OFFSET + TRIANGLE_SIZE,
});

export const leftBefore = (triggerRect: ClientRect, tooltipRect: ClientRect) => {
  return triggerRect.left - tooltipRect.width - OFFSET - TRIANGLE_SIZE;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const leftAfter = (triggerRect: ClientRect, tooltipRect: ClientRect) => {
  return triggerRect.right + OFFSET + TRIANGLE_SIZE;
};

export const leftAuto = (triggerRect: ClientRect, tooltipRect: ClientRect) => {
  const collisions = getCollisions(triggerRect, tooltipRect);
  const centered = !collisions.right && !collisions.left;
  const directionRight = collisions.right && !collisions.left;

  if (centered) {
    const triggerCenter = triggerRect.left + triggerRect.width / 2;
    const tooltipLeft = triggerCenter - tooltipRect.width / 2;
    const tooltipMaxLeft = window.innerWidth - tooltipRect.width - 2;

    return Math.min(Math.max(2, tooltipLeft), tooltipMaxLeft) + window.scrollX;
  }

  if (directionRight) {
    return triggerRect.right - tooltipRect.width + window.pageXOffset;
  }

  return triggerRect.left + window.pageXOffset;
};

export const topOver = (triggerRect: ClientRect, tooltipRect: ClientRect) => {
  return triggerRect.top - tooltipRect.height - OFFSET - TRIANGLE_SIZE + window.pageYOffset;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const topUnder = (triggerRect: ClientRect, tooltipRect: ClientRect) => {
  return triggerRect.bottom + OFFSET + TRIANGLE_SIZE + window.pageYOffset;
};

export const topAuto = (triggerRect: ClientRect, tooltipRect: ClientRect) => {
  const collisions = getCollisions(triggerRect, tooltipRect);
  const centered = !collisions.bottom && !collisions.top;
  const directionUp = collisions.bottom && !collisions.top;

  if (centered) {
    const triggerCenter = triggerRect.top + triggerRect.height / 2;
    const tooltipTop = triggerCenter - tooltipRect.height / 2;
    const tooltipMaxTop = window.innerHeight - tooltipRect.height - 2;

    return Math.min(Math.max(2, tooltipTop), tooltipMaxTop) + window.scrollY;
  }

  if (directionUp) {
    return triggerRect.top - OFFSET - tooltipRect.height + window.pageYOffset;
  }

  return triggerRect.top + OFFSET + triggerRect.height + window.pageYOffset;
};
