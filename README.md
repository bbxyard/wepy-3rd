[TOC]


# wepy-3rd
wepy 3rd libs for wechat mini program


# dir struct

## include libs
- weui
- zan
- xb - mine


# how to use
## 使用步骤
### step1. 创建新项目
```
# proj1为工程名
wepy new proj1

# 将三方集结库clone到 proj1/src/3rd 下.
pushd proj1
git submodule add git@github.com:bbxyard/wepy-3rd.git src/3rd

# 补充信赖包
cnpm install nbox sprint-js randomcolor --save
```

### step2. 更新配置文件

- package.json
```
  "scripts": {
    "dev": "wepy build --watch",
    "build": "cross-env NODE_ENV=production wepy build --no-cache",
    "git-pull-3rd": "git -C src/3rd pull origin master",
    "git-push-3rd": "git -C src/3rd add .; git -C src/3rd commit -am 'app-emit-update-3rd'; git -C src/3rd push origin master",
    "git-push-main": "git add .; git commit -am 'app-self-push-3rd-id'; git push origin master",
    "test": "mocha"
  },
```

- .wepy.config.js
```
    alias: {
      '@': path.join(__dirname, 'src/3rd/lib/components')
    },
```

- .eslintrc.js
```
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    "semi": ["warn", "always"],
    "no-multi-spaces": 0,
    "padded-blocks": 0,
    // 'indent': ['error', 2],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'space-before-function-paren': 0
  }
```

- app.wpy
```
@import '3rd/lib/style/weui.less';
@import '3rd/lib/style/zan.less';
@import '3rd/lib/style/xb.less';
```


### step3. 移除项目中的样例文件
```
#1. components 下的几个文件
#2. index.wpy清空
```

### step4. 代码风格
```
加上分号; 
从C++系列转过来的，没有分号为界，没有安全感，也不习惯.
```

---

## 参考