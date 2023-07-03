type TrackFunction = (componentName: string, e: React.SyntheticEvent, props: any) => void;

export type TrackingProps = {
  trackingId?: string;
};

export interface TrackingContextData {
  track: TrackFunction;
}
