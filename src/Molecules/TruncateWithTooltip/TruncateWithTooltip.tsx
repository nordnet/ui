import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { TruncateWithTooltipComponent } from './TruncateWithTooltip.types';
import { Truncate, Tooltip } from '../..';

const StyledDiv = styled.div`
  display: inline-block;
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const TruncateWithTooltip: TruncateWithTooltipComponent = ({
  children,
  className,
  as,
  ...tooltipProps
}) => {
  const [isTruncated, setIsTruncated] = useState(false);

  // TODO: Check truncation again on screen or container resize
  const measuredRef = useCallback((node) => {
    if (node !== null) {
      const truncated = node.clientWidth < node.scrollWidth;
      setIsTruncated(truncated);
    }
  }, []);

  if (!isTruncated) {
    return (
      <StyledDiv as={as} className={className} ref={measuredRef}>
        {children}
      </StyledDiv>
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
