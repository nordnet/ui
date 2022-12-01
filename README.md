# @nordnet/ui

[![NPM version][npm-image]][npm-url]
[![Build Status](https://github.com/nordnet/ui/workflows/build/badge.svg)](https://github.com/nordnet/ui/actions)
[![Coverage Status][codecov-image]][codecov-url]
[![Dependency Status][depstat-image]][depstat-url]

## Installation

```bash
npm install --save @nordnet/ui # or
yarn add @nordnet/ui
```

## Usage

```javascript
// src/root.js
import { ThemeProvider } from 'styled-components';
import { theme } from '@nordnet/ui';
import App from './App';

const Root = (
  <ThemeProvider theme={theme}>
    <App/>
  </ThemeProvider>
);
ReactDOM.render(Root, document.getElementById('app'));

// src/App.js
import { Button } from '@nordnet/ui';

const App = (props) => (
  <div>
    <Button size="l" variant="secondary">
      Hit me
    </Button>
  </div>
);

export default App;
```

## Developing

Developing workflow can be found in the [contributing guidelines](CONTRIBUTING.md).

## Contributing

Everyone is welcome to contribute. Please take a moment to review the [contributing guidelines](CONTRIBUTING.md).

## Upgrading from `semantic-release@16.0.0-beta.18`

To upgrade to latest `17.1.1` you need to upgrade away from `beta` first:

- https://github.com/semantic-release/semantic-release/releases/tag/v16.0.0

  This is the most troublesome part:

  > ⚠️ For v16.0.0@beta users only:
  > In v16, a JSON object stored in a Git note is used to keep track of the channels on which a version has been released, the @{channel} suffix is no longer necessary.

  and it essentially will ask you to fix some git internals yourself, but there is a better
  way. [v16.0.0-beta.39 release notes](https://github.com/semantic-release/semantic-release/releases/tag/v16.0.0-beta.39)
  offers a script in this gist file https://gist.github.com/pvdlg/6b19e529ee5c1a20645675a44e5b3239. You will have to go
  through it and make it work.

- https://github.com/semantic-release/semantic-release/releases/tag/v17.0.0

  afaik, it only seems to drop support for non-lts node 10

## License

This open source project released by Nordnet is licensed under the MIT license.

MIT (http://www.opensource.org/licenses/mit-license.php)

[npm-url]: https://npmjs.org/package/@nordnet/ui

[npm-image]: https://img.shields.io/npm/v/@nordnet/ui/latest.svg

[travis-url]: https://travis-ci.com/nordnet/ui/

[travis-image]: https://img.shields.io/travis/com/nordnet/ui.svg?style=flat-square

[codecov-url]: https://codecov.io/gh/nordnet/ui

[codecov-image]: https://img.shields.io/codecov/c/github/nordnet/ui.svg?style=flat-square

[depstat-url]: https://david-dm.org/nordnet/ui

[depstat-image]: https://david-dm.org/nordnet/ui.svg?style=flat-square
