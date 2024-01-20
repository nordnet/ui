import React from 'react';

export type Props = {
  children?: React.ReactNode;
  className?: string;
  closeOnClickOutside?: boolean;
  fullScreenMobile?: boolean;
  height?: number;
  invertedColors?: boolean;
  onClose?: () => void;
  open: boolean;
  showBackdrop?: boolean;
  title: React.ReactNode;
};
