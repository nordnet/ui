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
