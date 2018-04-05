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

  logError(errno, errmsg, subject, prompt, ...args) {
    this.logger.write({errno, errmsg, level: 'error', subject, prompt, args});
  }

  logWarn(errno, errmsg, subject, prompt, ...args) {
    this.logger.write({errno, errmsg, level: 'warn', subject, prompt, args});
  }

  onLoad() {
    this.logger = this.$parent.globalData.glogger;
  }
};
