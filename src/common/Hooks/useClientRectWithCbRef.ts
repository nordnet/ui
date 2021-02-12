import { useCallback, useState, useEffect } from 'react';

type T = (dependancy: any) => [ClientRect | null, (node: any) => void];

const useClientRectWithCbRef: T = (dependency) => {
  const [rect, setRect] = useState<ClientRect | null>(null);
  const [nodeEl, setNodeEl] = useState<HTMLElement | null>(null);

  const ref = useCallback((node) => {
    if (node !== null) {
      setNodeEl(node);
    }
  }, []);

  // update rect calculations when dependency changes
  useEffect(() => {
    if (nodeEl) {
      setRect(nodeEl.getBoundingClientRect());
    }
  }, [nodeEl, dependency]);

  return [rect, ref];
};

export default useClientRectWithCbRef;
