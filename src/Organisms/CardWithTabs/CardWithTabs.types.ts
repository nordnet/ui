import { Props as CardWithTitleProps } from '../../Molecules/CardWithTitle/CardWithTitle.types';
import { ItemComponent, ContainerProps } from '../../Molecules/Tabs/Tabs.types';

export type Props = CardWithTitleProps & {
  initialActiveTabIndex?: ContainerProps['initialActiveTabIndex'];
  activeTabIndex?: ContainerProps['activeTabIndex'];
};

export type Component = React.FC<Props> & {
  Tab: ItemComponent;
};
