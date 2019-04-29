import React from 'react';
import { Number as NumberComponent } from '../..';
import { PercentComponent as PercentComponentType } from './Percent.types';

const Percent: PercentComponentType = ({ value, decimals = 0 }) =>
  value && Number.isFinite(value) ? (
    <>
      <NumberComponent value={value} decimals={decimals} />%
    </>
  ) : (
    <>-</>
  );

export default Percent;
