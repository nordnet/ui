import React from 'react';
import { IconBase } from '../IconBase';
import { BaseProps } from '../IconBase.types';

export const CommunicationMail = (props: BaseProps) => {
  return (
    <IconBase {...props} viewBox="0 0 24 24">
      <path d="M3.75,12 L3.75,17.25 L20.25,17.25 L20.25,12 L21.75,12 L21.75,18.75 L2.25,18.75 L2.25,12 L3.75,12 Z M21.75,5.25 L21.75,9.44130251 L12,14.8579692 L2.25,9.44130251 L2.25,5.25 L21.75,5.25 Z M20.25,6.75 L3.75,6.75 L3.75,8.558 L11.999,13.141 L20.25,8.558 L20.25,6.75 Z" />
    </IconBase>
  );
};

CommunicationMail.displayName = 'OldIcon.CommunicationMail';
