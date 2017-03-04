'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.customSchema = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

require('babel-polyfill');

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _util = require('../common/util');

var _cmd = require('../common/cmd');

var _cmd2 = _interopRequireDefault(_cmd);

var _prompt = require('../common/prompt');

var _prompt2 = _interopRequireDefault(_prompt);

var _json = require('../common/json');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var initCommands = function initCommands(commands) {
  return commands.map(function (command) {
    return (0, _cmd2.default)(command);
  });
};

var customSchema = exports.customSchema = {
  properties: {
    device: {
      description: '设备(pc/mobile)',
      pattern: /^pc$|^mobile$/,
      message: '设备必须是pc/mobile中之一，且不能为空',
      required: true
    },
    directory: {
      description: '发布包名',
      /*eslint-disable*/
      pattern: /^[a-zA-Z\-\_\d]+$/,
      message: '目录只能包含字母/数字/下划线/中划线，且不能为空',
      required: true
    }
  }
};

var parseCommands = function parseCommands(gitUrl, directory) {
  return [{
    cmd: 'git clone ' + gitUrl + ' ' + directory
  }, {
    cmd: 'rm -rf ./.git',
    cwd: _path2.default.join(process.cwd(), directory)
  }];
};

var generatorProject = function () {
  var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(config) {
    var custom, source, customComponents, customs, device, directory, gitUrl, updatePackageName;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            custom = config.custom, source = config.source;
            customComponents = source[custom];
            _context.next = 4;
            return (0, _prompt2.default)(customSchema);

          case 4:
            customs = _context.sent;
            device = customs.device, directory = customs.directory;
            gitUrl = customComponents[device];


            console.log('自定义组件配置开始');

            updatePackageName = function updatePackageName() {
              var packageJSON = require(_path2.default.join(process.cwd(), directory, 'package'));
              var newPackageStr = (0, _json.stringify)(_extends({}, packageJSON, { name: directory }), 2);
              _fs2.default.writeFileSync(_path2.default.join(process.cwd(), directory, 'package.json'), newPackageStr);
            };

            _util.promiseChain.apply(undefined, _toConsumableArray(initCommands(parseCommands(gitUrl, directory)))).then(updatePackageName).then(function () {
              return console.log('自定义组件配置结束');
            });

          case 10:
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