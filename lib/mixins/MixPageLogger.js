import wepy from 'wepy';

export default class MixPageLogger extends wepy.mixin {
  data = {
    logger: null
  };

  log(errno, subject, ...args) {
    this.logger.write({errno, subject, args});
  }

  logSuccInfo(subject, ...args) {
    this.logger.write({errno: 0, level: 'info', subject, args});
  }

  logError(errno, subject, ...args) {
    this.logger.write({errno: errno, level: 'error', subject, args});
  }

  logWarn(errno, subject, ...args) {
    this.logger.write({errno: errno, level: 'warn', subject, args});
  }

  onLoad() {
    this.logger = this.$parent.globalData.glogger;
  }
};
