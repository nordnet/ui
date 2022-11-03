export type ContainerProps = {
  showMoreButton: boolean;
  showMoreClicked: boolean;
  linesToClamp?: number;
};

export type Props = {
  showMoreText: string;
  onShowMore?: React.MouseEventHandler;
  linesToClamp?: number;
  children?: React.ReactNode;
};
