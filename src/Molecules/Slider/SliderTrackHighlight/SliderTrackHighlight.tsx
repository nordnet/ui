import React from 'react';
import styled from 'styled-components';

import { Component, InternalProps } from './SliderTrackHighlight.types';
import { getHeight } from '../utils';

const TrackHighlight = styled.div<InternalProps>`
  width: 100%;
  border-radius: inherit;
  background: ${(p) => (p.$sliderColor ? p.$sliderColor(p.theme) : p.theme.color.sliderColor)};
  height: ${(p) => `${getHeight(p.$variant)}px`};
  position: absolute;
`;

const SliderTrackHighlight: Component = ({ sliderColor, startValue = 0, value, variant }) => {
  return (
    <TrackHighlight
      $sliderColor={sliderColor}
      style={{ left: `${startValue}%`, width: `${value - startValue}%` }}
      $variant={variant}
    />
  );
};

export default SliderTrackHighlight;
