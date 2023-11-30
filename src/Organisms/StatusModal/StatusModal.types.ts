export type Status = 'SUCCESS' | 'ERROR' | 'WARNING';

type Option = {
  status?: Status;
  title: string;
  text: string;
  textConfirm: string;
  textCancel?: string;
} | null;

export type Props = {
  loading?: boolean;
  onClose: (confirmed?: any) => void;
  options: Option;
  id: string;
  fixedBottomMobile?: boolean;
  variant?: 'primary' | 'negative';
};
