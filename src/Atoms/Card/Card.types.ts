type AllowedTags = 'div' | 'article' | 'section';

export type Props = {
  as?: AllowedTags;
  children: React.ReactNode;
  className?: string;
};
