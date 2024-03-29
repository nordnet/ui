import React from 'react';
import { IconBase } from '../IconBase';
import { BaseProps } from '../IconBase.types';

export const StarOutline = (props: BaseProps) => {
  return (
    <IconBase {...props} viewBox="0 0 32 32">
      <path d="M19.954738,12.2161631 L16,1 L12.044275,12.2161631 L0,12.4589803 L9.59859473,19.6324965 L6.11145618,31 L16,24.2167499 L25.8885438,31 L22.4004183,19.6324965 L32,12.4589803 L19.954738,12.2161631 Z M13.4580851,14.1348167 L15.999013,6.92559225 L18.5419149,14.1348167 L26.2811345,14.2893897 L20.1129047,18.9009071 L22.3540313,26.2043623 L16,21.846513 L9.64498173,26.2043623 L11.8870953,18.9009071 L5.7178785,14.2893897 L13.4580851,14.1348167 Z" />
    </IconBase>
  );
};

StarOutline.displayName = 'OldIcon.StarOutline';
