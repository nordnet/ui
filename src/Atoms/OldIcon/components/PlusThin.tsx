import React from 'react';
import { IconBase } from '../IconBase';
import { BaseProps } from '../IconBase.types';

export const PlusThin = (props: BaseProps) => {
  return (
    <IconBase {...props} viewBox="0 0 32 32">
      <polygon points="15 -1.12233246e-29 17 4.05741625e-16 17 32 15 32" />
      <polygon
        transform="translate(16.000000, 16.000000) rotate(-270.000000) translate(-16.000000, -16.000000) "
        points="15 -6.06181771e-14 17 -6.03961325e-14 17 32 15 32"
       />
    </IconBase>
  );
};

PlusThin.displayName = 'OldIcon.PlusThin';
