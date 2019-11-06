import React from 'react';

const isNode = require('is-node');

const NoSSR: React.FC<{ onSSR?: React.ReactElement }> = ({ children, onSSR }) => {
  if (isNode) {
    return onSSR || null;
  }

  return <>{children}</>;
};

export default NoSSR;
