import React, { useState, useCallback } from 'react';
import { TruncateWithTooltipComponent } from './TruncateWithTooltip.types';
import { Truncate, Tooltip } from '../..';

export const TruncateWithTooltip: TruncateWithTooltipComponent = ({
  children,
  className,
  as,
  ...tooltipProps
}) => {
  const [isTruncated, setIsTruncated] = useState(false);

  // TODO: Check truncation again on screen or container resize
  const measuredRef = useCallback(node => {
    if (node !== null) {
      const truncated = node.clientWidth < node.scrollWidth;
      setIsTruncated(truncated);
    }
  }, []);

  if (!isTruncated) {
    return (
      <Truncate as={as} className={className} ref={measuredRef}>
        {children}
      </Truncate>
    );
  }

  return (
    <Tooltip {...tooltipProps}>
      <Truncate className={className} as={as}>
        {children}
      </Truncate>
    </Tooltip>
  );
};
