import { useCallback } from 'react';
import { isIE } from '../utils';

function useIsIE() {
  const isIEBrowser = useCallback(() => isIE(), []);
  return isIEBrowser;
}

export default useIsIE;
