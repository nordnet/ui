import { useCallback, useState, useEffect } from 'react';

function useClientRectWithCbRef(dependency) {
  const [rect, setRect] = useState(null);
  const [nodeEl, setNodeEl] = useState(null);

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
}

export default useClientRectWithCbRef;
