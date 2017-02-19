'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _child_process = require('child_process');

var execStart = '执行开始';
var execEnd = '执行完毕';

exports.default = function (_ref) {
  var cmd = _ref.cmd,
      msg = _ref.msg,
      cwd = _ref.cwd;
  return function () {
    return new Promise(function (res) {
      console.log([msg, execStart].join(' '));
      (0, _child_process.exec)(cmd, {
        cwd: cwd || process.cwd(),
        env: process.env
      }, function (error, stdout) {
        if (error) {
          console.log(error);
          process.exit();
        }
        console.log([msg, execEnd].join(' '));
        res(stdout);
      });
    });
  };
};