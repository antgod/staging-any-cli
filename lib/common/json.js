'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

module.exports = {
  stringify: function stringify(data, space) {
    var seen = [];
    return JSON.stringify(data, function (key, val) {
      if (!val || (typeof val === 'undefined' ? 'undefined' : _typeof(val)) !== 'object') {
        return val;
      }
      if (seen.indexOf(val) !== -1) {
        return '[Circular]';
      }
      seen.push(val);
      return val;
    }, space);
  }
};