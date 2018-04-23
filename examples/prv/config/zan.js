
const helper = {
  list: [
    { sublist: [{ class: 'zan-pull-right', title: 'zan-pull-right: 往右靠' }] },
    { sublist: [{ class: 'zan-text-deleted', title: 'zan-text-deleted: 被删除的效果' }] },
  
    { sublist: [
      { class: 'zan-font-12', title: 'zan-font-12: 字号12' },
      { class: 'zan-font-12 zan-font-bold', title: 'zan-font-12 zan-font-bold: 字号12+bold' }
    ] },
    { sublist: [
      { class: 'zan-font-16', title: 'zan-font-16: 字号16' },
      { class: 'zan-font-16 zan-font-bold', title: 'zan-font-16 zan-font-bold: 字号16+bold' }
    ] },
    { sublist: [
      { class: 'zan-c-red', title: 'zan-c-red: 红色' },
      { class: 'zan-c-gray', title: 'zan-c-gray: 灰色' },
      { class: 'zan-c-gray-dark', title: 'zan-c-gray-dark: gray+' },
      { class: 'zan-c-gray-darker', title: 'zan-c-gray-darker: gray++' },
      { class: 'zan-c-black', title: 'zan-c-black: 黑色' },
      { class: 'zan-c-blue', title: 'zan-c-blue: 蓝色' },
      { class: 'zan-c-green', title: 'zan-c-green: 绿色' }
    ] },
    { sublist: [{ class: 'zan-ellipsis', style: 'width: 300px;', title: 'zan-ellipsis：单行溢出则点点点 ->我是占位的字符我是占位的字符我是占位的字符我是占位的字符我是占位的字符我是占位的字符' }] },
    { sublist: [{ class: 'zan-ellipsis--l2', title: 'zan-ellipsis--l2：双行溢出则点点点 ->我是占位的字符我是占位的字符我是占位的字符我是占位的字符我是占位的字符我是占位的字符' }] }
  ]
};

const cardOne = {
  img: { mode: 'aspectFit', src: 'https://d.app.bbxyard.com/ui/iconfont-tosend.png' },
  detail: [
    { L: '红烧牛肉【虚拟商品】【有库存】【有sku】', LC:'zan-ellipsis--l2', R: '$ 999.99' },
    { C: 'zan-c-gray-dark', L: '3000克 50%', R: 'x2' },
    { C: 'zan-c-gray-darker', L: '已发货', LC: 'zan-c-red' }
  ]
};

const cardTwo = {
  img: { mode: 'aspectFit', src: 'https://d.app.bbxyard.com/ui/iconfont-tosend.png' },
  detail: [
    { L: '红烧牛肉【虚拟商品】【有库存】【有sku】', LC:'zan-ellipsis--l2', R: '$ 999.99' },
    { C: 'zan-c-gray-dark', L: '3000克 50%', R: 'x2' },
    { C: 'zan-c-gray-darker', L: '5000克 30%', R: 'x2' },
    { C: 'zan-c-blue', L: '8000克 20%', R: 'x2' },
    { C: 'zan-c-gray-darker', L: '已发货', LC: 'zan-c-red' }
  ]
};

const card = {
  list: [ cardOne, cardTwo ]
};

const index = {
  tab: {
    list: [
      { id: 'badge', title: 'badge' },
      { id: 'btn', title: 'btn' },
      { id: 'card', title: 'card' },
      { id: 'cell', title: 'cell' },
      { id: 'dashboard', title: 'dashboard' },
      { id: 'dialog', title: 'dialog' },
      { id: 'form', title: 'form' },
      { id: 'helper', title: 'helper' },
      { id: 'icon', title: 'icon' },
      { id: 'label', title: 'label' },
      { id: 'loadmore', title: 'loadmore' },
      { id: 'panel', title: 'panel' },
      { id: 'quantity', title: 'quantity' },
      { id: 'steps', title: 'steps' },
      { id: 'switch', title: 'switch' },
      { id: 'tab', title: 'tab' },
      { id: 'toast', title: 'toast' },
      { id: 'toptips', title: 'toptips' }
    ],
    selectedId: 'helper',
    height: 45
  },
  tabTheme: 'zan-scroll'
};

const demo = {
  helper: helper.list,
  card: card.list
};

export default {
  demo,
  index
};
