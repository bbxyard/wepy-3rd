[TOC]

## History
### 组件封装尝试-20180401
- we3rd.wpy, xb.wpy想把目录内部封装起来，失败! 后续再研究.
```
// import we3rd from '../3rd/we3rd';
// const xb = we3rd.xb;
// const zan = we3rd.zan;
// const Title = xb.Title;
// const Footer = xb.Footer;
// const Tab = we3rd.zan.Tab;
// const Toast = we3rd.zan.Toast;
// var MyTitle = we3rd.xbTitle;
// var MyFooter = we3rd.xbFooter;
// import Title from '../3rd/lib/components/xb';
// import xb from '@/xb';
// const we3rd = require('../3rd/we3rd');
// // var xb = require('../3rd/lib/components/xb');
// import xb from '../3rd/lib/components/xb';
// var Title = xb.Title;
// // var MyTitle = we3rd.Title;
// var Footer = xb.Footer;

  components = {
    // title: MyTitle,
    // footer: MyFooter
    // title: we3rd.xbTitle
    // title: MyTitle,
    // footer: we3rd.xbFooter
    // tab: Tab,
    // toast: Toast
  };

// 编译不通过!
```