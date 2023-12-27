export type A11yProps = {
  /** Visible on completed steps */
  titleDone: string;
  /** Visible on non completed steps */
  titleNotDone: string;
};

export type StepBaseProps = {
  current?: boolean;
  done?: boolean;
  name: string;
  label: string;
};
