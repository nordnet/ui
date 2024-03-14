import React from 'react';

import { Flexbox, OldIcon, Tooltip as UITooltip } from '../../..';
import { Props } from './Tooltip.types';

export function Tooltip({
  children,
  labelTooltip,
  labelTooltipPosition,
  labelTooltipInModal,
}: Props) {
  if (!labelTooltip) {
    return children;
  }

  return (
    <Flexbox container alignItems="center" gap={1}>
      {children}
      <UITooltip
        position={labelTooltipPosition}
        label={labelTooltip}
        inModal={labelTooltipInModal}
        wrapChild={labelTooltipInModal}
      >
        <OldIcon.Questionmark data-testid="tooltip-svg" size={4} />
      </UITooltip>
    </Flexbox>
  );
}
