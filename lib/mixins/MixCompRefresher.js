/**
 * @file MixCompRefresh.js
 * @description 统一约束组件的刷新接口
 */
import wepy from 'wepy';

export default class MixCompRefresher extends wepy.mixin {
  data = {
    pkg: {}
  };

  methods = {
    // refresh 代码本因放在这里，但是混入后，作用域看不到了, 故上移一层
  };

  doPostRefresh() {
    // 做些后续调整什么的.
  }

  refresh(pkg) {
    this.pkg = Object.assign({}, pkg);
    this.doPostRefresh();
    this.$apply();
  }

  onLoad() {
    console.log(`${this.$name} loaded.`);
  }
};
