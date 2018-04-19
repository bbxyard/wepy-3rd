import wepy from 'wepy';
import PUT from './in/PageUtil';
export default class MixCompGlobal extends wepy.mixin {
  constructor() {
    super();
    this.UT = null;
    this.config = null;
  }
  
  getUT() {
    return this.UT;
  }

  getGConfig() {
    return this.config;
  }

  onLoad() {
    this.UT = PUT.getAppUT(this);
    this.config = PUT.getAppConfig(this);
    console.log(`${this.$name} loaded.`);
  }
}
