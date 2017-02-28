'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _child_process = require('child_process');

exports.default = function (_ref) {
  var cmd = _ref.cmd,
      cwd = _ref.cwd;
  return function () {
    return new Promise(function (res) {
      // console.log([msg, execStart].join(' '))
      (0, _child_process.exec)(cmd, {
        cwd: cwd || process.cwd(),
        env: process.env
      }, function (error, stdout) {
        if (error) {
          /*eslint-disable*/
          console.log(error);
          process.exit();
        }
        // console.log([msg, execEnd].join(' '))
        res(stdout);
      });
    });
  };
};