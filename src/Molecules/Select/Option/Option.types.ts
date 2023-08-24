export type Props = {
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  label: React.ReactNode;
  value: string;
  /**
   * Adds the multiselect look to option component
   */
  multiple?: boolean;
};
