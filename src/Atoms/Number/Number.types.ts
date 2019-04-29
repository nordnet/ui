import { InjectedIntlProps } from 'react-intl';

export type Props = {
  decimals?: number;
  value: number | null | undefined;
  percentage?: boolean;
  currency?: string;
  /**
   * show a plus sign if positive
   * @default false
   * */
  sign?: boolean;
};

export type NumberComponent = React.FunctionComponent<Props & InjectedIntlProps>;
