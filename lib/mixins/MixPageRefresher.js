/**
 * @file MixPageRefresher.js
 * @description 页面刷新统一约束
 */
import wepy from 'wepy';
import PUT from './in/PageUtil';
export default class MixPageRefresher extends wepy.mixin {
  constructor() {
    super();
    this.UT = null;
    this.config = null;
  }

  // 刷新(渲染)组件
  render(comp, ...args) {
    this.$invoke(comp, 'refresh', ...args);
  }

  // 模版方法模式
  async doStartAsyncLoad() {
    // ...
  }

  onLoad() {
    this.UT = PUT.getAppUT(this);
    this.config = PUT.getAppConfig(this);
    this.doStartAsyncLoad();
    console.log(`${this.$name} loaded.`);
  }
}