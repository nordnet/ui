import { useEffect, useState } from 'react';

const useKeyPress = (targetKey: string) => {
  const [keyPressed, setKeyPressed] = useState(false);

  const downHandler = (e: KeyboardEvent) => {
    if (e.key === targetKey) {
      setKeyPressed(true);
    }
  };

  const upHandler = (e: KeyboardEvent) => {
    if (e.key === targetKey) {
      setKeyPressed(false);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', downHandler);
    window.addEventListener('keyup', upHandler);

    return () => {
      // Remove event listeners on cleanup
      window.removeEventListener('keydown', downHandler);
      window.removeEventListener('keyup', upHandler);
    };
  }, []); // Empty array makes effect only run on mount and unmount

  return keyPressed;
};

export default useKeyPress;
