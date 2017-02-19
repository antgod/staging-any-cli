'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var CUSTOM_SCHEMA = exports.CUSTOM_SCHEMA = {
  properties: {
    device: {
      description: '设备(pc/mobile)',
      pattern: /^pc$|^mobile$/,
      message: '设备必须是pc/mobile中之一，且不能为空',
      required: true
    },
    directory: {
      description: '本地目录',
      pattern: /^[a-zA-Z\-\_\d]+$/,
      message: '目录只能包含字母/数字/下划线/中划线，且不能为空',
      required: true
    }
  }
};