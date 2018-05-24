/**
 * @file MixPagePuller.js
 * @description 统一管理页面的上拉、下拉事件框架
 */
import wepy from 'wepy';

export default class MixPagePuller extends wepy.mixin {

  doResetFetcher() {
    console.log('doResetFetcher yourself.');
  }

  doFetchNext() {
    console.log('doFetchNext yourself.');
  }

  // 下拉，重置加载
  onPullDownRefresh() {
    console.log(`try to refresh...`);
    this.doResetFetcher();
    wepy.stopPullDownRefresh();
  }

  // 上拉，继续分页加载
  onReachBottom(e) {
    console.log('onReachBottom: ', e);
    this.doFetchNext();
    wepy.stopPullDownRefresh();
  }

  onLoad() {
    console.log(`${this.$name} loaded.`);
  }
};