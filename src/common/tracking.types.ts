type TrackFunction = (componentName: string, e: React.SyntheticEvent, props: any) => void;

export type TrackingProps = {
  componentId?: string;
};

export interface TrackingContextData {
  track: TrackFunction;
}
