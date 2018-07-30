/**
 * @file MixCompRefresh.js
 * @description 统一约束组件的刷新接口
 */
import wepy from 'wepy';

export default class MixCompRefresher extends wepy.mixin {
  data = {
    pkg: {},
    meta: {},
    metaObj: {}
  };

  methods = {
    // refresh 代码本因放在这里，但是混入后，作用域看不到了, 故上移一层
  };

  computed = {
    getCompName() { return this.$name; }
  };

  // 刷新(渲染)子组件的子组件
  renderSub(comp, ...args) {
    this.$invoke(comp, 'refresh', ...args);
  }

  /**
   * @function doComRefresh
   * @description 公共刷新-主题啥的公共约束
   */
  doComRefresh() {
    let pkg = this.pkg; // MixCompRefresher中定义
    if ((!pkg.theme || pkg.theme === 'default') && this.theme ) {
      pkg.theme = this.theme;
    }
    if (pkg.meta) this.meta = pkg.meta;
    if (pkg.metaObj) this.metaObj = Object.assign({}, pkg.metaObj);
  }

  doPostRefresh() {
    // 做些后置调整什么的.
  }

  refresh(pkg) {
    this.pkg = Object.assign({}, pkg);
    this.doComRefresh();
    this.doPostRefresh();
    this.$apply();
  }

  onLoad() {
    console.log(`${this.$name} loaded.`);
  }
};
