import { InjectedIntlProps } from 'react-intl';
import { Types as TypographyTypes } from '../Typography/Typography.types';

export type Ticks = { fromPrice: number; toPrice: number; tick?: number; decimals: number }[];

export type Props = {
  value: number | null | undefined;
  decimals?: number;
  minimumDecimals?: number;
  maximumDecimals?: number;
  ticks?: Ticks;
  percentage?: boolean;
  currency?: string;
  /** Show the currency part as a different typography size, normally used to make it one step smaller. If not present the currency will have the same size */
  currencySize?: TypographyTypes;
  /**
   * show a plus sign if positive
   * @default false
   * */
  sign?: boolean;
};

export type NumberComponent = React.FunctionComponent<Props & InjectedIntlProps>;
