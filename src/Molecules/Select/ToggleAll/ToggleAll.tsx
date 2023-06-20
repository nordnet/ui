import React from 'react';
import { Input } from '../../..';
import { Props } from './ToggleAll.types';

export function ToggleAll(props: Props) {
  return <Input.Checkbox {...props} />;
}
