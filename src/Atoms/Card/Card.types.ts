import { ColorFn } from '../../common/Types/sharedTypes';

type AllowedTags = 'div' | 'article' | 'section';

export type Props = {
  as?: AllowedTags;
  children: React.ReactNode;
  className?: string;
  barColor?: ColorFn;
  grow?: number;
  ref?: React.Ref<HTMLDivElement>;
};
