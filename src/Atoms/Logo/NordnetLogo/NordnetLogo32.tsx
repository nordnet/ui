import React from 'react';
import { LogoProps } from '../LogoBase.types';
import { LogoBase } from '../LogoBase';

const NordnetLogo32: React.FC<LogoProps> = (props) => {
  return (
    <LogoBase {...props} viewBox="0 0 617 160" width={32} height={8}>
      <path
        fill="currentColor"
        d="M183.907 0 0 160h89.713L273.616 0v160h159.623L617.143 0h-89.712L344.732 158.951V0H183.907Z"
      />
    </LogoBase>
  );
};

NordnetLogo32.displayName = 'Logo.NordnetLogo';

export default NordnetLogo32;
