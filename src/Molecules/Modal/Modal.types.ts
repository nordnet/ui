import React from 'react';
import { Props as ProgressProps } from '../ProgressIndicator/ProgressIndicator.types';

export type InnerProps = {
  className?: string;
  closeTitle?: string;
  onClose?: Function;
  progressIndicator?: ProgressProps;
  progressIndicatorDescription?: string;
  title?: React.ReactNode;
  footer?: React.ReactNode;
  hideClose?: boolean;
  /** @default true */
  fullScreenMobile?: boolean;
  /** @default false */
  fixedBottomMobile?: boolean;
  /** @default false */
  closeOnBackdropClick?: boolean;
  /** @default true */
  closeOnEscapePress?: boolean;
  isStatusModal?: boolean;
  onAnimationComplete?: () => void;
  showBackdrop?: boolean;
  children?: React.ReactNode;
  blurBackdrop?: boolean;
};

export type BackdropProps = {
  onClick: (e: React.ChangeEvent<HTMLElement>) => void;
  $fullScreenMobile?: boolean;
  $blur?: boolean;
};

export type DialogProps = {
  $show: boolean;
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
  $fullScreenMobile?: boolean;
  $fixedBottomMobile?: boolean;
  $isStatusModal?: boolean;
};

export type Props = {
  open?: boolean;
  /** @default false */
  autoFocus?: boolean;
} & InnerProps;

export type BackdropWrapperProps = BackdropProps & {
  showBackdrop: boolean;
  backdropRef: React.RefObject<HTMLDivElement>;
  children?: React.ReactNode;
  blurBackdrop?: boolean;
};
