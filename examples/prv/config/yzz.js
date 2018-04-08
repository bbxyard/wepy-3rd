const YZZ_PAGE_HOME = '/3rd/examples/pages/yzz/';

function normalizePagePath(item) {
  item.pages = item.pages.map(page => YZZ_PAGE_HOME + page);
  return item;
}

const index = {
  list: [
    { id: 'form', name: '表单', open: false, pages: ['form', 'list'] },
    { id: 'toast', name: '操作提示', open: false, pages: ['toast'] },
    { id: 'marquee', name: '文字跑马灯', open: false, pages: ['marquee'] },
    { id: 'drawer', name: '抽屉层', open: false, pages: ['drawer'] },
    { id: 'comment', name: '订单评价', open: false, pages: ['comment'] },
    { id: 'richcontent', name: '富文本解析', open: false, pages: ['richcontent'] },
    { id: 'tab', name: 'tab菜单', open: false, pages: ['lefttab', 'xscroll_top_bar']},
    { id: 'xscroll', name: '横向滚动', open: false, pages: ['xscroll'] },
    { id: 'citypicker', name: '城市三级联选', open: false, pages: ['city_picker'] },
    { id: 'loading', name: '加载动画', open: false, pages: ['loading'] },
    { id: 'pictures', name: '图片翻页', open: false, pages: ['pictures'] },
    { id: 'waterfall', name: '瀑布流', open: false, pages: ['waterfall'] },
    { id: 'calendar', name: '自定义日历', open: false, pages: ['calender'] },
    { id: 'commodity_attr', name: '商品属性联动', open: false, pages: ['commodity_attr'] }
  ].map(item => normalizePagePath(item))
};

const lefttab = {
  main: {
    activeIndex: 0,
    content: '菜单1',
    tabs: (function() { 
      let items = [];
      for (let i = 0; i < 20; ++i) {
        let item = {id: i + 1, tabName: '菜单-' + (i + 1)};
        items.push(item);
      }
      return items;
    })(),
    contentList: (function() {
      let items = [];
      for (let i = 0; i < 10; ++i) items.push({text: '菜单:'});
      return items;
    })()
  }
};

export default {
  index,
  lefttab
};
