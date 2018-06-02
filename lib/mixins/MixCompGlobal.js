import wepy from 'wepy';
import PUT from './in/PageUtil';
export default class MixCompGlobal extends wepy.mixin {
  data = {
    GD: null,
    UT: null,
    config: null,
    wxhelper: null
  };

  getUT() {
    return this.UT;
  }

  getGConfig() {
    return this.config;
  }

  shiftLang() {
    PUT.shiftLang(this);
    this.wxhelper = PUT.getWxHelper(this);
  }

  showLoginTips() {
    this.wxhelper.showLoginTips(this);
  }

  onLoad() {
    this.APP = PUT.getApp(this);
    this.GD = PUT.getAppGD(this);
    this.UT = PUT.getAppUT(this);
    this.config = PUT.getAppConfig(this);
    this.wxhelper = PUT.getWxHelper(this);
    console.log(`${this.$name} loaded.`);
  }
}
