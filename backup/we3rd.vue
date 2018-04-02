<style class="less">
</style>

<template>
  
</template>

<script>
/**
 * @name we3rd 对外导部类
 * @description 隐藏内部结构,对外提供统一的目录结构,方便后续目录结构调整
 */
// const COMP_HOME = '';
// const XB_DIR = COMP_HOME + 'xb/';
// const ZAN_DIR = COMP_HOME + 'zan/';
// const zan = {
//   Tab: require(ZAN_DIR + 'zan-tab'),
//   Toast: require(ZAN_DIR + 'zan-toast')
// };

import Tab from './lib/components/zan/zan-tab';
import Toast from './lib/components/zan/zan-toast';
import Title from './lib/components/xb/xbWeTitle';
import Footer from './lib/components/xb/xbWeFooter';

const zan = {
  Tab, Toast
};

const xb = {
  Title,
  Footer
};

// import xbTitle from XB_DIR + 'xbWeTitle';
// import xbTitle from './lib/components/xb/xbWeTitle'

module.exports = {
  /**
   * @name components
   */
  // zan: zan,
  // xb: xb,
  // xbTitle: xb.Title,
  // xbFooter: xb.Footer
  // xbTitle
  zan, xb, Title, Footer

  /**
   * @name mixins
   */
};
</script>
