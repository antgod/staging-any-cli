'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _prompt = require('prompt');

var _prompt2 = _interopRequireDefault(_prompt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (schema) {
  return new Promise(function (res, rej) {
    _prompt2.default.start();
    _prompt2.default.get(schema, function (error, result) {
      if (error) {
        console.log(error);
        rej(error);
      }
      res(result);
    });
  });
};