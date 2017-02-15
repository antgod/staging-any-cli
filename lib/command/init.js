'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  (0, _co2.default)(regeneratorRuntime.mark(function _callee() {
    var gitlab, name, input, projectName, gitSource, cmd;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            gitlab = _templates2.default.gitlab, name = _templates2.default.name, input = _templates2.default.input;
            _context.next = 3;
            return (0, _coPrompt2.default)(input);

          case 3:
            projectName = _context.sent;
            gitSource = gitlab[name];
            cmd = generatorCode();


            console.log(_chalk2.default.yellow('\n 开始生成用户自定义组件脚手架'));

            (0, _child_process.exec)(cmd.gitClone({ gitSource: gitSource, projectName: projectName }), function (error) {
              if (error) {
                console.log(error);
                process.exit();
              }
              console.log(_chalk2.default.green('\n √ 用户自定义组件脚手架生成完毕'));

              (0, _child_process.exec)(cmd.npmInstall(), function (error) {
                if (error) {
                  console.log(error);
                }
                process.exit();
              });
            });

          case 8:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
};

require('babel-polyfill');

var _child_process = require('child_process');

var _co = require('co');

var _co2 = _interopRequireDefault(_co);

var _coPrompt = require('co-prompt');

var _coPrompt2 = _interopRequireDefault(_coPrompt);

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

var _templates = require('../../config/templates.json');

var _templates2 = _interopRequireDefault(_templates);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var generatorCode = function generatorCode() {
  return {
    gitClone: function gitClone(_ref) {
      var gitSource = _ref.gitSource,
          projectName = _ref.projectName;
      return 'git clone ' + gitSource + ' ' + projectName + ' && cd ' + projectName;
    },
    npmInstall: function npmInstall() {
      return 'tnpm i';
    }
  };
};