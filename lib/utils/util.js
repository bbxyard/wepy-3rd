import wepy from 'wepy';

/**
 * @name 日志功能
 * @param {String} prompt 
 * @param {String} msg 
 */
function debugPrint(prompt, msg) {
  console.log(prompt, msg);
}

function debugLog(prompt, msg) {
  console.log(prompt, msg);
}

function traceLog(prompt, msg) {
  console.log(prompt, msg);
}

/**
 * @name 用户交互
 * @param {String} title 
 * @param {String} msg 
 * @param {Boolean} showCancel 
 * @param {Function} cb 
 */
function msgBox(title, msg, showCancel, cb) {
  showCancel = showCancel || false;
  cb = cb || null;
  wepy.showModal({
    title: title,
    content: msg,
    showCancel: showCancel,
    success: cb
  });
}

function showToast(title, timeout) {
  if (null === timeout) timeout = 3000;
  setTimeout(function(){
    wepy.showToast({
      title: title,
      //duration: timeout,
      mask: true
    })
  }, timeout);

}

function showLoading(title, timeout) {
  if (null === timeout) timeout = 1000;
  if (wepy.showLoading) {
    wepy.showNavigationBarLoading();
    wepy.showLoading({ title: title, mask: true });
    setTimeout( function() { hideLoading("TIMEOUT") }, timeout);
  }
}

function showSuccToast(title, dur) {
  if (null === dur) dur = 3000;
  wepy.showToast({
    title: title,
    icon: 'success',
    duration: dur,
    mask: true
  });
}

function showLoadingToast(title, dur) {
  if (null === dur) dur = 3000;
  wepy.showToast({
    title: title,
    icon: 'loading',
    duration: dur,
    mask: true
  })
}

function hideLoading(reason) {
  wepy.hideLoading();
  wepy.hideNavigationBarLoading();
}

function toString16(n, pad_digit) {
  var s = "00000000" + n.toString(16).toUpperCase();
  var r = s.slice(pad_digit * (-1));
  return r;
}

