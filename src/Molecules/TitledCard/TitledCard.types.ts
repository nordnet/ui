import { Props as CardProps } from '../../Atoms/Card/Card.types';

export type Props = {
  title?: string;
};

export type TitledCardComponent = React.FunctionComponent<CardProps & Props>;
