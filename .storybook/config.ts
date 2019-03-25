import { configure, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { ThemeDecorator } from './ThemeDecorator';
// automatically import all files ending in *.stories.tsx
const req = require.context('../src', true, /.stories.tsx$/);

function loadStories() {
  req.keys().forEach(req);
}

addDecorator(withInfo({ propTables: null, header: false }));
addDecorator(ThemeDecorator);
configure(loadStories, module);
