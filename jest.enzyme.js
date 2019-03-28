const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');
const registerRequireContextHook = require('babel-plugin-require-context-hook/register');

registerRequireContextHook();

Enzyme.configure({ adapter: new Adapter() });
