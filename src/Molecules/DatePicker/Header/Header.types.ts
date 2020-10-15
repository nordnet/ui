export type Props = {
  ariaLabelPrevious?: string;
  ariaLabelNext?: string;
  id: string;
  locale: string;
  now: Date;
  onMonthChange: (index: number) => void;
  onYearChange: (year: number) => void;
};
