type TrackFunction = (componentName: string, e: React.SyntheticEvent | string, props: any) => void;

export interface TrackingContextData {
  track: TrackFunction;
}
