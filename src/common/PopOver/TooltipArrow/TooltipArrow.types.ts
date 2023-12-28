import { ColorFn } from '../../Types';
import { Position } from '../PopOver.types';

export type Props = {
  position: Position;
  style?: React.CSSProperties;
  ref?: React.RefObject<any>;
  backgroundColor: ColorFn;
  borderColor: ColorFn;
};
