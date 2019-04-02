import React from 'react';
import { BaseProps } from './BaseIcon.types';

export const Icon: React.FC<BaseProps> = (...props) => <div {...props as any} />;
