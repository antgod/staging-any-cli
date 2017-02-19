'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

require('babel-polyfill');

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _util = require('../common/util');

var _cmd = require('../common/cmd');

var _cmd2 = _interopRequireDefault(_cmd);

var _prompt = require('../common/prompt');

var _prompt2 = _interopRequireDefault(_prompt);

var _constant = require('../common/constant');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var parseCommands = function parseCommands(gitUrl, directory) {
  return [{
    cmd: 'git clone ' + gitUrl + ' ' + directory,
    msg: '下载脚手架'
  }, {
    cmd: 'rm -rf ./.git',
    cwd: _path2.default.join(process.cwd(), directory),
    msg: '删除git配置文件'
  }];
};

var initCommands = function initCommands(commands) {
  return commands.map(function (command) {
    return (0, _cmd2.default)(command);
  });
};

var generatorProject = function () {
  var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(config) {
    var custom, source, customComponents, customs, device, directory, gitUrl;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            custom = config.custom, source = config.source;
            customComponents = source[custom];
            _context.next = 4;
            return (0, _prompt2.default)(_constant.CUSTOM_SCHEMA);

          case 4:
            customs = _context.sent;
            device = customs.device, directory = customs.directory;
            gitUrl = customComponents[device];


            _util.promiseChain.apply(undefined, _toConsumableArray(initCommands(parseCommands(gitUrl, directory))));

          case 8:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function generatorProject(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.default = generatorProject;