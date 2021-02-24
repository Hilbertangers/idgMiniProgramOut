# 中台小程序

## 目录

```shell
|- assets // 静态文件目录
  |- asset-name // 静态文件分类目录
    |- sign.png // 静态文件
|- __gui__ // GUI 专用目录
|- packages // 模块目录
  |- pages // 模块页面目录
    |- page-name // 单个页面目录
      |- index.html // 单个页面展现 html
      |- index.js // 单个页面逻辑 js
      |- index.json // 单页页面配置 json
      |- index.css // 单个页面样式表 css
|- app.json // 小程序全局配置 json
|- app.css // 全局样式表 css
|- app.js // 全局 js, 每页面单独注入，不共享
```

## 工具


## Tips

* 如果 `app.json` 中指定了 `entryPagePath` ，优先使用此页面作为首页
* `app.json` 中未指定 `entryPagePath` 时
  * 如果 `GUI` 生成文件指定了 `entryPagePath` ，优先使用此页面作为首页
  * 如果 `GUI` 生成文件未指定 `entryPagePath` ，优先级为 1. `app.json` 的 `pages` 数组第一项，2. `GUI` 生成文件的配置文件的 `pages` 数组第一项