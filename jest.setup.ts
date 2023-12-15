import { TextEncoder } from 'util';

global.TextEncoder = TextEncoder; // https://github.com/inrupt/solid-client-authn-js/issues/1676#issuecomment-1617024437

jest.mock('framer-motion', () => {
  const React = require('react'); // eslint-disable-line global-require
  const Dummy = (type = React.Fragment) => ({ children }) =>
    React.createElement(type, {}, ...(Array.isArray(children) ? children : [children]));

  return {
    motion: {
      span: Dummy('span'),
      div: Dummy('div'),
      section: Dummy('section'),
    },
    AnimatePresence: Dummy(),
  };
});
