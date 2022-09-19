import React from 'react';
import { Props } from './Switch.types';
import Toggle from '../Toggle';

export const Switch: React.FC<Props> = (props) => <Toggle size="l" {...props} />;
