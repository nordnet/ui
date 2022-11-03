import { ColorFn } from '../../../../common/Types';

export type TextProps = {
  className?: string;
  color?: ColorFn;
  weight?: string;
  children?: React.ReactNode;
};

export type TextComponent = React.FC<TextProps>;
