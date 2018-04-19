
const mine = {
  self: {
    navTitle: '个人中心'
  },
  userOrder: {
    hd: { title: '我的订单', desc: '查看全部订单' },
    bd: {
      list: [
        { url: '', img: 'http://img02.camel.com.cn/image/zwuc_icon1.png', fa: '', txt: '待付款', cnt: 0 },
        { url: '', img: 'http://img02.camel.com.cn/image/zwuc_icon2.png', fa: '', txt: '待发货', cnt: 1 },
        { url: '', img: 'http://img02.camel.com.cn/image/zwuc_icon3.png', fa: '', txt: '已发货', cnt: 5 },
        { url: '', img: 'http://img02.camel.com.cn/image/zwuc_icon4.png', fa: '', txt: '待评价', cnt: 8 },
        { url: '', img: 'http://img02.camel.com.cn/image/zwuc_icon5.png', fa: '', txt: '退款/售后', cnt: 0 }
      ]
    }
  },
  userSvc: {
    hd: { title: '我的服务', desc: '' },
    bd: {
      width: '25%',      list: [
        { url: '', img: 'http://img02.camel.com.cn/image/zwuc_icon6.png', fa: '', txt: '优惠券', cnt: 0 },
        { url: '', img: 'http://img02.camel.com.cn/image/zwuc_icon7.png', fa: '', txt: '收藏夹', cnt: 3 },
        { url: '', img: 'http://img02.camel.com.cn/image/zwuc_icon8.png', fa: '', txt: '商品点评', cnt: 0 },
        { url: '', img: 'http://img02.camel.com.cn/image/zwuc_icon9.png', fa: '', txt: '联系客服', cnt: 0 },
        { url: '', img: 'http://img02.camel.com.cn/image/zwuc_icon10.png', fa: '', txt: '地址管理', cnt: 0 },
        { url: '', img: 'http://img02.camel.com.cn/image/zwuc_icon11.png', fa: '', txt: '修改密码', cnt: 0 },
        // { url: '', img: 'http://img02.camel.com.cn/image/zwuc_icon12.png', fa: '', txt: '帮助', cnt: 0 },
        { url: '', img: 'http://img02.camel.com.cn/image/zwuc_icon13.png', fa: '', txt: '设置', cnt: 0 }
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
    { url: '', img: 'http://img02.camel.com.cn/image/zwuc_icon6.png', fa: '', title: '优惠券', desc: 'Coupon', cnt: 0 },
    { url: '', img: 'http://img02.camel.com.cn/image/zwuc_icon7.png', fa: '', title: '收藏夹', desc: 'Favor', cnt: 3 },
    { url: '', img: 'http://img02.camel.com.cn/image/zwuc_icon8.png', fa: '', title: '商品点评', desc: 'Comment', cnt: 0 },
    { url: '', img: 'http://img02.camel.com.cn/image/zwuc_icon9.png', fa: '', title: '联系客服', desc: 'Contact', cnt: 0 },
    { url: '', img: 'http://img02.camel.com.cn/image/zwuc_icon10.png', fa: '', title: '地址管理', desc: 'Address', cnt: 0 },
    { url: '', img: 'http://img02.camel.com.cn/image/zwuc_icon11.png', fa: '', title: '修改密码', desc: 'Password', cnt: 0 },
    // { url: '', img: 'http://img02.camel.com.cn/image/zwuc_icon12.png', fa: '', title: '帮助', desc: 'Help', cnt: 0 },
    { url: '', img: 'http://img02.camel.com.cn/image/zwuc_icon13.png', fa: '', title: '设置', desc: 'Settings', cnt: 0 }
  ]
};

export default {
  mine,
  fa,
  layout
};
