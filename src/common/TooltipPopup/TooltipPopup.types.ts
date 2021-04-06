import { ColorFn } from 'common/Types';
import React from 'react';

export type InModal = boolean;
export type Position = 'top' | 'right' | 'bottom' | 'left';

export type Props = {
  ref?: React.RefObject<any>;
  label: React.ReactNode;
  position?: Position;
  positionCallback?: (calulatedPostion: Position) => void;
  triggerElement?: Element;
  ariaLabel?: string;
  backgroundColor?: ColorFn;
  borderColor?: ColorFn;
  inModal?: InModal;
  maxWidth?: number;
  pointerEvents?: boolean;
};
