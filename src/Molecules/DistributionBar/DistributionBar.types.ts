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
  maxWeight: number; // Biggest value
  hideWeight?: boolean;
};

type Symbol =
  | {
      type: 'Country';
      country: string;
    }
  | {
      type: 'Bullet';
      iconProps?: IconProps;
    };
