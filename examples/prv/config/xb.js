/**
 * @file xb.js
 * @description 配置文件
 */

const footer = {
  links: [
    { url: '/pages/index', title: 'Home', hidden: false },
    { url: '/3rd/examples/pages/index', title: '3rdHome', hidden: false },
    { url: '/3rd/examples/pages/yzz/index', title: 'yzz', hidden: false },
    { url: '/3rd/examples/pages/mine', title: 'Mine', hidden: false }
  ],
  copyright: 'Copyright © 2013-2018 bbxyard'
};

const WeUIIndex = {
  list: [
    { id: 'form', title: '表单', open: false, img: '', fa: 'fa-navicon', pages: ['input', 'list', 'uploader'] },
    { id: 'widget', title: '基础组件', open: false, img: '', fa: 'fa-usb', pages: ['article', 'badge', 'button', 'flex', 'grid', 'icons', 'loadmore', 'panel', 'preview', 'progress', 'slider'] },
    { id: 'feedback', title: '操作反馈', open: false, img: '', fa: 'fa-check-circle', pages: ['actionsheet', 'dialog', 'msg', 'picker'] },
    { id: 'nav', title: '导航相关', open: false, img: '', fa: 'fa-tree', pages: ['navbar', 'footer'] },
    { id: 'search', title: '搜索相关', open: false, img: '', fa: 'fa-search', pages: ['searchbar'] }
  ]
};

const mine = {
  self: {
    navTitle: '个人中心'
  },
  userOrder: {
    hd: { title: '我的订单', desc: '查看全部订单' },
    bd: {
      list: [
        { url: '', img: 'https://d.app.bbxyard.com/ui/iconfont-topay.png', fa: '', title: '待付款', cnt: 0 },
        { url: '', img: 'https://d.app.bbxyard.com/ui/iconfont-tosend.png', fa: '', title: '待发货', cnt: 1 },
        { url: '', img: 'https://d.app.bbxyard.com/ui/iconfont-send.png', fa: '', title: '已发货', cnt: 5 },
        { url: '', img: 'https://d.app.bbxyard.com/ui/iconfont-tocomment.png', fa: '', title: '待评价', cnt: 8 },
        { url: '', img: 'https://d.app.bbxyard.com/ui/iconfont-refund.png', fa: '', title: '退款/售后', cnt: 0 }
      ]
    }
  },
  userSvc: {
    // width: '25%', 自动判断
    hd: { title: '我的服务', desc: '' },
    bd: {
      list: [
        { url: '', img: 'https://d.app.bbxyard.com/ui/iconfont-coupon.png', fa: '', title: '优惠券', cnt: 0 },
        { url: '', img: 'https://d.app.bbxyard.com/ui/iconfont-favor.png', fa: '', title: '收藏夹', cnt: 3 },
        { url: '', img: 'https://d.app.bbxyard.com/ui/iconfont-comment.png', fa: '', title: '商品点评', cnt: 0 },
        { url: '', img: 'https://d.app.bbxyard.com/ui/iconfont-contact.png', fa: '', title: '联系客服', cnt: 0 },
        { url: '', img: 'https://d.app.bbxyard.com/ui/iconfont-address.png', fa: '', title: '地址管理', cnt: 0 },
        { url: '', img: 'https://d.app.bbxyard.com/ui/iconfont-password.png', fa: '', title: '修改密码', cnt: 0 },
        { url: '', img: 'https://d.app.bbxyard.com/ui/iconfont-help.png', fa: '', title: '帮助', cnt: 0 },
        { url: '', img: 'https://d.app.bbxyard.com/ui/iconfont-setting.png', fa: '', title: '设置', cnt: 0 }
      ]
    }
  }
};

const fa = {
  list: [
    { icon: 'fa fa-pencil', title: 'foobar1', desc: 'desc1' },
    { icon: 'fa fa-square-o', title: 'foobar2', desc: 'desc2' },
    { icon: 'fa fa-twitter', title: 'foobar3', desc: 'desc3' },
    { icon: 'fa fa-spinner fa-spin', title: 'fa-spin', desc: 'fa-spinner' },
    { icon: 'fa fa-circle-o-notch fa-spin', title: 'fa-spin', desc: 'fa-circle-o-notch' },
    { icon: 'fa fa-refresh fa-spin', title: 'fa-spin', desc: 'fa-refresh' },
    { icon: 'fa fa-cog fa-spin', title: 'fa-spin', desc: 'fa-cog' },
    { icon: 'fa fa-spinner fa-pulse', title: 'fa-pulse', desc: 'fa-spinner' }
  ]
};

