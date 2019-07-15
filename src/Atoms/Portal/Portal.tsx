import { useRef, useEffect, useMemo } from 'react';
import { createPortal, findDOMNode } from 'react-dom';
import useSSR from 'use-ssr';
import { isHTMLElement, isUndefined } from '../../common/utils';
import { Props } from './Portal.types';

export const Portal: React.FC<Props> = ({ children, attachTo }) => {
  const { isServer, isBrowser } = useSSR();
  const portal = useRef(isBrowser && document.createElement('div'));
  const elToMountTo = useMemo(() => {
    if (isServer) {
      return null;
    }

    // ref's  are usually null on init
    if (!isUndefined(attachTo)) {
      // dont render if attachTo is specified but not a real HTMLElement
      return findDOMNode(attachTo) ? attachTo : null;
    }

    return document.body;
  }, [attachTo, isServer]);

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
