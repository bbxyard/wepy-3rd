/**
 * @file MixPageRefresher.js
 * @description 页面刷新统一约束
 */
import wepy from 'wepy';
import PUT from './in/PageUtil';
export default class MixPageRefresher extends wepy.mixin {

  data = {
    ready: false
  };

  computed = {
    isReady() { return this.ready; }  // 用于页面延时显示
  };

  setReady() {
    this.ready = true;
  }

  // 刷新(渲染)组件
  render(comp, ...args) {
    this.$invoke(comp, 'refresh', ...args);
  }

  // 自定义框架回调. 采用模版方法模式
  async doStartAsyncLoad(preload) {
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

  onReady() {
    // this.ready = true;
    console.log(`${this.$name} onReady.`);
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

  getCurPagePath() {
    return '/' + this.$wxpage.route;
  }

  verifyAppReady(opt, pagePath) {
    const app = this.$parent;
    console.log('##debug: [verifyAppReady]: ', pagePath);
    if (!app.isReady()) {
      const queryStr = Object.keys(opt).map(key => `${key}=${opt[key]}`).join('&');
      const path = pagePath + '?' + queryStr;
      this.$preload('path', path);
      this.$navigate(app.getInitPage());
    }
  }

  onLoad(option, data) {
    // 确保系统已加载OK, 否则跳到welcome
    this.verifyAppReady(option, this.getCurPagePath());
    // 处理页面参数
    this.doHandleOption(option, data.preload);
    // 加载Global数据
    PUT.readGlobal(this);
    // 异步加载数据
    this.doStartAsyncLoad(data.preload);
    console.log(`${this.$name}-MixPageRefresher loaded.`);
  }
}
