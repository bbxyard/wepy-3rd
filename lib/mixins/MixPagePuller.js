/**
 * @file MixPagePuller.js
 * @description 统一管理页面的上拉、下拉事件框架
 */
import wepy from 'wepy';

export default class MixPagePuller extends wepy.mixin {
  data = {
  };

  onLoad() {
    console.log(`${this.$name} loaded.`);
  }
};
