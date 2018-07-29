# Big Sum [![License][LicenseIMGURL]][LicenseURL] [![NPM version][NPMIMGURL]][NPMURL] [![Dependency Status][DependencyStatusIMGURL]][DependencyStatusURL] [![Build Status][BuildStatusIMGURL]][BuildStatusURL]

Sum array representation of big numbers.

## Install

```
npm i big-sum --save
```

## How to use?

```js
const bigSum = require('big-sum');

bigSum([1, 9], [2, 9])
// 48

const {rawSum} = require('big-sum');
const bigWrap = require('big-wrap');

rawSum([1, 9], [2, 9]);
// [3, 18]

bigWrap([3, 18])
// 48

```

## Environments

In old `node.js` environments that not fully supports `es2015`, `big-sum` could be used with:

```js
var bigSum = require('big-sum/legacy');
```

## Related

- [big-wrap](https://github.com/coderaiser/big-sum "Big Sum") - wrap array representation of big numbers
- [big-mul](https://github.com/coderaiser/big-mul "Big Mul") - multiply array representation of big numbers

## License

MIT

[NPMIMGURL]:                https://img.shields.io/npm/v/big-sum.svg?style=flat&longCache=true
[BuildStatusIMGURL]:        https://img.shields.io/travis/coderaiser/big-sum/master.svg?style=flat&longCache=true
[DependencyStatusIMGURL]:   https://img.shields.io/david/coderaiser/big-sum.svg?style=flat&longCache=true
[LicenseIMGURL]:            https://img.shields.io/badge/license-MIT-317BF9.svg?style=flat&longCache=true
[NPMURL]:                   https://npmjs.org/package/big-sum "npm"
[BuildStatusURL]:           https://travis-ci.org/coderaiser/big-sum  "Build Status"
[DependencyStatusURL]:      https://david-dm.org/coderaiser/big-sum "Dependency Status"
[LicenseURL]:               https://tldrlegal.com/license/mit-license "MIT License"

