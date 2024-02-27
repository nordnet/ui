import { ColorFn } from 'common/Types';
import { Props as PopOverProps } from '../../common/PopOver/PopOver.types';

export type Props = {
  className?: string;
  children: React.ReactChild;
  isOpen: boolean;
  onClose: () => void;
  title: React.ReactNode;
  description: React.ReactNode;
  closeButtonTitle: string;
  pointerArrow?: boolean;
  maxWidth?: number | 'auto';
  /**
   * @wrapChild
   * Wraps children with a span DOM element.
   * Useful for when children does not handle refs correctly. Could fix positioning issues.
   */
  wrapChild?: boolean;
  textColor?: ColorFn;
  ref?: React.Ref<any>;
} & Pick<
  PopOverProps,
  | 'id'
  | 'position'
  | 'positionCallback'
  | 'backgroundColor'
  | 'borderColor'
  | 'ariaLabel'
  | 'inModal'
>;
