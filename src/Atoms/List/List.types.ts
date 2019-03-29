import { ReactElement } from 'react';

export type Props = {
  horisontal?: Boolean;
  children: ReactElement[];
  as?: 'ul' | 'ol';
};
