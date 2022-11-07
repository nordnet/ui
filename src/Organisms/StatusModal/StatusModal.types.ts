import { Theme } from '../../theme/theme.types';

export type Status = 'SUCCESS' | 'ERROR' | 'WARNING';

type Colors = Theme['color'];
type ColorFn = (t: Theme) => Colors['cta'] | Colors['negative'] | Colors['functionRed'];

type Option = {
  status?: Status;
  title: string;
  text: string;
  textConfirm: string;
  textCancel?: string;
  onConfirm?: Function;
  onCancel?: Function;
} | null;

export type Props = {
  loading?: boolean;
  onClose: Function;
  options: Option;
  id: string;
  showClose?: boolean;
  fixedBottomMobile?: boolean;
  confirmColor?: ColorFn;
};
