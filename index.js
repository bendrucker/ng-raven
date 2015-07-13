'use strict'

var angular = require('angular')
var Raven = require('raven-js')

module.exports = angular.module('ngRaven', [])
  .config(registerDecorator)
  .name

registerDecorator.$inject = ['$provide']
function registerDecorator ($provide) {
  $provide.decorator('$exceptionHandler', ngRavenExceptionHandler)
}

decorateExceptionHandler.$inject = ['$delegate']
function decorateExceptionHandler ($exceptionHandler) {
  return function angularExceptionHandler (err, cause) {
    $exceptionHandler(err, cause)
    Raven.captureException(err, {extra: {cause: cause}})
  }
}
