/**
 * @file MixPageRefresher.js
 * @description 页面刷新统一约束
 */
import wepy from 'wepy';
import PUT from './in/PageUtil';
export default class MixPageRefresher extends wepy.mixin {

  // 刷新(渲染)组件
  render(comp, ...args) {
    this.$invoke(comp, 'refresh', ...args);
  }

  // 自定义框架回调. 采用模版方法模式
  async doStartAsyncLoad() {
    // ...
  }
  doHandleOption(option, preload) {
  }
  onLanguageChange(lastLangId, newLangId) {

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

  onShow() {
    if (this.curLangId) {
      const lastLangId = this.curLangId;
      const newLangId = this.setting.getValue('lang');
      if (lastLangId != newLangId) {
        this.curLangId = newLangId;
        this.wxhelper = PUT.getWxHelper(this);
        this.config = PUT.getAppConfig(this);
        this.onLanguageChange(lastLangId, newLangId);
      }
    }
  }

  onLoad(option, data) {
    // 处理页面参数
    this.doHandleOption(option, data.preload);
    // 加载Global数据
    PUT.readGlobal(this);
    // 异步加载数据
    this.doStartAsyncLoad();
    console.log(`${this.$name} loaded.`);
  }
}
