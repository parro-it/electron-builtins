# electron-builtins

> List of the Electron builtin modules.

This module returns an array of builtin modules of [Electron framework](https://github.com/electron/electron).

[![Travis Build Status](https://img.shields.io/travis/parro-it/electron-builtins.svg)](http://travis-ci.org/parro-it/electron-builtins)
[![NPM module](https://img.shields.io/npm/v/electron-builtins.svg)](https://npmjs.org/package/electron-builtins)
[![NPM downloads](https://img.shields.io/npm/dt/electron-builtins.svg)](https://npmjs.org/package/electron-builtins)

# Installation

```bash
npm install --save electron-builtins
```

# Usage

```js
const builtinModules = require('electron-builtins');
console.log(builtinModules);
//=> ['app', 'browser-window', ...]
```

# Related

- [is-builtin-module](https://github.com/sindresorhus/is-builtin-module) - Check if a string matches the name of a Node.js builtin module.
- [builtin-module](https://github.com/sindresorhus/builtin-module) - List of the Node.js builtin modules.
- [is-electron-builtin](https://github.com/parro-it/is-electron-builtin) - Check if a string matches the name of a Electron builtin module.

# License

[MIT](license) © 2016 [Andrea Parodi](..)
