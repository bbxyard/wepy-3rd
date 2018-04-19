/**
 * @file MixPageRefresher.js
 * @description 页面刷新统一约束
 */
import wepy from 'wepy';

export default class MixPageRefresher extends wepy.mixin {
  // data = {
  //   pkg: {}
  // };

  // async startAsyncLoad() {
  //   // #0. 本身
  //   this.ui = this.config.xb.layout;

  //   // #1. grid
  //   const pkg = { theme: 'default', bd: { list: this.ui.list } };
  //   this.$invoke('grid', 'refresh', pkg);
  // }

  onLoad() {
    // this.config = this.getGConfig(); // 实际开发, 建议config统一从Global获取
    // this.startAsyncLoad();
    console.log(`${this.$name} loaded.`);
  }
}