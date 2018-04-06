/**
 * @file wxapp
 * @description 微信相关封装
 */
import wepy from 'wepy';

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
 * 对外接口
 * @type {Object}
 */
module.exports = {
  // 用户交互
  msgBox,
  showToast,
  showLoading,
  showSuccToast,
  showLoadingToast,
  hideLoading,

  // 微信逻辑
  redirect,
  showErrorToast,
  openWXSetting,
  getWXSetting,
  checkSession: wepy.checkSession
};
