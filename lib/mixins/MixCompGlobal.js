import wepy from 'wepy';

export default class MixCompGlobal extends wepy.mixin {
  constructor() {
    super();
    this.app = null;
    this.GD = null;
    this.UT = null;
  }
  
  getUT() {
    return this.GD.UT;
  }

  getGConfig() {
    return this.GD.gconfig;
  }

  onLoad() {
    let par = this.$parent;
    for (let i = 0; i < 100; ++i) { // 再BT也不会有100层吧.
      if (par.$parent === undefined) {
        break;
      }
      par = par.$parent;
    }
    this.app = par;
    this.GD = this.app.getGlobalData();
    this.UT = this.getUT();
  }
}
