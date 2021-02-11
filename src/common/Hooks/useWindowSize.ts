import { useEffect, useState } from 'react';
import { throttle } from 'lodash';

const isClient = !!(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
);

function useWindowSize(throttleDelay: number = 1000) {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: isClient ? window.innerWidth : 0,
        height: isClient ? window.innerHeight : 0,
      });
    }

    const throttleHandleResize = throttle(handleResize, throttleDelay);

    window.addEventListener('resize', throttleHandleResize);

    throttleHandleResize();

    return () => window.removeEventListener('resize', throttleHandleResize);
  }, [throttleDelay]);

  return windowSize;
}

export default useWindowSize;
