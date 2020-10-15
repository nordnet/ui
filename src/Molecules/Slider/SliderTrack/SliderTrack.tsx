import React from 'react';
import styled from 'styled-components';
import { TRACK_HEIGHT_BIG, TRACK_HEIGHT_SMALL, VARIANT_TYPES } from '../constants';
import { Component, InternalProps } from './SliderTrack.types';

const Track = styled.div<InternalProps>`
  position: relative;
  width: 100%;
  height: ${(p) =>
    p.$variant === VARIANT_TYPES.SMALL
      ? `${p.theme.spacing.unit(TRACK_HEIGHT_SMALL)}`
      : `${p.theme.spacing.unit(TRACK_HEIGHT_BIG)}`}px;
  background: ${(p) =>
    p.$disabled ? p.theme.color.sliderDisabled : p.theme.color.sliderBackgroundColor};
  border-radius: inherit;
  cursor: ${(p) => (p.$disabled ? 'not-allowed' : 'default')};
`;

const SliderTrack: Component = ({ children, disabled, variant }) => {
  return (
    <Track $disabled={disabled} $variant={variant}>
      {children}
    </Track>
  );
};

export default SliderTrack;
