import React from 'react';
import styled from 'styled-components';

import { Component, InternalProps } from './SliderTrackHighlight.types';
import { getHeight } from '../utils';

const TrackHighlight = styled.div<InternalProps>`
  background: ${(p) => {
    const getBackgroundColor = () => {
      if (p.$disabled) {
        return p.theme.color.sliderDisabled;
      }
      if (p.$sliderColor) {
        return p.$sliderColor(p.theme);
      }
      return p.theme.color.sliderColor;
    };
    return getBackgroundColor();
  }};
  border-radius: inherit;
  height: ${(p) => `${getHeight(p.$variant)}px`};
  position: absolute;
  width: 100%;
`;

const SliderTrackHighlight: Component = ({
  disabled,
  sliderColor,
  startValue = 0,
  value,
  variant,
}) => {
  return (
    <TrackHighlight
      $disabled={disabled}
      $sliderColor={sliderColor}
      $variant={variant}
      style={{ left: `${startValue}%`, width: `${value - startValue}%` }}
    />
  );
};

export default SliderTrackHighlight;
