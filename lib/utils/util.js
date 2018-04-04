/**
 * @name 全局对外工具接口
 * @description 3rd基础库
 */

// 公共工具集
const misc = require('./com/misc'); // 杂项
const log = require('./com/logger'); // 日志

/**
 * @name 对外接口
 * @type {Object}
 */
const UT = Object.assign(
  {},
  misc,
  log
);
module.exports = UT;
