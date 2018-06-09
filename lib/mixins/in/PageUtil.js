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

function getSetting(comp) {
  return getAppGD(comp).setting;
}

function getAppConfig(comp) {
  return getAppGD(comp).langhelper.getLang();
}

function getWxHelper(comp) {
  return getAppGD(comp).langhelper.getLang().wxhelper;
}

function shiftLang(comp) {
  return getAppGD(comp).langhelper.next();
}

function readGlobal(comp) {
  const APP = getApp(comp);
  const GD = getAppGD(comp);
  comp.APP = APP;
  comp.GD = GD;
  comp.UT = GD.UT;
  comp.logger = GD.logger;
  // 多语言环境
  if (GD.langhelper) {
    comp.setting = GD.setting;
    comp.config = GD.langhelper.getLang();
    comp.wxhelper = GD.langhelper.getLang().wxhelper;
    comp.curLangId = GD.setting.getValue('lang');
  } else { // 单一语言环境.
    comp.config = GD.gconfig;
  }
}

export default {
  getApp,
  getAppGD,
  getAppUT,
  getAppConfig,
  getSetting,
  getWxHelper,
  readGlobal,
  shiftLang
};
