import React, { ReactElement } from 'react';
import { Props as NumberProps } from '../Number/Number.types';
import { Props as FlexboxProps } from '../../Atoms/Flexbox/Flexbox.types';

export type PartialNumberProps = Omit<NumberProps, 'value'>;

type ImageProps = {
  src: string;
  alt: string;
};

export type Props = {
  label: string | ReactElement;
  icon?: ReactElement;
  /**
   * @weight
    Should be number 0-100
   */
  weight: number;
  children?: React.ReactNode;
  delay?: number;
  labelProps?: FlexboxProps;
  imageProps?: ImageProps;
};
