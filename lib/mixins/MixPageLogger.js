import wepy from 'wepy';

export default class MixPageLogger extends wepy.mixin {
  data = {
    logger: null
  };

  log(errno, subject, prompt, ...args) {
    this.logger.write({errno, subject, prompt, args});
  }

  logSuccInfo(subject, prompt, ...args) {
    this.logger.write({errno: 0, level: 'info', subject, prompt, args});
  }

  logError(errno, subject, prompt, ...args) {
    this.logger.write({errno: errno, level: 'error', subject, prompt, args});
  }

  logWarn(errno, subject, prompt, ...args) {
    this.logger.write({errno: errno, level: 'warn', subject, prompt, args});
  }

  onLoad() {
    this.logger = this.$parent.globalData.glogger;
  }
};
