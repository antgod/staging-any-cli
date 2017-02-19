"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var promiseChain = exports.promiseChain = function promiseChain(currentPromise) {
  for (var _len = arguments.length, nextPromise = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    nextPromise[_key - 1] = arguments[_key];
  }

  return Promise.resolve(currentPromise && currentPromise().then(function () {
    return nextPromise.length > 0 && promiseChain.apply(undefined, nextPromise);
  }));
};