function pad0(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

function atof2(str) {
  if (typeof str != "string") {
    return str;
  }
  var re = /([0-9]+.[0-9]{2})[0-9]*/;
  var fval = str.replace(re,"$1");
  return parseFloat(fval);
}

function getRandom(N) {
  return 1 + Math.floor(Math.random() * N);
}

function getUnixTSmsec(dt) {
  dt = dt || (new Date());
  var msec = dt.getTime();
  return msec;
}

function getUnixTS(dt) {
  let sec = Math.round(getUnixTSmsec(dt) / 1000);
  return sec;
}

function UnixTS2DateTime(stamp) {
  let dt = new Date();
  dt.setTime(stamp * 1000);
  return dt;
}
function UnixTS2DateTimeHRStr(stamp) {
  let dt = UnixTS2DateTime(stamp);
  return genDataTimeHRStr(dt);
}

function genDataTimeHRStr(date) {
  var year    = date.getFullYear();
  var month   = date.getMonth() + 1;
  var day     = date.getDate();
  var hour    = date.getHours();
  var minute  = date.getMinutes();
  var second  = date.getSeconds();
  return [year, month, day].map(pad0).join('-') + ' ' +
         [hour, minute, second].map(pad0).join(':');
}

function genDateTimeStr(sep, prefix, suffix) {
  sep    = sep || "";
  prefix = prefix || "";
  suffix = suffix || "";
  var date    = new Date();
  var year    = toString16(date.getFullYear(), 4);
  var month   = toString16(date.getMonth() + 1, 2);
  var day     = toString16(date.getDate(), 2);
  var hour    = toString16(date.getHours(), 2);
  var minute  = toString16(date.getMinutes(), 2);
  var second  = toString16(date.getSeconds(), 2);
  var msec    = toString16(date.getMilliseconds(), 2);
  var mid = [year, month + day, hour + minute, second + msec].map(pad0).join(sep);
  var out = prefix + mid + suffix;
  return out;
}

/**
 * @name 计算与当前时间差
 * @param {UnixTS} timestamp 
 */
function getTimeDiff(timestamp) {
  let currentTime = (new Date()).getTime();
  let dur = currentTime - timestamp * 1000;
  if (dur < 0) return null;

  let hour = Math.floor(dur / (1000 * 60 * 60));
  let min = Math.floor(dur / (1000 * 60) % 60);
  let sec = Math.floor(dur / 1000 % 60);
  let day = Math.floor(hour / 24);
  let week = Math.floor(day / 7);
  let month = Math.floor(day / 30);
  let year = Math.floor(day / 365);

  const info = { y: year, m: month, w: week, d: day, H: hour, M: min, S: sec};
  const nArr = [year, month, week, day, hour, min, sec];
  const cnArr = ['年', '月', '周', '天', '小时', '分钟', '秒'].map(item => item + '前');
  const enArr = ['year(s)', 'month(s)', 'week(s)', 'day(s)', 'hour(s)', 'minute(s)', 'second(s)'].map((item) => item + " ago" );
  // 找到第一个不为0的即可.
  let diff = {info: info, cn: '刚刚', en: 'just'};
  for (let i = 0; i < nArr.length; ++i) {
    if (nArr[i] > 0) {
      diff.cn = nArr[i] + cnArr[i];
      diff.en = nArr[i] + ' ' + enArr[i];
      break;
    }
  }
  return diff;
}

function getTimeDiffCN(timestamp) {
  const diff = getTimeDiff(timestamp);
  const newDiff = { info: diff.info, desc: diff.cn };
  return newDiff;
}

function getTimeDiffEN(timestamp) {
  const diff = getTimeDiff(timestamp);
  const newDiff = { info: diff.info, desc: diff.en };
  return newDiff;
}

/**
 * redirect Url
 * @param  {[type]} url [description]
 * @return {[type]}     [description]
 */
function redirect(url) {
  // 判断页面是否需要登录
  const needLogin = false;
  if (needLogin) {
    wepy.redirectTo({
      url: '/pages/auth/login/login'
    });
    return false;
  } else {
    wepy.redirectTo({url: url});
  }
}

/**
 * [showErrorToast description]
 * @param  {[type]} msg [description]
 * @return {[type]}     [description]
 */
function showErrorToast(msg) {
  wepy.showToast({
    title: msg,
    image: '/static/images/icon_error.png'
  });
}

function isUIAdvMode() {
  const userInfo = wepy.getStorageSync('userInfo');
  const ret = ((userInfo != null) && (typeof (userInfo) === 'object'));
  return ret;
}

async function openWXSetting() {
  const res = await wepy.openSetting();
  console.log('[System][wepy.openSetting]: ', res);
  return res;
}

async function getWXSetting() {
  const res = await wepy.getSetting();
  console.log('[System][wepy.getSetting]: ', res);
  return res;
}

/**
 * @name 获得文件扩展名
 * @param {String} pathname 路径
 */
function pathName2ExtName(pathname) {
  var extension = /\.([^.]*)$/.exec(pathname);
  if (extension) {
    extension = extension[1].toLowerCase();
  }
  return extension;
}

/**
 * @name 周期性任务
 * @param cb
 * @param interval
 * @constructor
 */
function CycleTask() {
  this.start = function(cb, interval) {
    this.timer     = null;
    this.interval  = interval || 1000;
    this.timer = setInterval(cb, this.interval);
  };
  this.stop = function() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  };
}

/**
 * 对外接口
 * @type {Object}
 */
module.exports = {
  // log日志
  debugPrint,
  debugLog,
  traceLog,

  // 用户交互
  msgBox,
  showToast,
  showLoading,
  showSuccToast,
  showLoadingToast,
  hideLoading,

  // 数字、串处理
  toString16,
  pad0,
  atof2,
  getRandom,

  // 时间日期
  getUnixTSmsec,
  getUnixTS,
  getTimeDiff,
  getTimeDiffCN,
  getTimeDiffEN,
  UnixTS2DateTime,
  UnixTS2DateTimeHRStr,
  genDataTimeHRStr,
  genDateTimeStr,

  // 文件路径
  pathName2ExtName,

  // 任务相关
  CycleTask,

  // 微信逻辑
  redirect,
  isUIAdvMode,
  showErrorToast,
  openWXSetting,
  getWXSetting,
  checkSession: wepy.checkSession
  // getUserInfo: http.getUserInfo,
  // getUserInfoEx: http.getUserInfoEx,
  // loginAndVerify: http.loginAndVerify,

  // // http处理
  // request: http.request,
  // Requester: http.Requester,
  // quickRequest: http.quickRequest
};
