import { configure, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { ThemeDecorator } from './ThemeDecorator';
import { setIntlConfig, withIntl } from 'storybook-addon-intl';
// automatically import all files ending in *.stories.tsx
const req = require.context('../src', true, /.stories.tsx$/);

function loadStories() {
  req.keys().forEach(req);
}

addDecorator(withInfo({ propTables: null, header: false }));
addDecorator(ThemeDecorator);

setIntlConfig({
  locales: ['sv', 'nb', 'dk', 'fi', 'en'],
  defaultLocale: 'sv',
  getMessages: () => {},
  getFormats: () => {},
});

addDecorator(withIntl);

configure(loadStories, module);
