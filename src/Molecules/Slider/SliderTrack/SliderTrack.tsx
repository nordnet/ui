import React from 'react';
import styled from 'styled-components';

import { getHeight, getKnobSize } from '../utils';
import { Component, InternalProps } from './SliderTrack.types';

const HoverArea = styled.div<InternalProps>`
  position: relative;
  width: 100%;
  height: ${(p) => `${getHeight(p.$variant)}px`};
  cursor: ${(p) => (p.$disabled ? 'not-allowed' : 'default')};
  padding: ${(p) => `${p.theme.spacing.unit(1)}px`} 0;
`;

const Track = styled.div<InternalProps>`
  position: relative;
  width: 100%;
  height: ${(p) => `${getHeight(p.$variant)}px`};
  background: ${(p) =>
    p.$disabled ? p.theme.color.sliderDisabled : p.theme.color.sliderBackgroundColor};
  border-radius: ${(p) => `${getKnobSize(p.$variant)}px`};
  cursor: ${(p) => (p.$disabled ? 'not-allowed' : 'default')};
`;

const SliderTrack: Component = ({
  children,
  disabled,
  variant,
  readOnly,
  onMouseMove,
  onMouseLeave,
}) => {
  return (
    <HoverArea onMouseMove={onMouseMove} onMouseLeave={onMouseLeave}>
      <Track $disabled={disabled || readOnly} $variant={variant}>
        {children}
      </Track>
    </HoverArea>
  );
};

export default SliderTrack;
