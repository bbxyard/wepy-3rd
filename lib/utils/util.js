/**
 * @name 全局对外工具接口
 * @description 3rd基础库
 */

// 公共工具集
const misc = require('./com/misc'); // 杂项
const strfmt = require('./com/strfmt'); // 字符串格式化
const log = require('./com/logger'); // 日志

/**
 * 快捷接口
 * @param {*} args 
 */
function debugLog(...args) {
  console.log(...args);
}
function traceLog(...args) {
  console.log(...args);
}

/**
 * @name 对外接口
 * @type {Object}
 */
const UT = Object.assign(
  {},
  misc,
  strfmt,
  log,

  // 快捷接口
  debugLog,
  traceLog
);
module.exports = UT;
