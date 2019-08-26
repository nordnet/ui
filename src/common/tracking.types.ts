type TrackFunction = (componentName: string, e: React.SyntheticEvent, props: any) => void;

export interface TrackingContextData {
  track: TrackFunction;
}
