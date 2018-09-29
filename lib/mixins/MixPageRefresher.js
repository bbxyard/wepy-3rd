/**
 * @file MixPageRefresher.js
 * @description 页面刷新统一约束
 */
import wepy from 'wepy';
import PUT from './in/PageUtil';
export default class MixPageRefresher extends wepy.mixin {

  data = {
    // 路由
    pg: null,
    // 配置UI
    ui: null,
    meta: {},
    metaObj: {},
    // 页面状态
    pageStatus: {
      ready: false,
      loading: false,
      reachBottom: false,
      empty: false,
      emptyText: '',
      loadingText: 'Loading'
    },
    // 下拉刷新、上推加载
    curFetcher: null,
    pageList: [],
    fetcherList: []
  };

  /*****************************************
   * # 0. 加载配置
   * @method doReadConf
   ****************************************/
  doReadConf(name) {
    // #0. self
    // #0.0 pg, ui
    this.pg = this.config.Page;
    this.ui = this.config.guide[name];
    // #0.1 meta
    Object.assign(this.meta, this.config.Com.meta);
    if (this.ui) {
      if (this.ui.meta) Object.assign(this.meta, this.ui.meta);
      // #0.2 metaObj
      if (this.ui.metaObj) this.metaObj = this.ui.metaObj;
    }
    // #0.2 meta apply
    if (this.meta.navTitle) {
      this.wxhelper.setTitle(this.meta.navTitle);
    }
  }

  /*****************************************
   * # 1. 页面状态
   * @method setReady
   * @method getPageStatus
   ****************************************/
  computed = {
    isReady() { return this.pageStatus.ready; }, // 用于页面延时显示
    isPageEmpty() { return this.pageList.length === 0; }
  };
  setReady() {
    this.pageStatus.ready = true;
    this.$broadcast('xb-page-ready');
    this.$apply();
  }
  verifyReady() { return this.pageStatus.ready; }
  getPageStatus() {
    return this.pageStatus;
  }

  /*****************************************
   * # 2. 刷新(渲染)组件
   * @method render - 渲染
   ****************************************/
  render(comp, pkg, asyncMode = false) {
    if (!pkg.meta && this.meta) pkg.meta = this.meta;
    if (!pkg.metaObj && this.metaObj) pkg.metaObj = this.metaObj;
    this.$invoke(comp, 'refresh', pkg, asyncMode);
  }

  /*****************************************
   * # 3. 下拉、上推刷新
   * @method doResetFetcher
   * @method doFetchNext
   * @method doFetchFirst
   * @method onPullDownRefresh - 下拉，重置加载
   * @method onReachBottom - 上推，继续分页加载
   ****************************************/
  doResetFetcher() {
    console.log('doResetFetcher yourself.');
  }
  async doFetchNext() {
    if (this.curFetcher != null) {
      const res = await this.curFetcher.fetchNext();
      if (res.errno === 0) {
        this.pageList = res.data.historyList;
        this.getPageStatus().reachBottom = res.data.finished;
        console.log('%s doFetchNext: ', this.$name, res);
        if (this.onFetchNextDone) this.onFetchNextDone();
        this.$apply();
      }
    } else {
      this.pageStatus().reachBottom = true;
      console.log('%s doFetchNext: NOT SUPP', this.$name);
    }
    return Promise.resolve('done');
  }
  async doFetchFirst() {
    wepy.showNavigationBarLoading();
    await this.doResetFetcher();
    wepy.hideNavigationBarLoading();
  }
  onPullDownRefresh() {
    console.log(`try to refresh...`);
    if (this.curFetcher) {
      this.doFetchFirst();
    }
    wepy.stopPullDownRefresh();
  }
  async onReachBottom(e) {
    console.log('onReachBottom: ', e);
    if (this.curFetcher && !this.getPageStatus().reachBottom) {
      wepy.showNavigationBarLoading();
      await this.doFetchNext();
      wepy.hideNavigationBarLoading();
    }
  }

  /*****************************************
   * # N-3. 回调框架. 采用模版方法模式
   * @method doStartAsyncLoad - 异步加载
   * @method doHandleOption - 处理传入参数
   * @method onLanguageChange - 语言切换
   ****************************************/
  async doStartAsyncLoad(preload) {
    // ...
  }
  doHandleOption(option, preload) {
  }
  onLanguageChange(lastLangId, newLangId) {
  }

  /*****************************************
   * # N-2. 公共接口
   * @method getCurPagePath - 当前页面
   * @method showLoginTips - 引导登陆提示
   ****************************************/
  getCurPagePath() { return '/' + this.$wxpage.route; }
  showLoginTips() {
    this.wxhelper.showLoginTips(this);
  }
  
  /*****************************************
   * # N-1. re-show 重新显示
   * @method onShow - 重新显示
   * @method shiftLang - 切换到下一个语言
   ****************************************/
  onShow() {
    if (this.curLangId) {
      const lastLangId = this.curLangId;
      const newLangId = this.setting.getValue('lang');
      if (lastLangId != newLangId) {
        this.curLangId = newLangId;
        this.wxhelper = PUT.getWxHelper(this);
        this.config = PUT.getAppConfig(this);
        if (this.onLanguageChange) {
          this.onLanguageChange(lastLangId, newLangId);
        }
      }
    }
  }
  shiftLang() {
    PUT.shiftLang(this);
    this.wxhelper = PUT.getWxHelper(this);
    this.config = PUT.getAppConfig(this);
  }


  /*****************************************
   * # N. 初始化框架 onLoad
   * @method onLoad - 加载
   * @method verifyAppReady - 确保OS启动完毕
   ****************************************/
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
    if (data.preload) {
      const preload = data.preload;
      if (preload.pkg) this.pkg = preload.pkg;
      if (preload.list) this.list = preload.list;
      if (preload.item) this.item = preload.item;
    }
    this.doHandleOption(option, data.preload);
    // 加载Global数据
    PUT.readGlobal(this);
    // 异步加载数据
    this.doStartAsyncLoad(data.preload);
    console.log(`${this.$name}-MixPageRefresher loaded.`);
  }
}
