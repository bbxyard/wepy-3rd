import wepy from 'wepy';
import PUT from './in/PageUtil';
export default class MixCompGlobal extends wepy.mixin {
  getUT() {
    return this.UT;
  }

  getGConfig() {
    return this.config;
  }

  onLoad() {
    PUT.readGlobal(this);
    console.log(`${this.$name} loaded.`);
  }
}
