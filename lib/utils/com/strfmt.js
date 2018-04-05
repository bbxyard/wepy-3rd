/**
 * @file strfmt
 * @description 字符串格式化
 */
import {sprintf, vsprintf} from 'sprintf-js';
import {genDataTimeHRStr} from './misc';

/**
 * @name tsprintf
 * @description time-sprintf
 * @param {Object} obj {level: info, errno, subject, prompt}
 */
function tsprintf(obj) {
  let stime = genDataTimeHRStr();
  let combFmt = '%s';
  let combArgs = [stime];
  if (obj.level) {
    combFmt += ' | %s';
    combArgs.push(obj.level.toUpperCase());
  }
  if (obj.subject) {
    combFmt += ' | %s';
    combArgs.push(obj.subject);
  }
  if (obj.errno !== undefined) {
    combFmt += (obj.errno === 0) ? ' | SUCC' : ` | FAIL=${obj.errno}`;
  }
  if (obj.prompt) {
    combFmt += ' | ' + obj.prompt;
    combArgs = combArgs.concat(obj.args);
  }
  let s = vsprintf(combFmt, combArgs);
  return s;
}
function tsprintf2(prompt, ...args) {
  return tsprintf({prompt, args});
}
function tsprintf3(level, prompt, ...args) {
  return tsprintf({level, prompt, args});
}
function tsprintf4(subject, level, prompt, ...args) {
  return tsprintf({subject, level, prompt, args});
}
function tsprintf5(errno, subject, level, prompt, ...args) {
  return tsprintf({errno, subject, level, prompt, args});
}

/**
 * @name jtsprintf
 * @description json-time-sprintf
 * @param {Object} obj {level: info, errno, subject, prompt}
 */
function jtsprintf(obj) {
  let stime = genDataTimeHRStr();
  let res = {stime: stime};
  if (obj.level) {
    res.level = obj.level.toUpperCase();
  }
  if (obj.prompt) {
    res.content = vsprintf(obj.prompt, obj.args);
  }
  if (obj.errno !== null) {
    res.errno = obj.errno;
    res.errmsg = (obj.errno === 0) ? 'SUCC' : `FAIL=${obj.errno}`;
  }
  if (obj.subject) {
    res.subject = obj.subject;
  }
  return res;
}
function jtsprintf2(prompt, ...args) {
  return jtsprintf({prompt, args});
}
function jtsprintf3(level, prompt, ...args) {
  return jtsprintf({level, prompt, args});
}
function jtsprintf4(subject, level, prompt, ...args) {
  return jtsprintf({subject, level, prompt, args});
}
function jtsprintf5(errno, subject, level, prompt, ...args) {
  return jtsprintf({errno, subject, level, prompt, args});
}

/**
 * @description 对外接口
 */
module.exports = {
  sprintf: sprintf,

  // 带时间日期plain字符串版本
  tsprintf: tsprintf,
  tsprintf2: tsprintf2,
  tsprintf3: tsprintf3,
  tsprintf4: tsprintf4,
  tsprintf5: tsprintf5,

  // 带时间日期json对象版本.
  jtsprintf: jtsprintf,
  jtsprintf2: jtsprintf2,
  jtsprintf3: jtsprintf3,
  jtsprintf4: jtsprintf4,
  jtsprintf5: jtsprintf5
};
