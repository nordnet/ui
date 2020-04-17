import { Props as CardWithTitleProps } from '../../Molecules/CardWithTitle/CardWithTitle.types';
import { ContainerProps } from '../../Molecules/Tabs/Tabs.types';

export type UsedContainerProps = Pick<ContainerProps, 'initialActiveTabIndex' | 'activeTabIndex'>;

export type Component = React.FC<CardWithTitleProps & UsedContainerProps>;
