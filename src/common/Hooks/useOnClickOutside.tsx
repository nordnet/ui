import * as React from 'react';

export default function useOnClickOutside(
  _refs: React.MutableRefObject<any> | Array<React.MutableRefObject<any>>,
  handler: React.MouseEventHandler<any>,
) {
  React.useEffect(() => {
    const listener: React.EventHandler<any> = event => {
      const refs = Array.isArray(_refs) ? _refs : [_refs];
      // Do nothing if clicking ref's element or descendent elements
      if (
        !refs.every(ref => Boolean(ref.current)) ||
        refs.some(ref => !!ref.current && ref.current.contains(event.target as Node))
      ) {
        return;
      }

      handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [_refs, handler]);
}
