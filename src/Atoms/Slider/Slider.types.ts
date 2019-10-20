export type Props = {
  onChange: Function;
  initialValue: number;
  min: string;
  max: string;
  step: string;
};

export type StyledProps = {
  linearGradient: number;
};

export type SliderComponent = React.FunctionComponent<Props>;
