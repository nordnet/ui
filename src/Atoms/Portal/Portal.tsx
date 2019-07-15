import { useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import useSSR from 'use-ssr';
import { isHTMLElement, isUndefined } from '../../common/utils';
import { Props } from './Portal.types';

export const Portal: React.FC<Props> = ({ children, attachTo }) => {
  const { isServer } = useSSR();
  const portal = useRef(document.createElement('div'));

  useEffect(() => {
    const elToMountTo = isUndefined(attachTo) ? document.body : attachTo;

    if (isServer || !isHTMLElement(elToMountTo)) {
      return;
    }

    const portalNode = portal.current;

    elToMountTo.appendChild(portalNode);

    // eslint-disable-next-line consistent-return
    return function cleanup() {
      if (isHTMLElement(portalNode)) {
        elToMountTo.removeChild(portalNode);
      }
    };
  }, [attachTo, isServer]);

  return isHTMLElement(portal.current) ? createPortal(children, portal.current) : null;
};
