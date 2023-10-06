import React from 'react';

export type Props = {
  numberOfSteps: number;
  currentStep: number;
  title?: string;
  closeCallback?: () => void;
  backCallback?: () => void;
  infoCallback?: Function | React.ReactNode;
  exitText?: string;
  infoText?: string;
  infoIcon?: 'info' | 'help';
  buttonCallback?: boolean;
  borderBottomMobile?: boolean;
};
