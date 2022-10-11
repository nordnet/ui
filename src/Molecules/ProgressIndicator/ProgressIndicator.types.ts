export type Props = {
  numberOfSteps: number | number[];
  currentStep: number | number[];
  title?: string;
  closeCallback?: () => void;
  backCallback?: () => void;
  infoCallback?: () => void;
  exitText?: string;
  backText?: string;
  infoText?: string;
  infoIcon?: 'info' | 'help';
};