const layout = {
  list: [
    { url: '', img: 'https://d.app.bbxyard.com/ui/iconfont-tosend.png', fa: '', title: '优惠券', desc: 'Coupon', cnt: 0 },
    { url: '', img: 'https://d.app.bbxyard.com/ui/iconfont-favor.png', fa: 'fa-star', title: '收藏夹', desc: 'Favor', cnt: 3 },
    { url: '', img: 'https://d.app.bbxyard.com/ui/iconfont-comment.png', fa: '', title: '商品点评', desc: 'Comment', cnt: 0 },
    { url: '', img: 'https://d.app.bbxyard.com/ui/iconfont-contact.png', fa: '', title: '联系客服', desc: 'Contact', cnt: 0 },
    { url: '', img: 'https://d.app.bbxyard.com/ui/iconfont-address.png', fa: '', title: '地址管理', desc: 'Address', cnt: 0 },
    { url: '', img: 'https://d.app.bbxyard.com/ui/iconfont-password.png', fa: 'fa-user-secret', title: '修改密码', desc: 'Password', cnt: 0 },
    // { url: '', img: 'https://d.app.bbxyard.com/ui/iconfont-help.png', fa: '', title: '帮助', desc: 'Help', cnt: 0 },
    { url: '', img: 'https://d.app.bbxyard.com/ui/iconfont-setting.png', fa: '', title: '设置', desc: 'Settings', cnt: 0 }
  ]
};

const CAT = {
  cool: [
    { url: '/3rd/examples/pages/fa', fa: 'fa-thumbs-o-up', title: 'Font Awesome Demo', desc: '字体图标' },
    { url: '/3rd/examples/pages/wx/wx-discover', fa: 'fa-thumbs-o-up', title: '仿朋友圈', desc: 'Discover' },
    { url: '/3rd/examples/pages/wx/wx-mine', fa: 'fa-thumbs-o-up', title: '仿个人中心', desc: 'Me' },
    { url: '/3rd/examples/pages/wux/wux-button', fa: 'fa-thumbs-o-up', title: '悬浮折叠button', desc: 'Button' }
  ],
  layout: [
    { url: '/3rd/examples/pages/index', img: '', fa: 'fa-home', title: '3rd-Home-Index', desc: '导航-列表' },
    { url: '/3rd/examples/pages/xb/layout', img: '', fa: 'fa-linux', title: '单一列表', desc: 'Grid-List' },
    { url: '/3rd/examples/pages/xb/weui-index', img: '', fa: 'fa-weixin', title: 'WeUI-Index', desc: '导航-列表' }
  ],
  mine: [
    { url: '/3rd/examples/pages/mine', img: '', fa: 'fa-user', title: '我的', desc: '个人中心' }
  ],
  lib: [
    { url: '/3rd/examples/pages/yzz/index', img: '', fa: 'fa-coffee', title: 'yzz', desc: '' },
    { url: '/3rd/examples/pages/wux/index', img: '', fa: 'fa-coffee', title: 'wux', desc: '' },
    { url: '/3rd/examples/pages/zan/index', img: '', fa: 'fa-coffee', title: 'zan', desc: '有赞' },
    { url: '/3rd/examples/pages/xb/weui-index', img: '', fa: 'fa-weixin', title: 'WeUI-Index', desc: '仅为目录' }
  ]
}

const index = {
  tab: {  // 结构和ZanTab保持一致
    list: [
      { id: 'list', theme: 'list', title: '下拉列表' },
      { id: 'list-list', theme: 'list-list', title: '列表' },
      { id: 'list-grid', theme: 'list-grid', title: '网格' },
      { id: 'list-panel', theme: 'list-panel', title: '面板' }
    ],
    selectedId: 'list-grid',
    height: 45
  },

  nav: [
    { id: 'cool', title: '特效', open: false, fa: 'fa-tv', sublist: CAT.cool },
    { id: 'layout', title: '布局', open: false, fa: 'fa-navicon', sublist: CAT.layout },
    { id: 'mine', title: '个人中心', open: false, fa: 'fa-user', sublist: CAT.mine },
    { id: 'lib', title: '三方库合集', open: false, fa: 'fa-folder', sublist: CAT.lib },
    { id: 'uorder', title: '我的订单', open: false, fa: 'fa-truck', sublist: mine.userOrder.bd.list },
    { id: 'usvc', title: '我的服务', open: false, fa: 'fa-star', sublist: mine.userSvc.bd.list },
    { id: 'footer', title: 'Footer', open: false, fa: 'fa-paw', sublist: footer.links }
  ]
};

const demo = {
  list: [
    { url: '/3rd/examples/pages/index', fa: 'fa-list', title: 'Go to Example', desc: 'by Weui Tab' },
    { url: '/3rd/examples/pages/index?tabTheme=zan', fa: 'fa-list', title: 'Go to Example', desc: 'by ZanTab' },
    { url: '/3rd/examples/pages/index?tabTheme=zan-scroll', fa: 'fa-list', title: 'Go to Example', desc: 'by ZanTabScroll' }
  ]
};

export default {
  WeUIIndex,
  mine,
  fa,
  footer,
  index,
  layout,
  demo
};
