import { CSSProperties } from 'styled-components';
import { ColorFn } from '../../Types';
import { Position } from '../PopOver.types';

export type Props = {
  position: Position;
  style?: CSSProperties;
  ref?: React.RefObject<any>;
  backgroundColor: ColorFn;
  borderColor: ColorFn;
};
