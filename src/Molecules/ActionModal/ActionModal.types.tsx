import React from 'react';
import { IllustrationProps } from '../../Atoms/Illustration/IllustrationBase.types';

type Props = {
  illustration?: React.ReactElement<IllustrationProps>;
  title: string;
  children: any;
  cancelButton?: React.ReactNode;
  confirmButton: React.ReactNode;
};

export type Component = React.FC<Props>;
