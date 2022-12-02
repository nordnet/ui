import { Props as CardProps } from '../../Atoms/Card/Card.types';

export type Props = {
  /** @default normal */
  variant?: 'normal' | 'big';
  title: React.ReactNode;
  noTopPadding?: boolean;
  noBottomPadding?: boolean;
};

export type CardWithTitleComponent = React.FunctionComponent<Props & CardProps>;
