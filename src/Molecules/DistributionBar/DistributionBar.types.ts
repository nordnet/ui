import { Props as NumberProps } from '../Number/Number.types';
import { IconProps } from '../../Atoms/Icon/IconBase.types';

export type Bar = {
  symbol?: Symbol;
  name: string;
  link?: string;
  country?: string;
  weight: number;
};

export type PartialNumberProps = Omit<NumberProps, 'value'>;

export type Props = {
  bar: Bar;
  numberProps?: PartialNumberProps;
  /**
   * @maxWeight
    The biggest value a single bar can possibly reach
   */
  maxWeight: number;
  hideWeight?: boolean;
};

export type FlagSymbol = { country: string };
export type BulletSymbol = { iconProps: IconProps };
export type Symbol = FlagSymbol | BulletSymbol;
