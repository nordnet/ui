export type HtmlProps = Omit<React.HTMLProps<HTMLSpanElement>, 'children'>;

export type ItemProps = {
  to: string;
  fullServerRedirect?: boolean;
  title: React.ReactNode;
  onTitleClick?: React.MouseEventHandler;
  exact?: boolean;
  className?: string;
  active?: boolean;
};
export type ItemComponent = React.FC<ItemProps>;

export type ContainerProps = {
  height?: number;
  className?: string;
  children?: React.ReactNode;
  scrollOptions?: {
    active: boolean;
    scrollBarHidden: boolean;
    scrollFade?: boolean;
  };
};
export type Component = React.FC<ContainerProps> & { Tab: ItemComponent };

export type TitleProps = HtmlProps & {
  active: boolean;
  className?: string;
  onClick?: React.MouseEventHandler;
  children: React.ReactNode;
  setRef: (ref: HTMLAnchorElement | null) => void;
  to: string;
  onKeyDown: (e: React.KeyboardEvent) => void;
  height?: number;
  fullServerRedirect?: boolean;
};

export type ScrollStyleProps = {
  $height: number;
  $scrollOptions: { active: boolean; scrollBarHidden: boolean; scrollFade?: boolean };
  $intersectionLeftRatio?: number;
  $intersectionRightRatio?: number;
};
