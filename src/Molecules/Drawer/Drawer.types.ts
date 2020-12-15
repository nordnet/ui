export type Props = {
  className?: string;
  disableCloseOnClickOutside?: boolean;
  /** Useful when integrating with FadedScroll component */
  disableContentStyle?: boolean;
  onClose?: Function;
  title?: React.ReactNode;
  open?: boolean;
  ref?: React.Ref<HTMLDivElement>;
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
  onExitAnimationComplete?: () => void;
};

export type TitleProps = {
  title: React.ReactNode;
  uid: string;
};
