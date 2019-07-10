import { useRef, useEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';
import useSSR from 'use-ssr';
import { isHTMLElement } from '../../common/utils';

export const Portal: React.FC = ({ children }) => {
  const { isServer, isBrowser } = useSSR();
  const portal = useRef(isBrowser && document.createElement('div'));
  const elToMountTo = useMemo(() => {
    return isBrowser ? document.body : undefined;
  }, [isBrowser]);

  useEffect(() => {
    if (isBrowser && !portal.current) {
      portal.current = document.createElement('div');
    }
  }, [isBrowser]);

  useEffect(() => {
    if (isServer || !isHTMLElement(elToMountTo) || !isHTMLElement(portal.current)) {
      return;
    }

    elToMountTo.appendChild(portal.current);

    // eslint-disable-next-line consistent-return
    return function cleanup() {
      if (isHTMLElement(portal.current)) {
        elToMountTo.removeChild(portal.current);
      }
    };
  }, [isServer, elToMountTo]);

  return isHTMLElement(portal.current) ? createPortal(children, portal.current) : null;
};
