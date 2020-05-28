type Props = {
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
  children?: React.ReactNode;
  expanded?: boolean;
  expandedInitial?: boolean;
  title: string;
  onClick?: React.MouseEventHandler;
  onToggle?: (expanded: boolean) => void;
  ref?: React.Ref<HTMLButtonElement>;
};

export type AccordionItemComponent = React.FC<Props>;
