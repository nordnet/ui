export type StyledLogoBaseProps = {
  inline?: boolean;
};

export type LogoProps = {
  className?: string;
  title?: string;
  inline?: boolean;
};

export type InternalProps = LogoProps & {
  children: React.ReactNode;
  ref?: React.Ref<SVGSVGElement>;
  width: number;
  height: number;
  viewBox?: string;
};
