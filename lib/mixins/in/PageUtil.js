/**
 * @file PageUtil.js
 * @description 页面相关公共方法
 */

function getApp(comp) {
  let par = comp.$parent;
  for (let i = 0; i < 100; ++i) { // 再BT也不会有100层吧.
    if (par.$parent === undefined) {
      break;
    }
    par = par.$parent;
  }
  return par;
}

function getAppGD(comp) {
  let app = getApp(comp);
  let gd = app.GD;
  if (!gd) {
    gd = app.globalData;
  }
  return gd;
}

function getAppUT(comp) {
  return getAppGD(comp).UT;
}

function getAppConfig(comp) {
  return getAppGD(comp).gconfig;
}

export default {
  getApp,
  getAppGD,
  getAppUT,
  getAppConfig
};
