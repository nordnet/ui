import React from 'react';

export type BackdropWrapperProps = {
  children?: React.ReactNode;
  showBackdrop: boolean;
};

export type Props = {
  children?: React.ReactNode;
  className?: string;
  closeOnClickOutside?: boolean;
  fullScreenMobile?: boolean;
  maxHeight?: string;
  onClose?: () => void;
  open: boolean;
  showBackdrop?: boolean;
  title: React.ReactNode;
};
