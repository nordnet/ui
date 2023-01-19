import React from 'react';
import styled from 'styled-components';

import { Component, InternalProps } from './SliderTrackHighlight.types';
import { getHeight } from '../utils';

const TrackHighlight = styled.div<InternalProps>`
  width: 100%;
  border-radius: inherit;
  background: ${(p) => (p.$sliderColor ? p.$sliderColor(p.theme) : p.theme.color.sliderColor)};
  height: ${(p) => `${getHeight(p.$variant)}px`};
`;

const SliderTrackHighlight: Component = ({ sliderColor, value, variant }) => {
  return (
    <TrackHighlight $sliderColor={sliderColor} style={{ width: `${value}%` }} $variant={variant} />
  );
};

export default SliderTrackHighlight;
