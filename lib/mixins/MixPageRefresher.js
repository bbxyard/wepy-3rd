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
      empty: true,
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
    const theme = this.GD.theme;
    if (theme) {
      wx.setBackgroundColor({
        backgroundColor: theme.bgColor, // 窗口的背景色
        backgroundColorTop: theme.bgColorTop, // 顶部窗口的背景色
        backgroundColorBottom: theme.bgColorBottom, // 底部窗口的背景色
      });
      wx.setNavigationBarColor({
        frontColor: theme.navBarColor,
        backgroundColor: theme.navBarBgColor,
        animation: {
          duration: 400,
          timingFunc: 'easeIn'
        }
      });
    }
    this.setLoadingText(this.meta.loading, this.meta.pageEmptyPH);
  }

  /*****************************************
   * # 1. 页面状态
   * @method setReady
   * @method getPageStatus
   ****************************************/
  computed = {
    isReady() { return this.pageStatus.ready; }, // 用于页面延时显示
    isPageEmpty() { return !this.pageList || this.pageList.length === 0; }
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
  setLoading() {
    wepy.showNavigationBarLoading();
    this.pageStatus.loading = true;
  }
  setLoaded() {
    wepy.hideNavigationBarLoading();
    this.pageStatus.loading = false;
    this.pageStatus.empty = (this.pageList.length === 0);
  }
  updateReachBottom(value) {
    this.pageStatus.reachBottom = value;
  }
  isReachBottom() {
    return this.pageStatus.reachBottom;
  }
  setLoadingText(loadingText, emptyText) {
    this.pageStatus.loadingText = loadingText;
    this.pageStatus.emptyText = emptyText;
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
    try {
      this.setLoading();
      if (this.curFetcher != null) {
        const res = await this.curFetcher.fetchNext();
        if (res.errno === 0) {
          this.pageList = res.data.historyList;
          this.updateReachBottom(res.data.finished);
          console.log('%s doFetchNext: ', this.$name, res);
          if (this.onFetchNextDone) this.onFetchNextDone();
          this.$apply();
        }
      } else {
        this.updateReachBottom(true);
        console.log('%s doFetchNext: NOT SUPP', this.$name);
      }
    } catch(err) {
      console.log(err);
    } finally {
      this.setLoaded();
    }
    return Promise.resolve('done');
  }
  async doFetchFirst() {
    try {
      this.setLoading();
      await this.doResetFetcher();
    } catch (err) {
      console.log(err);
    } finally {
      this.setLoaded();
    }
  }
  async onPullDownRefresh() {
    console.log(`try to refresh...`);
    if (this.hookBeforeRefresh) { // 前置位刷新钩子
      await this.hookBeforeRefresh();
    }
    if (this.curFetcher) {
      await this.doFetchFirst();
    }
    if (this.hookAfterRefresh) { // 后置位刷新钩子
      await this.hookAfterRefresh();
    }
    wepy.stopPullDownRefresh();
  }
  async onReachBottom(e) {
    console.log('onReachBottom: ', e);
    if (this.curFetcher && !this.isReachBottom()) {
      await this.doFetchNext();
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

  /*****************************************
   * # N-2. 公共接口
   * @method getCurPagePath - 当前页面
   * @method showLoginTips - 引导登陆提示
   ****************************************/
  getCurPagePath() { return '/' + this.$wxpage.route; }
  showLoginTips() {
    this.wxhelper.showLoginTips(this);
  }
  getUid() {
    return this.GD.session.getUid();
  }
  genShareMsg(title, param, imageUrl) {
    const curPagePath = this.getCurPagePath();
    const out = {
      title,
      path: `${curPagePath}?${param}`
    };
    if (imageUrl) out.imageUrl = imageUrl;
    return out;
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
        if (this.onceLangChange) {
          this.onceLangChange({lastLangId, newLangId})
        }
        else if (this.doStartAsyncLoad) {
          this.doStartAsyncLoad();
        } else if (this.onLanguageChange) {
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
   * # N-1. 小函数
   ****************************************/
  getReqStr(opt, keyName, defaultValue) {
    const x = (opt[keyName] !== undefined) ? opt[keyName] : defaultValue;
    return x;
  }
  getReqNumber(opt, keyName, defaultValue) {
    const x = (opt[keyName] !== undefined) ? Number(opt[keyName]) : defaultValue;
    return x;
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
    if (this.doHandleOption) {
      this.doHandleOption(option, data.preload);
    }
    // 加载Global数据
    PUT.readGlobal(this);
    // 异步加载数据
    this.doStartAsyncLoad(data.preload);
    console.log(`${this.$name}-MixPageRefresher loaded.`);
  }
}
