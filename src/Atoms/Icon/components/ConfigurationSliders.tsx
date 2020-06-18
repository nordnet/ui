import React from 'react';
import { IconBase } from '../IconBase';
import { BaseProps } from '../IconBase.types';

export const ConfigurationSliders = (props: BaseProps) => {
  return (
    <IconBase {...props} viewBox="0 0 32 32">
      <path d="M12 22v4h20v2H12v4H6v-4H0v-2h6v-4h6zm-2 2H8v6h2v-6zm15-13v4h7v2h-7v4h-6v-4H0v-2h19v-4h6zm-2 2h-2v6h2v-6zM12 0v4h20v2H12v4H6V6H0V4h6V0h6zm-2 2H8v6h2V2z" />
    </IconBase>
  );
};

ConfigurationSliders.displayName = 'Icon.ConfigurationSliders';
