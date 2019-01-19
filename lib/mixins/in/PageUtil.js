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
  if (comp.APP) {
    return; // 已设置过了，直接返回.
  }
  const APP = getApp(comp);
  const GD = getAppGD(comp);
  comp.APP = APP;
  comp.GD = GD;
  comp.UT = GD.UT;
  comp.API = GD.API;
  comp.logger = GD.logger;
  comp.session = GD.session;
  comp.cart = GD.session.getCart();
  // 多语言环境
  if (GD.langhelper) {
    comp.setting = GD.setting;
    comp.config = GD.langhelper.getLang();
    comp.wxhelper = GD.langhelper.getLang().wxhelper;
    comp.curLangId = GD.setting.getValue('lang');
    // 快捷函数
    comp.showSuccTips = comp.wxhelper.showSuccTips;
    comp.showErrorTips = comp.wxhelper.showErrorTips;
    comp.showAlertTips = comp.wxhelper.showAlertTips;
  } else { // 单一语言环境.
    comp.config = GD.gconfig;
  }
  // v1版本添加 by boxu@2018.10.22
  if (GD.counter) {
    // comp.doIncMisc = GD.counter.doIncMisc.bind(GD.counter);
    comp.incGoods = GD.counter.incGoods.bind(GD.counter);
    comp.incShop = GD.counter.incShop.bind(GD.counter);
    comp.incUser = GD.counter.incUser.bind(GD.counter);
  }
  if (GD.sysres) {
    comp.queryRes = GD.sysres.query.bind(GD.sysres);
    comp.flushRes = GD.sysres.flush.bind(GD.sysres);
  }
  // v1.1 版本扩展 by boxu@2019.01.19
  if (GD.session.getAuthedUserInfo) {
    comp.getAuthedUserInfo = GD.session.getAuthedUserInfo.bind(GD.session);
    comp.isLoginAuthed = GD.session.isLoginAuthed.bind(GD.session);
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
