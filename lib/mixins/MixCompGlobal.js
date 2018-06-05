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

  isLangChanged() {
    const ret = (this.curLangId !== this.setting.getLocalSetting().parLangId);
    return ret;
  }

  /**
   * @name shiftLang
   * @description 切换到下一个语言
   */
  shiftLang() {
    PUT.shiftLang(this);
    this.wxhelper = PUT.getWxHelper(this);
    this.config = PUT.getAppConfig(this);
  }

  /**
   * @name showLoginTips
   * @description 引导登陆提示
   */
  showLoginTips() {
    this.wxhelper.showLoginTips(this);
  }

  onLoad() {
    this.APP = PUT.getApp(this);
    this.GD = PUT.getAppGD(this);
    this.UT = PUT.getAppUT(this);
    this.config = PUT.getAppConfig(this);
    this.setting = PUT.getSetting(this);
    this.wxhelper = PUT.getWxHelper(this);
    this.curLangId = this.setting.getLocalSetting().parLangId;
    console.log(`${this.$name} loaded.`);
  }
}
