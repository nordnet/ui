import { createContext } from 'react';
import { TrackingContextData } from './tracking.types';

const TrackingContext = createContext<TrackingContextData>({
  track: () => {},
});

export default TrackingContext;
