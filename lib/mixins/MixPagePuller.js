/**
 * @file MixPagePuller.js
 * @description 统一管理页面的上拉、下拉事件框架
 */
import wepy from 'wepy';

export default class MixPagePuller extends wepy.mixin {

  data = {
    curFetcher: null,
    fetcherList: []
  };

  doResetFetcher() {
    console.log('doResetFetcher yourself.');
  }

  doFetchNext() {
    console.log('doFetchNext yourself.');
  }

  async doFetchFirst() {
    wepy.showNavigationBarLoading();
    await this.doResetFetcher();
    wepy.hideNavigationBarLoading();
  }

  // 下拉，重置加载
  onPullDownRefresh() {
    console.log(`try to refresh...`);
    if (this.curFetcher) {
      this.doFetchFirst();
    }
    wepy.stopPullDownRefresh();
  }

  // 上拉，继续分页加载
  onReachBottom(e) {
    console.log('onReachBottom: ', e);
    if (this.curFetcher) {
      wepy.showNavigationBarLoading();
      this.doFetchNext();
      wepy.hideNavigationBarLoading();
    }
  }

  onLoad() {
    console.log(`${this.$name} loaded.`);
  }
};
