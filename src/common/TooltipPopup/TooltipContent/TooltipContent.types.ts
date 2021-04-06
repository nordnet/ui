import { ColorFn } from 'common/Types';

export type StyledTooltipProps = {
  maxWidth: number;
  backgroundColor: ColorFn;
  borderColor: ColorFn;
  ariaLabel?: string;
  ref?: React.RefObject<any>;
};

export type Props = {
  label: React.ReactNode;
} & StyledTooltipProps;
