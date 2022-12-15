import { useEffect } from 'react';

export const useMouseEvents = (
  ref: any,
  pointerEvents: boolean,
  handleMouseEnter?: (e: any) => void,
  handleMouseLeave?: (e: any) => void,
) => {
  useEffect(() => {
    const node = ref?.current;
    if (ref && node && pointerEvents && handleMouseEnter && handleMouseLeave) {
      node?.addEventListener('mouseenter', handleMouseEnter);
      node?.addEventListener('mouseleave', handleMouseLeave);
      node?.addEventListener('mousedown', (evt: MouseEvent) => evt.stopPropagation());
    }
    return () => {
      if (ref && node && pointerEvents && handleMouseEnter && handleMouseLeave) {
        node?.removeEventListener('mouseenter', handleMouseEnter);
        node?.removeEventListener('mouseleave', handleMouseLeave);
        node?.removeEventListener('mousedown', (evt: MouseEvent) => evt.stopPropagation());
      }
    };
  }, [ref, pointerEvents, handleMouseEnter, handleMouseLeave]);
};
