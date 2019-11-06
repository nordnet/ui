import React, { useState, useEffect } from 'react';

const isNode = require('is-node');

const NoSSR: React.FC<{ onSSR?: React.ReactElement }> = ({ children, onSSR }) => {
  const [isSSR, setIsSSR] = useState(isNode);
  useEffect(() => {
    setIsSSR(isNode);
  }, []);

  if (isSSR) {
    return onSSR || null;
  }

  return <>{children}</>;
};

export default NoSSR;
