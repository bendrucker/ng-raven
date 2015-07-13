# ng-raven [![Build Status](https://travis-ci.org/bendrucker/ng-raven.svg?branch=master)](https://travis-ci.org/bendrucker/ng-raven)

> Minimal CommonJS implementation of Raven + Angular


## Install

```
$ npm install --save raven-js ng-raven
```


## Usage

raven-js is a peer dependency of ng-raven. ng-raven has no API of its own. You register it and it captures exceptions from [$exceptionHandler](https://docs.angularjs.org/api/ng/service/$exceptionHandler). You are responsible for configuring Raven yourself. Nothing is added to Angular's DI system. `require('raven-js')` directly when you need it. 

```js
var angular = require('angular')
var Raven = require('raven-js')
var ngRaven = require('ng-raven')

Raven.config({...}).install()

angular.module('myApp', [ngRaven])
```


## License

MIT © [Ben Drucker](http://bendrucker.me)
