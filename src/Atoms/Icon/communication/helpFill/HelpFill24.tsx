import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const HelpFill24: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={24} height={24}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM10.7181 14H12.5521L12.5941 13.676C12.7028 13.146 13.1017 12.8139 13.6627 12.3468L13.7141 12.304C14.9601 11.24 15.4221 10.666 15.4221 9.57399C15.4221 7.93599 14.0921 6.89999 12.1461 6.89999C10.2981 6.89999 8.87009 7.89399 8.59009 9.79799H10.7041C10.8861 9.20999 11.3201 8.71999 12.1041 8.71999C12.8601 8.71999 13.2381 9.13999 13.2381 9.67199C13.2381 10.2296 12.8176 10.5711 12.266 11.0189C12.2224 11.0544 12.1773 11.091 12.1321 11.128C10.7179 12.2788 10.718 12.7155 10.7181 13.6485L10.7181 14ZM12.72 15H10.72V17H12.72V15Z"
        fill="currentColor"
      />
    </IconBase>
  );
};

HelpFill24.displayName = 'Icon.HelpFill';

export default HelpFill24;
