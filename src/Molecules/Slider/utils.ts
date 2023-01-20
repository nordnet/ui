import { Variant } from './Slider.types';

import {
  KNOB_BIG_PX,
  KNOB_PLAYER_PX,
  KNOB_SMALL_PX,
  TRACK_HEIGHT_BIG_PX,
  TRACK_HEIGHT_PLAYER_PX,
  TRACK_HEIGHT_SMALL_PX,
  VARIANT_TYPES,
} from './constants';

export const getHeight = (variant?: Variant) => {
  switch (variant) {
    case VARIANT_TYPES.SMALL:
      return TRACK_HEIGHT_SMALL_PX;
    case VARIANT_TYPES.BIG:
      return TRACK_HEIGHT_BIG_PX;
    case VARIANT_TYPES.PLAYER:
      return TRACK_HEIGHT_PLAYER_PX;
    default:
      return TRACK_HEIGHT_BIG_PX;
  }
};

export const getKnobSize = (variant?: Variant) => {
  switch (variant) {
    case VARIANT_TYPES.SMALL:
      return KNOB_SMALL_PX;
    case VARIANT_TYPES.BIG:
      return KNOB_BIG_PX;
    case VARIANT_TYPES.PLAYER:
      return KNOB_PLAYER_PX;
    default:
      return KNOB_BIG_PX;
  }
};
