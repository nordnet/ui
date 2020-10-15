import React from 'react';
import styled from 'styled-components';
import { TRACK_HEIGHT_BIG, TRACK_HEIGHT_SMALL, VARIANT_TYPES } from '../constants';
import { Component, InternalProps } from './SliderTrackHighlight.types';

const TrackHighlight = styled.div<InternalProps>`
  width: 100%;
  border-radius: inherit;
  background: ${(p) => (p.$sliderColor ? p.$sliderColor(p.theme) : p.theme.color.sliderColor)};
  height: ${(p) =>
    p.$variant === VARIANT_TYPES.SMALL
      ? `${p.theme.spacing.unit(TRACK_HEIGHT_SMALL)}`
      : `${p.theme.spacing.unit(TRACK_HEIGHT_BIG)}`}px;
`;

const SliderTrackHighlight: Component = ({ sliderColor, value, variant }) => {
  return (
    <TrackHighlight $sliderColor={sliderColor} style={{ width: `${value}%` }} $variant={variant} />
  );
};

export default SliderTrackHighlight;
