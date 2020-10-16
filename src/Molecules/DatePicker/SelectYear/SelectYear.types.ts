export type Props = {
  id: string;
  locale: string;
  viewedDate: Date;
  onChange: (index: number) => void;
  years?: Number;
};
