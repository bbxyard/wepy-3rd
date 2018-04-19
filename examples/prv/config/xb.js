/**
 * @file xb.js
 * @description 配置文件
 */

const footer = {
  links: [
    { url: '/pages/index', txt: 'Home', hidden: false },
    { url: '/3rd/examples/pages/index', txt: '3rdHome', hidden: false },
    { url: '/3rd/examples/pages/yzz/index', txt: 'yzz', hidden: false },
    { url: '/3rd/examples/pages/mine', txt: 'Mine', hidden: false }
  ],
  copyright: 'Copyright © 2013-2018 bbxyard'
};

const index = {
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
    { url: '', img: 'https://d.app.bbxyard.com/ui/iconfont-favor.png', fa: '', title: '收藏夹', desc: 'Favor', cnt: 3 },
    { url: '', img: 'https://d.app.bbxyard.com/ui/iconfont-comment.png', fa: '', title: '商品点评', desc: 'Comment', cnt: 0 },
    { url: '', img: 'https://d.app.bbxyard.com/ui/iconfont-contact.png', fa: '', title: '联系客服', desc: 'Contact', cnt: 0 },
    { url: '', img: 'https://d.app.bbxyard.com/ui/iconfont-address.png', fa: '', title: '地址管理', desc: 'Address', cnt: 0 },
    { url: '', img: 'https://d.app.bbxyard.com/ui/iconfont-password.png', fa: '', title: '修改密码', desc: 'Password', cnt: 0 },
    // { url: '', img: 'https://d.app.bbxyard.com/ui/iconfont-help.png', fa: '', title: '帮助', desc: 'Help', cnt: 0 },
    { url: '', img: 'https://d.app.bbxyard.com/ui/iconfont-setting.png', fa: '', title: '设置', desc: 'Settings', cnt: 0 }
  ]
};

export default {
  mine,
  fa,
  footer,
  index,
  layout
};
